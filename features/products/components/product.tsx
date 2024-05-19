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
  const { lg } = useMediaQuery();
  const { disclaimer } = siteConfig;

  const ProductHeader = () => (
    <div className={cn('space-y-1', lg ? 'text-xl' : 'text-lg')}>
      <p className={cn('uppercase', lg ? '' : '')}>{name}</p>
      <p className={cn('', lg ? 'text-base' : 'text-sm')}>{category?.name}</p>
      <p className={cn('', lg ? '' : '')}>{formatPrice(price)}</p>
    </div>
  );

  const ProductFooter = () => (
    <div className={cn('divide-y divide-black', lg ? 'text-base' : 'text-sm')}>
      <p className={cn('py-6 leading-6 border-t border-black', lg ? '' : '')}>
        {description}
      </p>
      <div className={cn('py-6', lg ? '' : '')}>
        {lg ? (
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
              className={cn(
                GeistSans.className,
                'px-6 pt-6 pb-16 font-medium '
              )}
            >
              <article className='border border-black p-6 mt-12'>
                {disclaimer}
              </article>
            </DrawerContent>
          </Drawer>
        )}
      </div>
      <Button
        className='group justify-between text-sm lg:text-base'
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
        'border-b border-black grid grid-cols-1 lg:grid-cols-2 place-content-center py-6'
      )}
    >
      {lg ? (
        <>
          <ProductImageGallery images={images} alt={name} />
          <div className='flex flex-col justify-between'>
            <ProductHeader />
            <ProductFooter />
          </div>
        </>
      ) : (
        <div className='space-y-6'>
          <ProductHeader />
          <ProductImageGallery images={images} alt={name} />
          <ProductFooter />
        </div>
      )}
    </section>
  );
};
