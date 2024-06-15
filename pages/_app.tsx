import '@/styles/globals.css';
import Providers from '@/providers';
import type { AppProps } from 'next/app';
import React from 'react';
import { PageLoader } from '@/components/common/loader';
import { usePageLoading } from '@/hooks/use-page-loading';

export default function App({ Component: Page, pageProps, router }: AppProps) {
  const { isPageLoading } = usePageLoading();

  return (
    <Providers>
      {isPageLoading ? (
        <PageLoader />
      ) : (
        <Page key={router.route} {...pageProps} />
      )}
    </Providers>
  );
}
