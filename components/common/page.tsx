import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide, opacity, perspective, AnimationVariants } from '@/lib/anim';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/layout/toaster';
import Lenis from '@studio-freight/lenis';

const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

export const Page = ({ children }: { children: React.ReactNode }) => {
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
        className='h-[100vh] w-full fixed left-0 top-0 bg-white z-10'
        {...anim(slide)}
      />
      <motion.div className='bg-white' {...anim(perspective)}>
        <motion.div className='min-h-[100vh]' {...anim(opacity)}>
          <Navbar />
          <main className='container min-h-[100svh] py-12'>{children}</main>
          <Footer />
          <Toaster />
        </motion.div>
      </motion.div>
    </div>
  );
};
