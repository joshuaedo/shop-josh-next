import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';

interface CategoriesPageProps {}

const CategoriesPage = ({}: CategoriesPageProps) => {
  const { categories } = useCategory();
  return (
    <Page>
      <Head />
    </Page>
  );
};

export default CategoriesPage;
