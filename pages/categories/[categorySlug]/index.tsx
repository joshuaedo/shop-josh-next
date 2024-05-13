import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import { Grid, GridItem } from '@/components/common/grid';
import { PageLoader } from '@/components/common/loader';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const router = useRouter();
  const slug = router?.query?.categorySlug;
  const { category, isCheckedCategory } = useCategory(slug);
  return isCheckedCategory ? (
    <Page>
      <Head title={category?.name} image={category?.images[0]?.url} />
      <Header title={category?.name} />
      <Grid>
        {category?.products.map((product) => (
          <GridItem
            key={product.id}
            title={product.name}
            href={`/products/${product.slug}`}
            imageUrl={product?.images[0]?.url}
            id={product?.id}
            price={product?.price}
          />
        ))}
      </Grid>
    </Page>
  ) : (
    <PageLoader />
  );
};

export default CategoryPage;
