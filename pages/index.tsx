import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { PageHead } from '@/components/layout/head';
import { siteConfig } from '@/config/site';
import { Bedroom } from '@/features/bedroom/components/bedroom';
import useBedroom from '@/features/bedroom/hooks/use-bedroom';

const HomePage = () => {
  const { title, description, images } = siteConfig;
  const { isCheckedImgPlaiceHolder, blurDataURL } = useBedroom();

  return isCheckedImgPlaiceHolder ? (
    <Page>
      <PageHead title={title} description={description} image={images[1]} />
      <Bedroom blurDataURL={blurDataURL} />
    </Page>
  ) : (
    <PageLoader />
  );
};

export default HomePage;
