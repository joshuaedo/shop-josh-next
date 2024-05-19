import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import Head from '@/components/layout/head';
import { Bedroom } from '@/features/bedroom/components/bedroom';
import useBedroom from '@/features/bedroom/hooks/use-bedroom';

const HomePage = () => {
  const { isCheckedImgPlaiceHolder, blurDataURL } = useBedroom();

  return isCheckedImgPlaiceHolder ? (
    <Page>
      <Head />
      <Bedroom blurDataURL={blurDataURL} />
    </Page>
  ) : (
    <PageLoader />
  );
};

export default HomePage;
