import { axiosShopInstance, baseURL, shopId } from '@/lib/axios';
import { ExtendedProduct } from '../types/extensions';

const fetchAllProducts = async (): Promise<ExtendedProduct[]> => {
  try {
    const res = await fetch(`${baseURL}/products/get?shopId=${shopId}`);

    return res?.json();
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

const getAllProducts = async () => {
  try {
    const products = await axiosShopInstance.get(
      `/products/get?shopId=${shopId}`
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

export { getAllProducts, fetchAllProducts, getProductBySlug };
