import React from 'react';
import useMounted from '@/hooks/use-mounted';
import { Toaster } from './toaster';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMounted = useMounted();
  return (
    isMounted && (
      <>
        <Navbar />
        <main className='container min-h-[81svh] flex flex-col'>
          <div className='flex-1 space-y-4 py-4'>{children}</div>
        </main>
        <Footer />
        <Toaster />
      </>
    )
  );
}
