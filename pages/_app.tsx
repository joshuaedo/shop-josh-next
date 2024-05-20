import '@/styles/globals.css';
import Providers from '@/providers';
import type { AppProps } from 'next/app';

export default function App({ Component: Page, pageProps, router }: AppProps) {
  return (
    <Providers>
      <Page key={router.route} {...pageProps} />
    </Providers>
  );
}
