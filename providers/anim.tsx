import { AnimatePresence } from 'framer-motion';

import * as React from 'react';

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
};

export { AnimationProvider };
