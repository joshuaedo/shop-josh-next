import { PageHead } from '@/components/layout/head';
import { Page } from '@/components/common/page';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { PageLoader } from '@/components/common/loader';
import { siteConfig } from '@/config/site';
import { GetServerSideProps } from 'next';
import { getCategoryBySlug } from '@/features/categories/lib/queries';
import { ExtendedCategory } from '@/features/categories/types/extensions';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

interface CategoryPageProps {
  category: ExtendedCategory;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const { description } = siteConfig;
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async ({ params }) => {
  const { categorySlug } = params || {};
  const category = await getCategoryBySlug({
    productLimit: '16',
    slug: typeof categorySlug === 'string' ? categorySlug : undefined,
  });

  return {
    props: {
      category,
    },
  };
};
