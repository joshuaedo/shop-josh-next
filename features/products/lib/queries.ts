import { axiosShopInstance } from '@/lib/axios';
import { ExtendedProduct } from '../types/extensions';
import { INFINITE_SCROLLING_PAGINATION_RESULTS, shopId } from '@/config';

const searchProducts = async (keywords: string) => {
  try {
    const products = await axiosShopInstance.get(
      `/search/products?shopId=${shopId}&limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&keywords=${keywords}`
    );

    return products?.data as ExtendedProduct[];
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

const getInitialProductPage = async () => {
  try {
    const products = await axiosShopInstance.get(
      `/products/get?shopId=${shopId}&limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}`
    );

    return products?.data as ExtendedProduct[];
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

const getNextProductPage = async ({ pageParam = 1 }) => {
  try {
    const products = await axiosShopInstance.get(
      `/products/get?shopId=${shopId}&limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}`
    );

    return products?.data as ExtendedProduct[];
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

const getProductBySlug = async (productSlug: string) => {
  try {
    const product = await axiosShopInstance.get(
      `/products/get?shopId=${shopId}&productSlug=${productSlug}`
    );
    return product?.data as ExtendedProduct;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
};

export {
  searchProducts,
  getInitialProductPage,
  getNextProductPage,
  getProductBySlug,
};
