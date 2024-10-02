import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { BedroomHotspotType } from '../lib/db';
import { BedroomHotspot } from './bedroom-hotspot';
import { useRef } from 'react';

const { images, title } = siteConfig;
const src = images[3];

interface BedroomProps {
  blurDataURL: string;
  hotspots: BedroomHotspotType[];
}

export const Bedroom = ({ blurDataURL, hotspots }: BedroomProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <section id='bedroom'>
      <div className='relative overflow-x-auto'>
        <div className='relative h-[100svh] aspect-[16/10] lg:w-full'>
          <picture className='h-[100svh] aspect-[16/10] lg:object-cover'>
            <source media='(min-width: 1024px)' srcSet={`${src}?w=4000`} />
            <source media='(min-height: 600px)' srcSet={`${src}?w=2560`} />
            <source media='(min-height: 500px)' srcSet={`${src}?w=1920`} />
            <Image
              ref={imageRef}
              src={`${src}?w=1024`}
              alt={title}
              placeholder='blur'
              blurDataURL={blurDataURL}
              width={4000}
              height={2500}
              className='h-[100svh] aspect-[16/10] lg:object-cover'
              priority
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          </picture>
          <div className='absolute inset-0'>
            {hotspots.map((hotspot, index) => (
              <BedroomHotspot
                hotspot={hotspot}
                key={index}
                imageRef={imageRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
