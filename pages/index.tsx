import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { PageHead } from '@/components/layout/head';
import { siteConfig } from '@/config/site';
import { Bedroom } from '@/features/bedroom/components/bedroom';
import { bedroomHotspots, blurDataUrl } from '@/features/bedroom/lib/db';
import { Suspense } from 'react';

const HomePage = () => {
  const { description, images } = siteConfig;

  return (
    <Suspense fallback={<PageLoader />}>
      <PageHead title='Bedroom' description={description} image={images[1]} />
      <Page>
        <Bedroom blurDataURL={blurDataUrl} hotspots={bedroomHotspots} />
      </Page>
    </Suspense>
  );
};

export default HomePage;
