import Head from '@/components/layout/head';
import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import useProduct from '@/features/products/hooks/use-product';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import { Grid, GridItem } from '@/components/common/grid';
import useCategory from '@/features/categories/hooks/use-category';

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const router = useRouter();
  const slug = router?.query?.productSlug;
  const { product, isCheckedProduct } = useProduct(slug);
  const { category: relatedProducts } = useCategory(product?.category?.slug);

  return isCheckedProduct ? (
    <Page>
      <Head
        title={product?.name}
        description={product?.description}
        image={product?.images[0]?.url}
      />
      <Product product={product} />
      <Header title='Related products' />
      <Grid>
        {relatedProducts?.products
          // ?.filter((product) => product.id !== product.id) // TODO: filter out current product
          ?.map((product) => (
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

export default ProductPage;
