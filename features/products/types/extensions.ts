import { ImageType, UserType } from '@/types/validators';
import { ProductType } from './validators';
import { CategoryType } from '@/features/categories/types/validators';

export type ExtendedProduct = ProductType & {
  images: ImageType[];
  category: CategoryType;
  creator: UserType;
};

export type OrderedProduct = ExtendedProduct & {
  quantity: number;
};
