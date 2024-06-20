import  useMenu  from '@/hooks/use-menu';
import { AnimatePresence, motion } from 'framer-motion';
import useCategory from '@/features/categories/hooks/use-category';
import Link from 'next/link';
import { anim, blur, height } from '@/lib/anim';
import { useState } from 'react';
import { cn, getChars } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  const { isOpen, toggleMenu } = useMenu();
  const { lg } = useMediaQuery();
  const { allCategories: categories } = useCategory();
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <>
      {/* Trigger */}
      <div role='button' onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </div>

      <AnimatePresence mode='wait'>
        {isOpen && categories && (
          <motion.div
            {...anim(height)}
            className={cn('fixed top-24 overflow-hidden')}
          >
            <div className={cn('flex flex-col space-y-3 lg:space-y-4')}>
              {!lg && (
                <Link
                  key={`aubrey_shop_all_graham`}
                  href={`/categories/shop-all`}
                  onClick={toggleMenu}
                >
                  <motion.p
                    className={cn('text-lg lg:text-2xl truncate')}
                    variants={blur}
                  >
                    {getChars('Shop All')}
                  </motion.p>
                </Link>
              )}
              <motion.p className={cn('text-xs lg:text-sm')} variants={blur}>
                {getChars('Categories')}
              </motion.p>
              {categories?.map((link, index) => {
                const { name, id, slug } = link;
                return (
                  <Link
                    key={`aubrey_${id}_graham`}
                    href={`/categories/${slug}`}
                    onClick={toggleMenu}
                  >
                    <motion.p
                      className={cn('text-lg lg:text-2xl truncate')}
                      onMouseOver={() => {
                        setSelectedLink({ isActive: true, index });
                      }}
                      onMouseLeave={() => {
                        setSelectedLink({ isActive: false, index });
                      }}
                      variants={blur}
                      animate={
                        selectedLink.isActive && selectedLink.index !== index
                          ? 'open'
                          : 'closed'
                      }
                    >
                      {getChars(name)}
                    </motion.p>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
