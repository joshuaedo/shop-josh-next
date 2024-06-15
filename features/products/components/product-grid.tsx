import { cn, formatPrice } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/common/hover-card';
import { ExtendedProduct } from '../types/extensions';
import useProductCart from '../hooks/use-product-cart';
import { ProductImage } from './product-image';
import React, { useMemo } from 'react';

export const ProductGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-full h-full py-6 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center',
        className
      )}
    >
      {children}
    </div>
  );
};

interface ProductGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  product: ExtendedProduct;
}

export const ProductGridItem = React.forwardRef<
  HTMLDivElement,
  ProductGridItemProps
>(({ product, className }, ref) => {
  const { name, price, slug, images } = product;
  const { addItem } = useProductCart();

  const productDetails = useMemo(() => {
    return (
      <div className='text-sm space-y-1 w-[275px] md:w-[300px] lg:w-[325px] xl:w-full'>
        <div className='flex items-start justify-between gap-6'>
          <HoverCard>
            <HoverCardTrigger className='cursor-pointer uppercase'>
              {name}
            </HoverCardTrigger>
            <HoverCardContent>{name}</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <PlusCircle
                onClick={() => addItem(product)}
                className='cursor-pointer hover:text-white hover:fill-black'
              />
            </HoverCardTrigger>
            <HoverCardContent>Add to cart</HoverCardContent>
          </HoverCard>
        </div>
        {price && <div>{formatPrice(price)}</div>}
      </div>
    );
  }, [name, price, product, addItem]);

  return (
    <div ref={ref} className={cn('', className)}>
      <div className='h-[460px] overflow-hidden space-y-4'>
        <Link
          href={slug ? `/products/${slug}` : '#'}
          className='cursor-pointer h-full w-full'
        >
          <ProductImage image={images[0]} alt={name} type='grid-item' />
        </Link>
        <div className='w-full flex justify-center items-center'>
          {productDetails}
        </div>
      </div>
    </div>
  );
});

ProductGridItem.displayName = 'ProductGridItem';
