import { siteConfig } from '@/config/site';
import NextHead from 'next/head';

interface HeadProps {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

const { siteName, creator, url } = siteConfig;

const PageHead = ({ title, description, image }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name={description} />
      <meta name='title' content={title} />
      <meta name='pagename' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image:url' content={image} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <link rel='icon' href='/double-legged-logo.png' />
      <meta property='og:logo' content='/double-legged-logo.png' />
      <meta name='url' content={url} />
      <meta name='identifier-URL' content={url} />
      <meta name='robots' content='index,follow' />
      <meta
        name='robots'
        content='max-snippet:155, max-image-preview:standard'
      />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:image:width' content='294' />
      <meta property='og:image:height' content='184' />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={creator.name} />
    </NextHead>
  );
};

export { PageHead };
