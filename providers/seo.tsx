import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { siteConfig } from '@/config/site';
import NextHead from 'next/head';

const { siteName, creator, url, title, description, images } = siteConfig;

const SEOProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultSeo
        titleTemplate={`${title} • %s`}
        defaultTitle={title}
        description={description}
        robotsProps={{
          maxSnippet: 155,
        }}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          images: [
            {
              url: images[1],
              width: 400,
              height: 250,
              alt: `${title}`,
            },
          ],
          siteName: `${siteName} • ${title}`,
        }}
        twitter={{
          handle: creator.name,
          site: url,
          cardType: 'summary',
        }}
      />
      <NextHead>
        <link rel='icon' href='/double-legged-logo.png' />
        <meta property='og:logo' content='/double-legged-logo.png' />
      </NextHead>
      {children}
    </>
  );
};

export { SEOProvider };
