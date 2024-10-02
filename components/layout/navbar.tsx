import { siteConfig } from '@/config/site';
import { ProductCart } from '@/features/products/components/product-cart';
import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import Link from '@/components/common/link';
import { usePathname } from 'next/navigation';
import Menu from './menu';
import useMenu from '@/hooks/use-menu';
import { ProductSearch } from '@/features/products/components/product-search';
import { useEffect, useState } from 'react';
import usePageLoader from '@/hooks/use-page-loader';

interface NavbarProps {}

const { title } = siteConfig;

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const { blurOnOpen } = useMenu();
  const { lg } = useMediaQuery();
  const { isPageLoading } = usePageLoader();
  const isHomePage = pathname === '/';
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [currentStyle, setCurrentStyle] = useState({
    textColor: isHomePage ? 'text-white' : 'text-black',
    bgColor: isHomePage ? '' : 'bg-white',
    borderStyle: isHomePage ? '' : 'border-b border-black',
  });

  useEffect(() => {
    // Only update styles when page is not loading
    if (!isPageLoading) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
        setCurrentStyle({
          textColor: isHomePage ? 'text-white' : 'text-black',
          bgColor: isHomePage ? '' : 'bg-white',
          borderStyle: isHomePage ? '' : 'border-b border-black',
        });
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [isPageLoading, isHomePage]);

  const routes = [
    {
      href: `/categories/topwear`,
      label: 'topwear',
    },
    {
      href: `/products/maison-margiela-tabi-ankle-boots`,
      label: 'tabi ankle boots',
    },
    {
      href: `/categories/shop-all`,
      label: 'shop all',
    },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 z-[100] capitalize text-sm lg:text-base flex items-center w-full px-6 md:px-8 lg:px-12',
        shouldAnimate && !isPageLoading && 'transition-all duration-[2500ms]',
        currentStyle.textColor,
        currentStyle.bgColor
      )}
    >
      <div
        className={cn(
          'relative w-full h-full flex justify-between py-6',
          shouldAnimate && !isPageLoading && 'transition-all duration-[2500ms]',
          currentStyle.borderStyle
        )}
      >
        <div className={cn('flex items-center gap-8')}>
          <Menu />
          {lg ? (
            <div style={blurOnOpen} className={cn('flex items-center gap-8')}>
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={cn('transition-colors')}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <Link
          href='/'
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          )}
        >
          {title}
        </Link>
        <ProductSearch />
        <div style={blurOnOpen} className={cn('flex items-center')}>
          <ProductCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
