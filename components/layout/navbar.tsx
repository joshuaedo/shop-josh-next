import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';

interface NavbarProps {}

const { title } = siteConfig;

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className=''>
      {title}
      {/* {pathname} */}
    </nav>
  );
};

export default Navbar;
