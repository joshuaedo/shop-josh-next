import React, { useState, useEffect } from 'react';
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
import usePageLoader from '@/hooks/use-page-loader';

export const Page = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isPageLoading } = usePageLoader();
  const isHomePage = pathname === '/';
  const { blurOnOpen } = useMenu();
  const [currentStyle, setCurrentStyle] = useState({
    bgColor: isHomePage ? 'bg-black' : 'bg-white',
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useLenisSmoothScroll();

  useEffect(() => {
    if (!isPageLoading) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
        setCurrentStyle({
          bgColor: isHomePage ? 'bg-black' : 'bg-white',
        });
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [isPageLoading, isHomePage]);

  return (
    <div
      className={cn(
        GeistSans.className,
        'font-medium tracking-tight',
        currentStyle.bgColor,
        shouldAnimate && !isPageLoading && 'transition-all duration-[2500ms]'
      )}
    >
      <AnimatedPageLoader />
      <motion.div
        className={cn(
          'bg-white',
          shouldAnimate && !isPageLoading && 'transition-all duration-[2500ms]'
        )}
        {...anim(perspective)}
      >
        <motion.div className={cn('min-h-[100svh]')} {...anim(opacity)}>
          <Navbar />
          <main
            style={blurOnOpen}
            className={cn(
              'min-h-[100svh]',
              shouldAnimate &&
                !isPageLoading &&
                'transition-all duration-[2500ms]',
              isHomePage ? '' : 'px-6 md:px-8 lg:px-12 pt-20 pb-12'
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
