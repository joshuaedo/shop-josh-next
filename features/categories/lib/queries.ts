import { axiosShopInstance, shopId } from '@/lib/axios';
import { ExtendedCategory } from '../types/extensions';

type getCategoryOptions = {
  slug?: string | undefined;
  productLimit: string;
};

const getAllCategories = async ({ productLimit }: getCategoryOptions) => {
  try {
    const categories = await axiosShopInstance.get(
      `/categories/get?shopId=${shopId}&productLimit=${productLimit}`
    );
    return categories?.data as ExtendedCategory[];
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

const getCategoryBySlug = async ({
  slug,
  productLimit,
}: getCategoryOptions) => {
  try {
    const category = await axiosShopInstance.get(
      `/categories/get?shopId=${shopId}&categorySlug=${slug}&productLimit=${productLimit}`
    );
    return category?.data as ExtendedCategory;
  } catch (error) {
    throw new Error('Failed to fetch category');
  }
};

export { getAllCategories, getCategoryBySlug };
