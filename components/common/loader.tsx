import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { anim, pageSlide } from '@/lib/anim';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle?: string | null | undefined;
}

const { title } = siteConfig;

const Loader = () => {
  return (
    <div className='flex min-h-[25svh] h-full w-full items-center justify-center'>
      <Loader2 className='animate-spin' />
    </div>
  );
};

const PageLoader = ({ pageTitle }: LoaderProps) => {
  return (
    <div
      className={cn(
        GeistSans.className,
        'bg-white flex items-center justify-center text-xl h-screen animate-pulse font-medium tracking-tight'
      )}
    >
      {pageTitle ? pageTitle : title}
    </div>
  );
};

const AnimatedPageLoader = ({ pageTitle }: LoaderProps) => {
  const aplcn = 'h-screen w-full fixed left-0 top-0 bg-white z-[100]'; // aplcn: Animated Page Loader Class Names
  return (
    <>
      <motion.div className={aplcn} {...anim(pageSlide)} />
      <motion.div
        {...anim(pageSlide)}
        className={cn(
          GeistSans.className,
          aplcn,
          'flex items-center justify-center text-xl animate-pulse font-medium tracking-tight'
        )}
      >
        {pageTitle ? pageTitle : title}
      </motion.div>
    </>
  );
};

export { Loader, PageLoader, AnimatedPageLoader };
