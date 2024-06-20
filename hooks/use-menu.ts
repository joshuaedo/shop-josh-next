import MenuContext from '@/providers/menu';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const useMenu = () => {
  const context = useContext(MenuContext);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }

  const { isOpen, setIsOpen } = context;

  const blurOnOpen: React.CSSProperties = {
    filter: isOpen ? 'blur(5px)' : 'none',
    pointerEvents: isOpen ? 'none' : 'auto',
    opacity: isOpen && !isHomePage ? 0.5 : 1,
    transition: 'opacity 1.5s ease-in-out, filter 1.5s ease-in-out',
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    setIsOpen,
    blurOnOpen,
    toggleMenu,
  };
};

export default useMenu;
