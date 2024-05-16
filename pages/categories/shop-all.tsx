import Head from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';
import { Header } from '@/components/common/header';
import { PageLoader } from '@/components/common/loader';
import { ProductGrid, ProductGridItem } from '@/features/products/components/product-grid';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { allProducts, isCheckedAllProducts } = useProduct();
  return allProducts ? (
    <Page>
      <Head title='Shop All' />
      <Header title='Shop All' />
      <ProductGrid>
        {allProducts?.map((product) => (
          <ProductGridItem key={product?.id} {...product} />
        ))}
      </ProductGrid>
    </Page>
  ) : (
    <PageLoader />
  );
};

export default ShopAllPage;
