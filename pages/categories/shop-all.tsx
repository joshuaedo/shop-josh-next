import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';
import { Header } from '@/components/common/header';
import { PageLoader } from '@/components/common/loader';
import { Grid, GridItem } from '@/components/common/grid';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { allProducts, isCheckedAllProducts } = useProduct();
  return isCheckedAllProducts ? (
    <Page>
      <Head title='Shop All' />
      <Header title='Shop All' />
      <Grid>
        {allProducts?.map((product) => (
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

export default ShopAllPage;
