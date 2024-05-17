import { axiosShopInstance, shopId } from '@/lib/axios';
import { OrderedProduct } from '../types/extensions';
import { toast } from '@/hooks/use-toast';

const checkout = async (
  products: OrderedProduct[],
  subtotal: number,
  shopUrl: string
) => {
  try {
    toast({
      title: 'Checking out...',
    });
    const res = await axiosShopInstance.post(
      `/checkout?shopId=${shopId}&shopUrl=${shopUrl}`,
      { orderedProducts: products, subtotal }
    );
    window.location = res.data.url;
    return res;
  } catch (error) {
    throw new Error('Failed to post products');
  }
};

export { checkout };
