import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  getInitialProductPage,
  getNextProductPage,
  getProductBySlug,
} from '../lib/queries';
import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';

const useProduct = (slug?: string | string[] | undefined) => {
  const productSlug = slug && (typeof slug === 'string' ? slug : slug[0]);
  const [isCheckedProduct, setIsCheckedProduct] = useState(false);
  const [isCheckedInitialProducts, setIsCheckedInitialProducts] =
    useState(false);
  const ref = useRef<HTMLElement>(null);

  const {
    data: product,
    isFetched: isGottenProduct,
    isFetching: isGettingProduct,
  } = useQuery({
    queryFn: () => getProductBySlug(productSlug ?? ''),
    queryKey: ['product', productSlug],
    refetchOnWindowFocus: false,
    enabled: !!productSlug,
  });

  const { ref: lastProductRef, entry } = useIntersection({
    root: ref.current,
    threshold: 1,
  });

  const {
    data: initialProductPage,
    isFetched: isGottenInitialProducts,
    isFetching: isGettingInitialProducts,
  } = useQuery({
    queryFn: getInitialProductPage,
    queryKey: ['initial-product-page'],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    data: nextProductPage,
    fetchNextPage,
    isFetchingNextPage: isGettingNextPage,
  } = useInfiniteQuery({
    queryKey: ['next-product-page'],
    queryFn: getNextProductPage,
    initialPageParam: 1,
    initialData: {
      pages: initialProductPage ? [initialProductPage] : [],
      pageParams: [1],
    },
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  const allProducts = nextProductPage?.pages.flat() ?? initialProductPage;

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
    if (isGettingInitialProducts && !isGottenInitialProducts) {
      setIsCheckedInitialProducts(false);
    } else if (
      !isGettingInitialProducts &&
      isGottenInitialProducts &&
      initialProductPage
    ) {
      setIsCheckedInitialProducts(true);
    } else {
      setIsCheckedInitialProducts(false);
    }
  }, [isGettingInitialProducts, isGottenInitialProducts, initialProductPage]);

  return {
    product,
    isCheckedProduct,
    allProducts,
    isCheckedInitialProducts,
    isGettingNextPage,
    lastProductRef,
  };
};

export default useProduct;
