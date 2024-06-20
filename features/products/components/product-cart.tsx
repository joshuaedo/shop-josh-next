import useProductCart from '../hooks/use-product-cart';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cartSlide, anim, cartContentSlide } from '@/lib/anim';
import { cn, formatPrice } from '@/lib/utils';
import useMenu from '@/hooks/use-menu';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/common/button';
import { ProductImage } from './product-image';
import { checkout } from '../lib/mutations';
import { toast } from '@/hooks/use-toast';
import useLocation from '@/hooks/use-location';

interface ProductCartProps {}

export const ProductCart = ({}: ProductCartProps) => {
  const { items, removeAll, removeItem, incrementItem, decrementItem } =
    useProductCart();
  const { href: shopUrl } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const { isOpen } = useMenu();
  const searchParams = useSearchParams();
  const itemCount = items?.length;
  const subtotal = items?.reduce((total, item) => {
    return total + Number(item?.price) * item.quantity;
  }, 0);

  const cscn = 'w-full flex justify-between items-center border-b border-black'; // cscn: Cart Section Class Names

  useEffect(() => {
    if (isOpen) {
      setIsActive(false);
    }
  }, [isOpen, shopUrl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchParams.get('checkout-success')) {
        toast({
          title: 'Order completed',
        });

        removeAll();
      }
      if (searchParams.get('checkout-canceled')) {
        toast({
          title: 'Something went wrong',
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              'h-screen bg-white right-0 text-black z-5 fixed top-[0px] overflow-hidden w-full max-w-[500px] border-x border-black shadow-[0_15px_15px_15px_rgba(0,0,0,0.25)]'
            )}
          >
            <div className={cn('h-full px-6 md:px-8 lg:px-12 flex flex-col')}>
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

              <motion.section
                {...anim(cartContentSlide)}
                className={cn(
                  'w-full max-h-[425px] overflow-y-scroll hide-scrollbar'
                )}
              >
                {items?.map((item) => {
                  const { id, name, price, images, category, quantity } = item;
                  return (
                    <div
                      className={cn(
                        'border-b border-black py-6 md:flex gap-4 space-y-4 md:space-y-0'
                      )}
                      key={id}
                    >
                      <ProductImage
                        type='cart-item'
                        alt={name}
                        image={images[0]}
                      />
                      <div className={cn('space-y-1')}>
                        <p className={cn('uppercase')}>{name}</p>
                        <p className={cn('text-sm')}>{category?.name}</p>
                        <p className={cn('')}>{formatPrice(price)}</p>
                        <div className={cn('flex items-center')}>
                          <div
                            className={cn(
                              'border border-black text-black flex justify-between px-4 w-[200px]'
                            )}
                          >
                            <div
                              role='button'
                              onClick={() => decrementItem(id)}
                            >
                              -
                            </div>
                            <div>{quantity}</div>
                            <div
                              role='button'
                              onClick={() => incrementItem(id)}
                            >
                              +
                            </div>
                          </div>
                          <Button
                            size='thin'
                            variant='ghost'
                            className='px-4'
                            onClick={() => removeItem(id)}
                          >
                            Remove Product
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.section>

              <section className={cn(cscn, 'p-6')}>
                <div>Subtotal</div>
                <div>{formatPrice(subtotal)}</div>
              </section>

              <section className={cn(cscn)}>
                <Button
                  className='group justify-between'
                  onClick={() =>
                    shopUrl ? checkout(items, subtotal, shopUrl) : {}
                  }
                >
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
