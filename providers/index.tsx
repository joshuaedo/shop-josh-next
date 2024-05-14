import * as React from 'react';
import { QueryProvider } from './query';
import { MenuProvider } from './menu';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <QueryProvider>{children}</QueryProvider>
    </MenuProvider>
  );
};

export default Providers;
