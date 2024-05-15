import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ExtendedProduct } from '../types/extensions';
import { toast } from '@/hooks/use-toast';

interface ProductCartShop {
  items: ExtendedProduct[];
  addItem: (data: ExtendedProduct) => void;
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

        set({
          items: [...get().items, data],
        });
        toast({
          title: 'Product added to cart',
        });
      },
      removeItem(id: string) {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
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
