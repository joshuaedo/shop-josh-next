import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { BedroomHotspotType } from '../lib/db';
import { BedroomHotspot } from './bedroom-hotspot';
import { useRef, useEffect } from 'react';

const { images, title } = siteConfig;
const src = images[3];

interface BedroomProps {
  blurDataURL: string;
  hotspots: BedroomHotspotType[];
}

export const Bedroom = ({ blurDataURL, hotspots }: BedroomProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Horizontal scrolling with the mouse wheel
      const handleWheelScroll = (e: WheelEvent) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY; // Apply horizontal scroll when using mouse wheel
      };

      container.addEventListener('wheel', handleWheelScroll);

      // Clean up the event listener on unmount
      return () => {
        container.removeEventListener('wheel', handleWheelScroll);
      };
    }
  }, []);

  return (
    <section id='bedroom'>
      <div
        ref={containerRef}
        className='relative overflow-x-auto overflow-y-hidden' // Ensure horizontal scrolling
        style={{ scrollBehavior: 'smooth' }} // Smooth scroll for better UX
      >
        <div className='relative h-[100svh] aspect-[16/10] lg:w-full'>
          <picture className='h-[100svh] aspect-[16/10] lg:object-cover object-center'>
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
                if (imageRef.current) {
                  const resizeObserver = new ResizeObserver(() => {
                    requestAnimationFrame(() => {
                      window.dispatchEvent(new Event('resize'));
                    });
                  });
                  resizeObserver.observe(imageRef.current);
                  return () => {
                    if (imageRef.current) {
                      resizeObserver.unobserve(imageRef.current);
                    }
                  };
                }
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
