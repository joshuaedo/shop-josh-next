import { useQuery } from '@tanstack/react-query';
import { getAllProducts, getProductBySlug } from '../lib/queries';
import { useEffect, useState } from 'react';

const useProduct = (slug?: string | string[] | undefined) => {
  const productSlug = slug && (typeof slug === 'string' ? slug : slug[0]);
  const [isCheckedProduct, setIsCheckedProduct] = useState(false);
  const [isCheckedAllProducts, setIsCheckedAllProducts] = useState(false);

  const {
    data: product,
    isFetched: isGottenProduct,
    isFetching: isGettingProduct,
  } = useQuery({
    queryFn: () => getProductBySlug(productSlug ?? ''),
    queryKey: ['product', productSlug],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    data: allProducts,
    isFetched: isGottenAllProducts,
    isFetching: isGettingAllProducts,
  } = useQuery({
    queryFn: () => getAllProducts(),
    queryKey: ['products'],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  useEffect(() => {
    if (isGettingProduct && !isGottenProduct) {
      setIsCheckedProduct(false);
    } else if (!isGettingProduct && isGottenProduct && product) {
      setIsCheckedProduct(true);
    } else {
      setIsCheckedProduct(false);
    }
  }, [isGettingProduct, isGottenProduct, product]);

  useEffect(() => {
    if (isGettingAllProducts && !isGottenAllProducts) {
      setIsCheckedAllProducts(false);
    } else if (!isGettingAllProducts && isGottenAllProducts && allProducts) {
      setIsCheckedAllProducts(true);
    } else {
      setIsCheckedAllProducts(false);
    }
  }, [isGettingAllProducts, isGottenAllProducts, allProducts]);

  return {
    product,
    isCheckedProduct,
    allProducts,
    isCheckedAllProducts,
  };
};

export default useProduct;
