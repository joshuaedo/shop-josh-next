import useProductCart from '../hooks/use-product-cart';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cartSlide, anim, cartContentSlide } from '@/lib/anim';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/common/button';
import { toast } from '@/hooks/use-toast';

interface ProductCartProps {}

export const ProductCart = ({}: ProductCartProps) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const { isOpen } = useMenu();
  const { items } = useProductCart();
  const itemCount = items?.length;
  const subtotal = '$525';
  const cscn = 'w-full flex justify-between items-center border-b border-black'; // cscn: Cart Section Class Names

  const checkout = () => {
    toast({
      title: 'Checking out...',
    });
  };

  useEffect(() => {
    if (isOpen) {
      setIsActive(false);
    }
  }, [isOpen, pathname]);

  return (
    <>
      {/* Trigger */}
      <div
        role='button'
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        Cart ( {itemCount} )
      </div>

      {/* Navbar height is 72px */}
      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            {...anim(cartSlide)}
            className={cn(
              'h-[calc(100svh-0px)] bg-white right-0 text-black z-5 fixed top-[0px] overflow-hidden w-full max-w-[500px] border-x border-black shadow-[0_15px_15px_15px_rgba(0,0,0,0.25)]'
            )}
          >
            <div className={cn('box-border h-full px-5 flex flex-col')}>
              <section className={cn(cscn, 'py-6')}>
                <div
                  role='button'
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Close
                </div>
                <div
                  role='button'
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  Cart ( {itemCount} )
                </div>
              </section>

              <motion.div
                {...anim(cartContentSlide)}
                className={cn('w-full p-6')}
              >
                Cart Items
              </motion.div>

              <section className={cn(cscn, 'p-6')}>
                <div>Subtotal</div>
                <div>{subtotal}</div>
              </section>

              <section className={cn(cscn)}>
                <Button className='group justify-between' onClick={checkout}>
                  Checkout
                  <span className='bg-black size-4 rounded-[999px] group-hover:bg-white' />
                </Button>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
