import { cn } from '@/lib/utils';
import { ExtendedProduct } from '../types/extensions';

interface ProductProps {
  product: ExtendedProduct | undefined;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <section id='product' className={cn('border-b border-black')}>
      <p>{product?.name}</p>
    </section>
  );
};
