import { siteConfig } from '@/config/site';
import { NextSeo } from 'next-seo';

interface HeadProps {
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
}

const { siteName, creator, url, images } = siteConfig;

const PageHead = ({ title, description, image }: HeadProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image ?? images[1],
            alt: `${title} image`,
          },
        ],
        siteName,
      }}
      twitter={{
        cardType: 'summary',
        site: url,
        handle: creator.name,
      }}
    />
  );
};

export { PageHead };
