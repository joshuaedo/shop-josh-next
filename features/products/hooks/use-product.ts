import { useQuery } from '@tanstack/react-query';
import { getAllProducts, getProductBySlug } from '../lib/queries';

const useProduct = (slug?: string | string[] | undefined) => {
  const productSlug = slug && (typeof slug === 'string' ? slug : slug[0]);

  const {
    data: product,
    isFetched: isGottenProduct,
    isFetching: isGettingProduct,
  } = useQuery({
    queryFn: () => getProductBySlug(productSlug ?? ''),
    queryKey: ['product'],
    enabled: true,
  });

  const {
    data: products,
    isFetched: isGottenProducts,
    isFetching: isGettingProducts,
  } = useQuery({
    queryFn: () => getAllProducts(),
    queryKey: ['products'],
    enabled: true,
  });

  return {
    product,
    isGettingProduct,
    isGottenProduct,
    products,
    isGettingProducts,
    isGottenProducts,
  };
};

export default useProduct;
