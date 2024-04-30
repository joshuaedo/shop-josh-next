import Head from '@/components/common/head';
import useCategory from '@/features/categories/hooks/use-category';

interface CategoriesPageProps {}

const CategoriesPage = ({}: CategoriesPageProps) => {
  const { categories } = useCategory();
  return (
    <>
      <Head />
      CategoriesPage
    </>
  );
};

export default CategoriesPage;
