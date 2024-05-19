import { AppHead } from '@/components/layout/head';
import Providers from '@/providers';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component: Page, pageProps, router }: AppProps) {
  return (
    <Providers>
      <AppHead />
      <AnimatePresence mode='wait'>
        <Page key={router.route} {...pageProps} />
      </AnimatePresence>
    </Providers>
  );
}
