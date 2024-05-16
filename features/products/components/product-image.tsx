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
        'bg-[#F6F6F6] flex items-center justify-center',
        isProductPageFull ? 'h-[calc(100svh-102px)]' : '',
        isCartItem ? 'h-[380px] w-[310px]' : '',
        isGridItem ? 'h-[380px] w-[310px]' : '',
        isProductPagePreview ? 'h-[calc((100svh-102px)/10)]' : '',
        className
      )}
    >
      <Image
        src={image?.url || ''}
        alt={alt || ''}
        width={1650}
        height={2200}
        className={cn(
          'object-center w-full h-full transition ease-in-out cursor-pointer',
          isProductPageFull ? 'object-contain' : '',
          isCartItem ? 'object-contain' : '',
          isGridItem ? 'object-cover' : '',
          isProductPagePreview ? 'object cover' : ''
        )}
      />
    </div>
  );
};
