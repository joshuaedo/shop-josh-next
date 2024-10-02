const blurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGOobGn48/dTRloMCysDQ/+EFlNT/cy87NRYbwCV/QonfvGUXgAAAABJRU5ErkJggg==';

const bedroomHotspots = [
  {
    name: 'headwear',
    href: '/categories/headwear',
    position: { left: 11.2, top: 64.0 },
  },
  {
    name: 'topwear',
    href: '/categories/topwear',
    position: { left: 22.2, top: 61.5 },
  },
  {
    name: 'home decor',
    href: '/categories/books-and-home-decor',
    position: { left: 55.2, bottom: 15.5 },
  },
  {
    name: 'personal care essentials',
    href: '/categories/personal-care-essentials',
    position: { right: 5.8, top: 47.5 },
  },
  // {
  //   name: 'gadgets',
  //   href: '/categories/gadgets',
  //   position: { right: 30.8, top: 23.5 },
  // },
  // {
  //   name: 'footwear',
  //   href: '/categories/gadgets',
  //   position: { right: 21.8, bottom: 15.4 },
  // },
];

// export type BedroomHotspotType = (typeof bedroomHotspots)[number];

// Explicitly define the position object to allow top, bottom, left, and right
export type BedroomHotspotType = {
  name: string;
  href: string;
  position: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

export { bedroomHotspots, blurDataUrl };
