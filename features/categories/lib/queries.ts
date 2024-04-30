import { axiosShopInstance, shopId } from '@/lib/axios';
import { ExtendedCategory } from '../types/extensions';

const getAllCategories = async () => {
  try {
    const categories = await axiosShopInstance.get(
      `/categories/get?shopId=${shopId}`
    );
    return categories?.data as ExtendedCategory[];
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

const getCategoryBySlug = async (categorySlug: string) => {
  try {
    const category = await axiosShopInstance.get(
      `/categories/get?shopId=${shopId}&categorySlug=${categorySlug}`
    );
    return category?.data as ExtendedCategory;
  } catch (error) {
    throw new Error('Failed to fetch category');
  }
};

export { getAllCategories, getCategoryBySlug };
