// import Head from '@/components/layout/head';
import Providers from '@/providers';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function Layout({
  Component: Page,
  pageProps,
  router,
}: AppProps) {
  return (
    <Providers>
      {/* <Head /> */}
      <AnimatePresence mode='wait'>
        <Page key={router.route} {...pageProps} />
      </AnimatePresence>
    </Providers>
  );
}
