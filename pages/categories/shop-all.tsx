import Head from '@/components/common/head';
import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';

interface ShopAllPageProps {}

const ShopAllPage = ({}: ShopAllPageProps) => {
  const { products } = useProduct();
  return (
    <Page>
      <Head title='Shop All' />
    </Page>
  );
};

export default ShopAllPage;
