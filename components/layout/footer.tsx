import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface FooterProps {}

const { title } = siteConfig;

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  if (isHomePage) return <></>;

  return (
    <footer ref={container}>
      <div className='h-[6rem] md:h-[10rem] lg:h-[13rem] xl:h-[18rem] bg-[#242424] overflow-hidden relative'>
        <motion.div
          style={{ y }}
          className='h-full bg-[#242424] flex justify-center items-center'
        >
          <p className='absolute bottom-[-40px] md:bottom-[-80px] lg:bottom-[-110px] xl:bottom-[-140px] text-white text-[5rem] md:text-[9rem] lg:text-[12rem] xl:text-[17rem] font-medium tracking-tighter whitespace-nowrap'>
            {title}
          </p>
          {/* TODO: Design footer image */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
