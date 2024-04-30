import Head from '@/components/common/head';
import useProduct from '@/features/products/hooks/use-product';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { products } = useProduct();
  return (
    <>
      <Head title='Shop All' />
      shop-all
    </>
  );
};

export default ShopAllPage;
