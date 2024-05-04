import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {}

const { title } = siteConfig;

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const routes = [
    {
      href: `/categories`,
      label: 'categories',
      active: pathname === `/categories`,
    },
    {
      href: `/categories/topwear`,
      label: 'topwear',
      active: pathname.includes(`/topwear`),
    },
    {
      href: `/products/maison-margiela-tabi-ankle-boots`,
      label: 'tabi ankle boots',
      active: pathname.includes(`/maison-margiela-tabi-ankle-boots`),
    },
    {
      href: `/categories/shop-all`,
      label: 'shop all',
      active: pathname.includes(`/shop-all`),
    },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 text-base font-semibold tracking-tighter space-x-4 capitalize flex items-center w-full p-4'>
      <Link href='/' className='flex items-center'>
        {title}
      </Link>
      <div className={cn('flex items-center gap-4')}>
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              route?.active ? '' : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
