import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/common/popover';
import { GeistSans } from 'geist/font/sans';
import { BedroomHotspotType } from '../lib/db';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import useMediaQuery from '@/hooks/use-media-query';

interface BedroomHotspotProps {
  hotspot: BedroomHotspotType;
  imageRef: React.RefObject<HTMLImageElement>;
}

export const BedroomHotspot = ({ hotspot, imageRef }: BedroomHotspotProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { lg } = useMediaQuery();

  useEffect(() => {
    const updatePosition = () => {
      if (imageRef.current) {
        const img = imageRef.current;
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const displayWidth = img.offsetWidth;
        const displayHeight = img.offsetHeight;

        // Calculate scaling factors
        const scaleX = displayWidth / naturalWidth;
        const scaleY = displayHeight / naturalHeight;

        // Get the base position
        let topPosition =
          (hotspot.position?.top / 100) * naturalHeight * scaleY;
        const leftPosition =
          (hotspot.position?.left / 100) * naturalWidth * scaleX;

        // Apply offset for desktop screens
        if (lg) {
          // Adjust this value as needed
          const desktopOffset = displayHeight * 0.025; // 2.5% of display height
          topPosition += desktopOffset;
        }

        setPosition({
          top: topPosition,
          left: leftPosition,
        });
      }
    };

    // Initial position
    updatePosition();

    // Update on resize
    const resizeObserver = new ResizeObserver(updatePosition);
    if (imageRef.current) {
      resizeObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        resizeObserver.unobserve(imageRef.current);
      }
    };
  }, [hotspot.position, imageRef, lg]);

  return (
    <div
      className='absolute'
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <div className='relative size-10 flex items-center justify-center cursor-pointer'>
            <div className='bg-white rounded-full p-3 animate-slow-ping opacity-65' />
            <div className='bg-white rounded-full p-1 animate-none shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2' />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            GeistSans.className,
            'rounded-full capitalize text-sm lg:text-base font-medium tracking-tight px-4 py-1.5'
          )}
        >
          <Link href={hotspot?.href}>
            <div>{hotspot?.name}</div>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};
