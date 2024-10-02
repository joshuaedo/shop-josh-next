import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Prevent navigating to the same path
    if (router.pathname === href) {
      e.preventDefault(); // Prevent hard refresh
    }
  };

  return (
    <NextLink href={href} className={className} passHref>
      <span onClick={handleClick}>{children}</span>
    </NextLink>
  );
};

export default Link;
