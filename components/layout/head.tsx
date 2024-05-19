import { siteConfig } from '@/config/site';
import NextHead from 'next/head';
import { NextSeo } from 'next-seo';
import { DefaultSeo } from 'next-seo';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const {
  siteName: s,
  creator: c,
  title: t,
  description: d,
  url: u,
  images: i,
} = siteConfig;

const Head = ({ title = t, description = d, image = i[2] }: HeadProps) => {
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
            type: 'image/webp',
          },
        ],
      }}
    />
  );
};

const AppSeo = () => {
  return (
    <>
      <NextHead>
        <link rel='icon' href='/double-legged-logo.png' />
      </NextHead>
      <DefaultSeo
        title={t}
        description={d}
        canonical={u}
        robotsProps={{
          maxSnippet: 155,
          maxImagePreview: 'standard',
        }}
        openGraph={{
          url: u,
          title: t,
          description: d,
          images: [
            {
              url: i[2],
              width: 400,
              height: 250,
            },
          ],
          siteName: s,
          type: 'website',
        }}
        twitter={{
          handle: c.name,
          site: u,
          cardType: 'summary',
        }}
      />
    </>
  );
};

export { Head as default, AppSeo };
