import { cn } from '@/lib/utils';
import { ProductImage } from './product-image';
import { useState } from 'react';
import useMediaQuery from '@/hooks/use-media-query';

interface ProductImageGalleryProps {
  alt: string;
  images:
    | {
        url: string;
        id: string;
      }[]
    | undefined;
}

export const ProductImageGallery = ({
  images,
  alt,
}: ProductImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { md } = useMediaQuery();

  const Preview = () =>
    images?.map((image, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            setSelectedImageIndex(index);
          }}
          onMouseDown={() => {
            setSelectedImageIndex(index);
          }}
          onMouseOver={() => {
            setSelectedImageIndex(index);
          }}
        >
          <ProductImage
            image={image}
            alt={alt}
            type='product-page-preview'
            className={cn(
              index === selectedImageIndex
                ? 'border border-black transition ease-in-out'
                : ''
            )}
          />
        </div>
      );
    });

  const Full = () => (
    <ProductImage
      image={images && images[selectedImageIndex]}
      alt={alt}
      type='product-page-full'
    />
  );

  return md ? (
    <div className={cn('flex gap-6 justify-center')}>
      <div className={cn('space-y-6')}>
        <Preview />
      </div>
      <div className={cn('')}>
        <Full />
      </div>
    </div>
  ) : (
    <div className={cn('flex flex-col gap-3')}>
      <div className={cn('')}>
        <Full />
      </div>
      <div className={cn('flex justify-evenly')}>
        <Preview />
      </div>
    </div>
  );
};
