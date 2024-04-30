import Head from '@/components/common/head';
import useProduct from '@/features/products/hooks/use-product';
import { useRouter } from 'next/router';

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const router = useRouter();
  const slug = router?.query?.productSlug;
  const { product } = useProduct(slug);
  return (
    <>
      <Head />
      ProductPage
    </>
  );
};

export default ProductPage;
