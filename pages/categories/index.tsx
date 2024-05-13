import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useCategory from '@/features/categories/hooks/use-category';
import { Header } from '@/components/common/header';
import { Grid, GridItem } from '@/components/common/grid';
import { PageLoader } from '@/components/common/loader';
import { logQueryResult } from '@/lib/utils';

interface CategoriesPageProps {}

const CategoriesPage = ({}: CategoriesPageProps) => {
  const { allCategories, isCheckedAllCategories } = useCategory();
  logQueryResult('allCategories', allCategories);

  return isCheckedAllCategories ? (
    <Page>
      <Head title='All Categories' />
      <Header title='All Categories' />
      <Grid>
        {allCategories?.map((category) => (
          <GridItem
            key={category.id}
            title={category.name}
            href={`/categories/${category.slug}`}
            imageUrl={category?.images[0]?.url}
            id={category?.id}
            // price={category?.price} TODO: find something else to display here
          />
        ))}
      </Grid>
    </Page>
  ) : (
    <PageLoader />
  );
};

export default CategoriesPage;
