import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { PageLoader } from '@/components/common/loader';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const router = useRouter();
  const slug = router?.query?.categorySlug;
  const { category, isCheckedCategory } = useCategory(slug);
  return isCheckedCategory ? (
    <Page>
      <Head
        title={category?.name}
        image={category?.images && category?.images[0]?.url}
      />
      <Header title={category?.name} />
      <ProductGrid>
        {category?.products.map((product) => (
          <ProductGridItem key={product?.id} {...product} />
        ))}
      </ProductGrid>
    </Page>
  ) : (
    <PageLoader />
  );
};

export default CategoryPage;
