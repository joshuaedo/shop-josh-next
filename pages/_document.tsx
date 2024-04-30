import { GeistSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' suppressHydrationWarning>
      <Head />
      <body className={cn(GeistSans.className, 'relative bg-background')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
