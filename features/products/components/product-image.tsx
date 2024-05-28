import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProductImageProps {
  type:
    | 'grid-item'
    | 'product-page-full'
    | 'cart-item'
    | 'product-page-preview';
  alt: string;
  image:
    | {
        url: string;
      }
    | undefined;
  className?: string;
}

export const ProductImage = ({
  type = 'grid-item',
  image,
  alt,
  className,
}: ProductImageProps) => {
  const isProductPageFull = type === 'product-page-full';
  const isCartItem = type === 'cart-item';
  const isGridItem = type === 'grid-item';
  const isProductPagePreview = type === 'product-page-preview';

  return (
    <div
      className={cn(
        'bg-white flex items-center justify-center',
        isProductPageFull ? 'lg:h-[calc(100svh-102px)]' : '',
        isCartItem
          ? 'h-[calc((100svh-102px)/5)] w-[calc((100svh-102px)/6)] border border-black'
          : '',
        isGridItem ? 'h-[380px] w-full' : '',
        isProductPagePreview ? 'h-[calc((100svh-102px)/10)]' : '',
        className
      )}
    >
      <Image
        fetchPriority='high'
        src={image?.url || ''}
        alt={alt}
        width={1650}
        height={2200}
        className={cn(
          'object-center w-full h-full transition ease-in-out',
          isProductPageFull ? 'object-contain' : '',
          isCartItem ? 'object-cover' : '',
          isGridItem ? 'object-contain cursor-pointer' : '',
          isProductPagePreview ? 'object cover cursor-pointer' : ''
        )}
      />
    </div>
  );
};
