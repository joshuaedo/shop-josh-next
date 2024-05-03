import { siteConfig } from '@/config/site';
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  images?: string[];
  creator?: {
    name: string;
  };
  siteName?: string;
}

const {
  siteName: s,
  creator: c,
  title: t,
  description: d,
  url: u,
  images: i,
} = siteConfig;

const Head = ({
  title = t,
  description = d,
  url = u,
  images = i,
  creator = c,
  siteName = s,
}: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name={description} />
      <meta name='title' content={title} />
      <meta name='url' content={url} />
      <link rel='icon' href='/double-legged-logo.png' />
      <meta name='identifier-URL' content={url} />
      <meta name='pagename' content={title} />
      <meta
        name='robots'
        content='max-snippet:155, max-image-preview:standard'
      />
      <meta name='robots' content='index,follow' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='250' />
      <meta property='og:type' content='website' />
      <meta property='og:image:url' content={images[2]} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={creator?.name} />
      <meta name='twitter:image' content={images[2]} />
    </NextHead>
  );
};

export default Head;
