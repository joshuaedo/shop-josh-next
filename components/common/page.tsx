import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide, opacity, perspective, AnimationVariants } from '@/lib/anim';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/layout/toaster';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

export const Page = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={cn(GeistSans.className, 'bg-black')}>
      <motion.div
        className='h-[100svh] w-full fixed left-0 top-0 bg-white z-10'
        {...anim(slide)}
      />
      <motion.div className='bg-white' {...anim(perspective)}>
        <motion.div
          className={cn(isHomePage ? 'h-[100svh]' : 'min-h-[100svh]')}
          {...anim(opacity)}
        >
          <Navbar />
          <main
            className={cn(
              isHomePage ? '' : 'container min-h-[100svh] pt-20 pb-12'
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
