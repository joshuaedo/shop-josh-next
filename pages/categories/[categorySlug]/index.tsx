import Head from '@/components/common/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';
import { useRouter } from 'next/router';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const router = useRouter();
  const slug = router?.query?.categorySlug;
  const { category } = useCategory(slug);
  return (
    <Page>
      <Head />
      CategoryPage
    </Page>
  );
};

export default CategoryPage;
