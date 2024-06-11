import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { PageHead } from '@/components/layout/head';
import { siteConfig } from '@/config/site';
import { Bedroom } from '@/features/bedroom/components/bedroom';
import useBedroom from '@/features/bedroom/hooks/use-bedroom';
import { bedroomHotspots } from '@/features/bedroom/lib/db';

const HomePage = () => {
  const { description, images } = siteConfig;
  const { isCheckedImgPlaiceHolder, blurDataURL } = useBedroom();

  return isCheckedImgPlaiceHolder ? (
    <>
      <PageHead title='Bedroom' description={description} image={images[1]} />
      <Page>
        <Bedroom blurDataURL={blurDataURL} hotspots={bedroomHotspots} />
      </Page>
    </>
  ) : (
    <PageLoader />
  );
};

export default HomePage;
