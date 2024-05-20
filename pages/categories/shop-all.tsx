import { PageHead } from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';
import { Header } from '@/components/common/header';
import { PageLoader } from '@/components/common/loader';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { siteConfig } from '@/config/site';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { siteName, images } = siteConfig;
  const { allProducts, isCheckedAllProducts } = useProduct();
  return allProducts ? (
    <>
      <PageHead
        title='Shop All'
        description={`Shop All on ${siteName}`}
        image={images[1]}
      />
      <Page>
        <Header title='Shop All' />
        <ProductGrid>
          {allProducts?.map((product) => (
            <ProductGridItem key={product?.id} {...product} />
          ))}
        </ProductGrid>
      </Page>
    </>
  ) : (
    <PageLoader />
  );
};

export default ShopAllPage;
