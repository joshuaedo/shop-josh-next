import { ExtendedProduct } from '../types/extensions';

interface ProductProps {
  product: ExtendedProduct | undefined;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <section id='product'>
      <p>{product?.name}</p>
    </section>
  );
};
