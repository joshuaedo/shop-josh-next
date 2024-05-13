import Head from '@/components/layout/head';
import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import useProduct from '@/features/products/hooks/use-product';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const router = useRouter();
  const slug = router?.query?.productSlug;
  const { product, isCheckedProduct } = useProduct(slug);

  return isCheckedProduct ? (
    <Page>
      <Head
        title={product?.name}
        description={product?.description}
        image={product?.images[0]?.url}
      />
      <Product product={product} />
      <Header title='Related products' />
      {/* <Grid /> */}
    </Page>
  ) : (
    <PageLoader />
  );
};

export default ProductPage;
