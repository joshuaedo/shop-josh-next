import { PageHead } from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { PageLoader } from '@/components/common/loader';
import { siteConfig } from '@/config/site';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const { description } = siteConfig;
  const router = useRouter();
  const slug = router?.query?.categorySlug;
  const { category } = useCategory(slug);
  return category ? (
    <>
      <PageHead
        title={category?.name}
        description={description}
        image={category?.images && category?.images[0]?.url}
      />
      <Page>
        <Header title={category?.name} />
        <ProductGrid>
          {category?.products &&
            category?.products?.map((product) => (
              <ProductGridItem key={product?.id} product={product} />
            ))}
        </ProductGrid>
      </Page>
    </>
  ) : (
    <PageLoader />
  );
};

export default CategoryPage;
