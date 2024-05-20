import Image from 'next/image';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const { images, title } = siteConfig;
const src = images[1];

interface BedroomProps {
  blurDataURL: string;
}

export const Bedroom = ({ blurDataURL }: BedroomProps) => {
  return (
    <section id='bedroom'>
      <div className='h-[100svh]'>
        <div
          className='relative min-w-full min-h-full overflow-hidden'
          // style={{
          //   width: '1067.2px',
          //   height: '667px',
          // }}
        >
          <Image
            src={src}
            alt={title}
            placeholder='blur'
            blurDataURL={blurDataURL}
            width={2939}
            height={1836}
            // width={4000}
            // height={2500}
            className={cn('w-full h-full absolute top-0 left-0 object-cover')}
          />
        </div>
      </div>
    </section>
  );
};
