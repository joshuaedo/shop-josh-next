const blurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGOobGn48/dTRloMCysDQ/+EFlNT/cy87NRYbwCV/QonfvGUXgAAAABJRU5ErkJggg==';

const bedroomHotspots = [
  {
    name: 'headwear',
    href: '/categories/headwear',
    position: { left: 11.2, top: 64.0 },
  },
];

export type BedroomHotspotType = (typeof bedroomHotspots)[number];

export { bedroomHotspots, blurDataUrl };
