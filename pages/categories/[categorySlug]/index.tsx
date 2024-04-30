import Head from '@/components/common/head';
import useCategory from '@/features/categories/hooks/use-category';
import { useRouter } from 'next/router';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const router = useRouter();
  const slug = router?.query?.categorySlug;
  const { category } = useCategory(slug);
  return (
    <>
      <Head />
      CategoryPage
    </>
  );
};

export default CategoryPage;
