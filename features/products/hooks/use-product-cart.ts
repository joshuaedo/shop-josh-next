import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ExtendedProduct, OrderedProduct } from '../types/extensions';
import { toast } from '@/hooks/use-toast';

interface ProductCartShop {
  items: OrderedProduct[];
  addItem: (data: ExtendedProduct) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useProductCart = create(
  persist<ProductCartShop>(
    (set, get) => ({
      items: [],
      addItem: (data: ExtendedProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: 'Product already in cart',
          });
        }

        const newItem: OrderedProduct = { ...data, quantity: 1 };

        set({
          items: [...get().items, newItem],
        });
        toast({
          title: 'Product added to cart',
        });
      },
      incrementItem: (id: string) => {
        const currentItems = get().items;

        set({
          items: currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },
      decrementItem: (id: string) => {
        const currentItems = get().items;

        set({
          items: currentItems.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          ),
        });
      },
      removeItem(id: string) {
        const currentItems = get().items;

        set({
          items: [...currentItems.filter((item) => item.id !== id)],
        });
        toast({
          title: 'Product removed from cart',
        });
      },
      removeAll() {
        set({
          items: [],
        });
      },
    }),
    {
      name: 'product-cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductCart;
