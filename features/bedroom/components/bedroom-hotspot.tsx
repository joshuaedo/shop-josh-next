import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/common/popover';
import { GeistSans } from 'geist/font/sans';
import { BedroomHotspotType } from '../lib/db';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useMediaQuery from '@/hooks/use-media-query';

interface BedroomHotspotProps {
  hotspot: BedroomHotspotType;
  imageRef: React.RefObject<HTMLImageElement>;
}

export const BedroomHotspot = ({ hotspot, imageRef }: BedroomHotspotProps) => {
  const [position, setPosition] = useState<{
    top?: number | null;
    left?: number | null;
    bottom?: number | null;
    right?: number | null;
  }>({
    top: null,
    left: null,
    bottom: null,
    right: null,
  });
  const { lg } = useMediaQuery();

  useEffect(() => {
    const updatePosition = () => {
      if (imageRef.current) {
        const img = imageRef.current;
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const displayWidth = img.offsetWidth;
        const displayHeight = img.offsetHeight;

        if (naturalWidth && naturalHeight && displayWidth && displayHeight) {
          const scaleX = displayWidth / naturalWidth;
          const scaleY = displayHeight / naturalHeight;

          const topPosition = hotspot.position?.top
            ? (hotspot.position.top / 100) * naturalHeight * scaleY
            : null;
          const leftPosition = hotspot.position?.left
            ? (hotspot.position.left / 100) * naturalWidth * scaleX
            : null;
          const bottomPosition = hotspot.position?.bottom
            ? (hotspot.position.bottom / 100) * naturalHeight * scaleY
            : null;
          const rightPosition = hotspot.position?.right
            ? (hotspot.position.right / 100) * naturalWidth * scaleX
            : null;

          // Detect fullscreen mode
          const isFullscreen = document.fullscreenElement;

          // console.log(isFullscreen);

          let desktopOffset = displayHeight * 0.025; // 2.5% of display height offset
          if (isFullscreen) {
            desktopOffset = 0;
          }

          if (lg) {
            setPosition({
              top: topPosition && topPosition + desktopOffset,
              left: leftPosition,
              bottom: bottomPosition && bottomPosition - desktopOffset,
              right: rightPosition,
            });
          } else {
            setPosition({
              top: topPosition,
              left: leftPosition,
              bottom: bottomPosition,
              right: rightPosition,
            });
          }
        }
      }
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updatePosition);
    });

    if (imageRef.current) {
      resizeObserver.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        resizeObserver.unobserve(imageRef.current);
      }
    };
  }, [hotspot.position, imageRef, lg]);

  if (
    position.top === null &&
    position.bottom === null &&
    position.left === null &&
    position.right === null
  ) {
    return null;
  }

  return (
    <div
      className='absolute'
      style={{
        top: position.top ? `${position.top}px` : undefined,
        left: position.left ? `${position.left}px` : undefined,
        bottom: position.bottom ? `${position.bottom}px` : undefined,
        right: position.right ? `${position.right}px` : undefined,
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
