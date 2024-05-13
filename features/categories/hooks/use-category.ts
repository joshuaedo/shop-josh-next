import { useQuery } from '@tanstack/react-query';
import { getAllCategories, getCategoryBySlug } from '../lib/queries';
import { useEffect, useState } from 'react';

const useCategory = (slug?: string | string[] | undefined) => {
  const categorySlug = slug && (typeof slug === 'string' ? slug : slug[0]);
  const [isCheckedCategory, setIsCheckedCategory] = useState(false);
  const [isCheckedAllCategories, setIsCheckedAllCategories] = useState(false);

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
    data: allCategories,
    isFetched: isGottenAllCategories,
    isFetching: isGettingAllCategories,
  } = useQuery({
    queryFn: () => getAllCategories(),
    queryKey: ['categories'],
    refetchOnWindowFocus: false,
    enabled: true,
  });

  useEffect(() => {
    if (isGettingCategory && !isGottenCategory) {
      setIsCheckedCategory(false);
    } else if (!isGettingCategory && isGottenCategory && category) {
      setIsCheckedCategory(true);
    } else {
      setIsCheckedCategory(false);
    }
  }, [isGettingCategory, isGottenCategory, category]);

  useEffect(() => {
    if (isGettingAllCategories && !isGottenAllCategories) {
      setIsCheckedAllCategories(false);
    } else if (
      !isGettingAllCategories &&
      isGottenAllCategories &&
      allCategories
    ) {
      setIsCheckedAllCategories(true);
    } else {
      setIsCheckedAllCategories(false);
    }
  }, [isGettingAllCategories, isGottenAllCategories, allCategories]);

  return {
    category,
    isCheckedCategory,
    allCategories,
    isCheckedAllCategories,
  };
};

export default useCategory;
