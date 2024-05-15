const transition = { duration: 1.76, ease: [0.76, 0, 0.24, 1] };

export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition,
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    filter: 'blur(1px)',
    opacity: 0.8,
    transition,
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition,
  },
};

export const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: () => ({
    y: 0,
    opacity: 1,
    transition,
  }),
  exit: () => ({
    y: '100%',
    opacity: 0,
    transition,
  }),
};

export const cartSlide = {
  initial: { x: '500px' },
  enter: { x: '0', transition },
  exit: {
    x: '500px',
    transition,
  },
};

export const cartContentSlide = {
  initial: { x: 80 },
  enter: () => ({
    x: 0,
    transition,
  }),
  exit: () => ({
    x: 80,
    transition,
  }),
};

export const pageSlide = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '100vh',
  },
  exit: {
    y: 0,
    transition,
  },
};

type Perspective = typeof perspective;
type Opacity = typeof opacity;
type Blur = typeof blur;
type Translate = typeof translate;
type Height = typeof height;
type CartSlide = typeof cartSlide;
type CartContentSlide = typeof cartContentSlide;
type PageSlide = typeof pageSlide;

export type AnimationVariants =
  | Perspective
  | PageSlide
  | Opacity
  | Blur
  | Height
  | Translate
  | CartSlide
  | CartContentSlide;

export const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
