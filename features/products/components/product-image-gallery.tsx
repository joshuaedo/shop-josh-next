import { cn } from '@/lib/utils';
import { ProductImage } from './product-image';
import { useState, useMemo } from 'react';
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
  const { lg } = useMediaQuery();

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const previewImages = useMemo(() => {
    return images?.map((image, index) => (
      <div
        key={image.id}
        onClick={() => handleImageClick(index)}
        onMouseDown={() => handleImageClick(index)}
        onMouseOver={() => handleImageClick(index)}
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
    ));
  }, [images, selectedImageIndex, alt]);

  const fullImage = useMemo(() => {
    return (
      <ProductImage
        image={images && images[selectedImageIndex]}
        alt={alt}
        type='product-page-full'
      />
    );
  }, [images, selectedImageIndex, alt]);

  return lg ? (
    <div className='flex gap-6 justify-center'>
      <div className='space-y-6'>{previewImages}</div>
      <div>{fullImage}</div>
    </div>
  ) : (
    <div className='flex flex-col space-y-6'>
      <div>{fullImage}</div>
      <div className='flex justify-evenly'>{previewImages}</div>
    </div>
  );
};
