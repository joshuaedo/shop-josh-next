import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useLenisSmoothScroll = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) return; // Skip smooth scroll on the homepage

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, [isHomePage]); // Depend on isHomePage to avoid unnecessary execution
};

export default useLenisSmoothScroll;
