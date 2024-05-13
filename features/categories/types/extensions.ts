import { ImageType } from '@/types/validators';
import { CategoryType } from './validators';
import { ExtendedProduct } from '@/features/products/types/extensions';

export type ExtendedCategory = CategoryType & {
  images: ImageType[];
  products: ExtendedProduct[];
};
