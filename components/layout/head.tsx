import { siteConfig } from '@/config/site';
import NextHead from 'next/head';
import { DefaultSeo, NextSeo } from 'next-seo';

interface HeadProps {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

const { siteName, creator, url } = siteConfig;

const AppHead = () => {
  return (
    <>
      <NextHead>
        <link rel='icon' href='/double-legged-logo.png' />
        <meta property='og:logo' content='/double-legged-logo.png' />
      </NextHead>
      <DefaultSeo
        canonical={url}
        robotsProps={{
          maxSnippet: 155,
          maxImagePreview: 'standard',
        }}
        openGraph={{
          url,
          siteName,
          type: 'website',
        }}
        twitter={{
          handle: creator.name,
          site: url,
          cardType: 'summary',
        }}
      />
    </>
  );
};

const PageHead = ({ title, description, image }: HeadProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      noindex={false}
      nofollow={false}
      openGraph={{
        title,
        description,
        images: [
          {
            url: image ?? '',
            width: 400,
            height: 250,
            alt: description,
          },
        ],
      }}
    />
  );
};

export { AppHead, PageHead };
