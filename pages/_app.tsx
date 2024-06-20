import '@/styles/globals.css';
import Providers from '@/providers';
import type { AppProps } from 'next/app';
import { PageLoader } from '@/components/common/loader';
import usePageLoader from '@/hooks/use-page-loader';

export default function App({ Component: Page, pageProps, router }: AppProps) {
  const { isPageLoading } = usePageLoader();

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
