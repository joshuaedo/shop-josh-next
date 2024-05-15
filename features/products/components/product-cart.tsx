import useProductCart from '../hooks/use-product-cart';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cartSlide, anim, cartContentSlide } from '@/lib/anim';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';

interface ProductCartProps {}

export const ProductCart = ({}: ProductCartProps) => {
  const cart = useProductCart();
  const [isActive, setIsActive] = useState(false);
  const { isOpen } = useMenu();

  useEffect(() => {
    if (isOpen) {
      setIsActive(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger */}
      <div
        role='button'
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        Cart ( {cart.items.length} )
      </div>

      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            {...anim(cartSlide)}
            className={cn(
              'h-[calc(100svh-72px)] bg-white right-0 text-black z-5 fixed top-[72px] overflow-hidden w-full max-w-[500px] border border-black shadow-[0_15px_15px_15px_rgba(0,0,0,0.25)]'
            )}
          >
            <div className={cn('box-border h-full p-5 flex flex-col')}>
              <motion.span {...anim(cartContentSlide)} className={cn('')}>
                Cart Content
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
