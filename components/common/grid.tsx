import { cn, formatPrice } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Grid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-full h-full py-6 gap-x-6 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export const GridItem = ({
  className,
  title,
  id,
  price,
  imageUrl,
  href,
}: {
  className?: string;
  title?: string;
  id?: string;
  price?: number;
  imageUrl?: string;
  href?: string;
}) => {
  return (
    <Link href={href || '#'} className={cn('cursor-pointer', className)}>
      <div className='transition duration-200 space-y-4'>
        <div className='relative overflow-hidden flex'>
          <Image
            src={imageUrl || ''}
            alt={title || ''}
            width={1650}
            height={2200}
            className='object-cover h-[380px] w-[310px] hover:scale-105 transition ease-in-out'
          />
        </div>
        <div className='font-semibold text-sm tracking-tighter space-y-1'>
          <div className='flex items-start justify-between'>
            <span className='max-w-[250px]'>{title?.toLocaleUpperCase()}</span>
            <PlusCircle />
          </div>
          <div>{formatPrice(price)}</div>
        </div>
      </div>
    </Link>
  );
};
