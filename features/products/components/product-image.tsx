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
  const isProductPagePreview = type === 'product-page-preview';
  const isCartItem = type === 'cart-item';
  const isGridItem = type === 'grid-item';

  return (
    <div
      className={cn(
        'bg-white flex items-center justify-center aspect-[3/4]',
        isProductPageFull ? 'lg:h-[calc(100svh-102px)]' : '',
        isProductPagePreview ? 'h-[calc((100svh-102px)/10)] ' : '',
        isCartItem ? 'h-[calc((100svh-102px)/7)] border border-black' : '',
        isGridItem ? 'h-[380px]' : '',
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
          isProductPagePreview ? 'object-cover cursor-pointer' : '',
          isCartItem ? 'object-cover' : '',
          isGridItem ? 'object-contain cursor-pointer' : ''
        )}
      />
    </div>
  );
};
