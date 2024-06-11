import { PageHead } from '@/components/layout/head';
import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { GetServerSideProps } from 'next';
import { getProductBySlug } from '@/features/products/lib/queries';
import { getCategoryBySlug } from '@/features/categories/lib/queries';
import { ExtendedProduct } from '@/features/products/types/extensions';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

interface ProductPageProps {
  product: ExtendedProduct;
  relatedProducts: ExtendedProduct[];
}

const ProductPage = ({ product, relatedProducts }: ProductPageProps) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageHead
        title={product?.name}
        description={product?.description}
        image={product?.images && product?.images[0]?.url}
      />
      <Page>
        {product ? (
          <Product product={product} />
        ) : (
          <div className='p-6'>No product found</div>
        )}
        <Header title='Related products' />
        <ProductGrid>
          {relatedProducts
            ?.filter((relatedProduct) => relatedProduct?.id !== product?.id)
            ?.slice(0, 3)
            ?.map((product) => (
              <ProductGridItem key={product?.id} product={product} />
            ))}
        </ProductGrid>
      </Page>
    </Suspense>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  params,
}) => {
  const { productSlug } = params || {};
  const product = await getProductBySlug(
    typeof productSlug === 'string' ? productSlug : ''
  );
  const categorySlug = product?.categorySlug;
  const relatedCategory = await getCategoryBySlug({
    productLimit: '5',
    slug: typeof categorySlug === 'string' ? categorySlug : undefined,
  });

  return {
    props: {
      product,
      relatedProducts: relatedCategory?.products,
    },
  };
};
