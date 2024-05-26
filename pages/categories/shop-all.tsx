import { PageHead } from '@/components/layout/head';
import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';
import { Header } from '@/components/common/header';
import { Loader, PageLoader } from '@/components/common/loader';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { siteConfig } from '@/config/site';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { siteName, images } = siteConfig;
  const { allProducts, lastProductRef, isGettingNextPage } = useProduct();

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
          {allProducts?.map((product, index) =>
            index === allProducts?.length - 1 ? (
              <ProductGridItem
                product={product}
                key={product?.id}
                ref={lastProductRef}
              />
            ) : (
              <ProductGridItem key={product?.id} product={product} />
            )
          )}
        </ProductGrid>
        {isGettingNextPage && <Loader />}
      </Page>
    </>
  ) : (
    <PageLoader />
  );
};

export default ShopAllPage;
