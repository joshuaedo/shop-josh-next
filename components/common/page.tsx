import React from 'react';
import { motion } from 'framer-motion';
import { opacity, perspective, anim, pageSlide } from '@/lib/anim';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Toaster from '@/components/layout/toaster';
import { usePathname } from 'next/navigation';
import useMenu from '@/hooks/use-menu';
import useLenisSmoothScroll from '@/hooks/use-lenis-smooth-scroll';
import { AnimatedPageLoader } from './loader';

export const Page = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { blurOnOpen } = useMenu();
  // useLenisSmoothScroll();

  return (
    <div
      className={cn(GeistSans.className, 'bg-black font-medium tracking-tight')}
    >
      <AnimatedPageLoader />
      <motion.div className='bg-white' {...anim(perspective)}>
        <motion.div className={cn('min-h-[100svh]')} {...anim(opacity)}>
          <Navbar />
          <main
            style={blurOnOpen}
            className={cn(
              isHomePage
                ? ''
                : 'min-h-[100svh] px-6 md:px-8 lg:px-12 pt-20 pb-12'
            )}
          >
            {children}
          </main>
          <Footer />
          <Toaster />
        </motion.div>
      </motion.div>
    </div>
  );
};
