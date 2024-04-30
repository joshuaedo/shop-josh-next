import { ImageType } from '@/types/validators';
import { CategoryType } from './validators';

export type ExtendedCategory = CategoryType & {
  images: ImageType[];
};
