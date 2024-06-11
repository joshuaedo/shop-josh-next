import * as React from 'react';
import { QueryProvider } from './query';
import { MenuProvider } from './menu';
import { AnimationProvider } from './anim';
import { SEOProvider } from './seo';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SEOProvider>
      <MenuProvider>
        <QueryProvider>
          <AnimationProvider>{children}</AnimationProvider>
        </QueryProvider>
      </MenuProvider>
    </SEOProvider>
  );
};

export default Providers;
