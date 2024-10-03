const blurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGOobGn48/dTRloMCysDQ/+EFlNT/cy87NRYbwCV/QonfvGUXgAAAABJRU5ErkJggg==';

export type HotspotPositionType = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type BedroomHotspotType = {
  name: string;
  href: string;
  position: {
    default: HotspotPositionType;
    lg?: HotspotPositionType;
  };
};

const bedroomHotspots: BedroomHotspotType[] = [
  {
    name: 'nike clb hat',
    href: '/products/nike-clb-hat',
    position: {
      default: { left: 11.2, top: 64.0 },
      lg: { left: 11.2, top: 66.5 },
    },
  },
  {
    name: 'topwear',
    href: '/categories/topwear',
    position: {
      default: { left: 22.2, top: 61.5 },
      lg: { left: 22.2, top: 63.0 },
    },
  },
  {
    name: 'home decor',
    href: '/categories/books-and-home-decor',
    position: {
      default: { left: 55.2, bottom: 15.5 },
      lg: { left: 55.2, bottom: 15.5 },
    },
  },
  {
    name: 'personal care essentials',
    href: '/categories/personal-care-essentials',
    position: {
      default: { right: 5.8, top: 47.5 },
      lg: { right: 5.8, top: 47.5 },
    },
  },
  {
    name: 'williamsburg sleepover',
    href: '/products/williamsburg-sleepover',
    position: {
      default: { right: 67.8, bottom: 10.5 },
      lg: { right: 67.8, bottom: 1.5 },
    },
  },
  {
    name: 'titles ruin everything',
    href: '/products/titles-ruin-everything',
    position: {
      default: { right: 26.8, top: 20.5 },
      lg: { right: 26.8, top: 15.5 },
    },
  },
];

export { bedroomHotspots, blurDataUrl };
