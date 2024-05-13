import { useQuery } from '@tanstack/react-query';
import { getAllCategories, getCategoryBySlug } from '../lib/queries';

const useCategory = (slug?: string | string[] | undefined) => {
  const categorySlug = slug && (typeof slug === 'string' ? slug : slug[0]);

  const {
    data: category,
    isFetched: isGottenCategory,
    isFetching: isGettingCategory,
  } = useQuery({
    queryFn: () => getCategoryBySlug(categorySlug ?? ''),
    queryKey: ['category', categorySlug],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const {
    data: categories,
    isFetched: isGottenCategories,
    isFetching: isGettingCategories,
  } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ['categories'],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  return {
    category,
    isGettingCategory,
    isGottenCategory,
    categories,
    isGettingCategories,
    isGottenCategories,
  };
};

export default useCategory;
