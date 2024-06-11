import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { siteConfig } from '@/config/site';

const SEOProvider = ({ children }: { children: React.ReactNode }) => {
  const { siteName, creator, url, title, description, images } = siteConfig;

  return (
    <>
      <DefaultSeo
        titleTemplate={`${title} • %s`}
        defaultTitle={title}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          images: [
            {
              url: images[1] ?? '',
              width: 400,
              height: 250,
              alt: `${title} image`,
            },
          ],
          siteName,
        }}
        twitter={{
          handle: creator.name,
          site: url,
          cardType: 'summary',
        }}
      />
      <link rel='icon' href='/double-legged-logo.png' />
      <meta property='og:logo' content='/double-legged-logo.png' />
      {children}
    </>
  );
};

export { SEOProvider };
