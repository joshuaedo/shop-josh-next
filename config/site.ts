export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: 'Shop Josh',
  description: "Live like Josh's alter ego, j@28. Inspired by Aubrey Graham.",
  headline: '.',
  disclaimer:
    'Disclaimer: Shop Josh is a portfolio project and does not offer real products for sale. At checkout, please use the card number 4242 4242 4242 4242, expiration date 04/42, and CVC 424.',
  url: 'https://shop.joshuaedo.com',
  github: 'https://github.com/joshuaedo/shop',
  creator: {
    name: 'Joshua Edo',
    website: 'https://joshuaedo.com',
    github: 'https://github.com/joshuaedo',
    email: 'joshua.edo01@gmail.com',
  },
  siteName: 'Shop Josh',
  images: [
    // cloudinary
    'https://res.cloudinary.com/drn19gwpk/image/upload/v1714703335/shop-josh/1.jpg', // [0] 4.09mb (4000 * 2500)
    'https://res.cloudinary.com/drn19gwpk/image/upload/v1716222559/shop-josh/2.jpg', // [1] 493.1kb (2939 * 1836)

    // sirv
    'https://joshuaedo.sirv.com/joshuaedo/public/images/original/projects/shop-josh.png', // [2] 7.02mb (4000 * 2500)
    'https://joshuaedo.sirv.com/joshuaedo/public/images/webp/projects/shop-josh.webp', // [3] 2.88mb (4000 * 2500)

    // local (vercel & github)
    '/double-legged-logo.png', // [4] 99.09kb (352 * 429)
    '/single-legged-logo.png', // [5] 113.56kb (346 * 466)
  ],
  poster: ['', '', ''],
  videos: ['', '', ''],
};
