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
import React from 'react';

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
        'w-full h-full py-6 gap-x-6 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center',
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
  return (
    <div ref={ref} className={className}>
      <div className='max-w-[310px] h-[460px] overflow-hidden space-y-2'>
        <div className=''>
          <Link
            href={slug ? `/products/${slug}` : '#'}
            className={cn('cursor-pointer h-full w-full')}
          >
            <ProductImage image={images[0]} alt={name} type='grid-item' />
          </Link>
        </div>
        <div className='text-sm space-y-1'>
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
      </div>
    </div>
  );
});

ProductGridItem.displayName = 'ProductGridItem';
