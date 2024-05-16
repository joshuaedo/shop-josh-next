import { cn, formatPrice } from '@/lib/utils';
import { ExtendedProduct } from '../types/extensions';
import { ProductImageGallery } from './product-image-gallery';
import useMediaQuery from '@/hooks/use-media-query';
import { Button } from '@/components/common/button';
import useProductCart from '../hooks/use-product-cart';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/common/hover-card';
import { siteConfig } from '@/config/site';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/common/drawer';
import { GeistSans } from 'geist/font/sans';

interface ProductProps {
  product: ExtendedProduct;
}

export const Product = ({ product }: ProductProps) => {
  const { name, price, description, images, category } = product;
  const { addItem } = useProductCart();
  const { md } = useMediaQuery();
  const { disclaimer } = siteConfig;

  const ProductHeader = () => (
    <div className={cn('space-y-1', md ? 'text-xl' : 'text-lg')}>
      <p className={cn('uppercase', md ? '' : '')}>{name}</p>
      <p className={cn('', md ? 'text-lg' : 'text-base')}>{category?.name}</p>
      <p className={cn('', md ? '' : '')}>{formatPrice(price)}</p>
    </div>
  );

  const ProductFooter = () => (
    <div className={cn('divide-y divide-black', md ? 'text-lg' : 'text-base')}>
      <p className={cn('py-6 border-t border-black', md ? '' : ' mt-12')}>
        {md ? (
          <HoverCard>
            <HoverCardTrigger>
              <span className='underline cursor-help'>Disclaimer</span>
            </HoverCardTrigger>
            <HoverCardContent>{disclaimer}</HoverCardContent>
          </HoverCard>
        ) : (
          <Drawer>
            <DrawerTrigger asChild>
              <span className='underline cursor-help'>Disclaimer</span>
            </DrawerTrigger>
            <DrawerContent
              className={cn(GeistSans.className, 'p-6 font-semibold')}
            >
              <article className='pt-6'>{disclaimer}</article>
            </DrawerContent>
          </Drawer>
        )}
      </p>
      <p className={cn('font-medium py-6 leading-6', md ? '' : '')}>
        {description}
      </p>
      <Button
        className='group justify-between font-semibold text-base lg:text-lg'
        onClick={() => addItem(product)}
      >
        Add to Cart
        <span className='bg-black size-3 lg:size-4 rounded-[999px] group-hover:bg-white' />
      </Button>
    </div>
  );

  return (
    <section
      id='product'
      className={cn(
        'font-semibold tracking-tighter border-b border-black grid grid-cols-1 md:grid-cols-2 place-content-center py-6'
      )}
    >
      {md ? (
        <>
          <ProductImageGallery images={images} alt={name} />
          <div className='flex flex-col justify-between'>
            <ProductHeader />
            <ProductFooter />
          </div>
        </>
      ) : (
        <>
          <ProductHeader />
          <ProductImageGallery images={images} alt={name} />
          <ProductFooter />
        </>
      )}
    </section>
  );
};
