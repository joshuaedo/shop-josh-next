import * as React from 'react';
import { QueryProvider } from './query';
import { MenuProvider } from './menu';
import { AnimationProvider } from './anim';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <QueryProvider>
        <AnimationProvider>{children}</AnimationProvider>
      </QueryProvider>
    </MenuProvider>
  );
};

export default Providers;
