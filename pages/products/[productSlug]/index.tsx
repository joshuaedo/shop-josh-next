import { PageHead } from '@/components/layout/head';
import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import useProduct from '@/features/products/hooks/use-product';
import { useRouter } from 'next/router';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import useCategory from '@/features/categories/hooks/use-category';

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const router = useRouter();
  const slug = router?.query?.productSlug;
  const { product } = useProduct(slug);
  const { relatedProducts } = useCategory(product?.category?.slug);

  return product && relatedProducts ? (
    <>
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
            ?.map((product) => (
              <ProductGridItem key={product?.id} product={product} />
            ))}
        </ProductGrid>
      </Page>
    </>
  ) : (
    <PageLoader />
  );
};

export default ProductPage;
