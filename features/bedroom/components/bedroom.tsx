import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/popover";
import { GeistSans } from "geist/font/sans";
import { BedroomHotspots } from "../lib/db";

const { images, title } = siteConfig;
const src = images[3];

interface BedroomProps {
  blurDataURL: string;
  hotspots: BedroomHotspots;
}

export const Bedroom = ({ blurDataURL, hotspots }: BedroomProps) => {
  return (
    <section id="bedroom">
      <div className="h-screen w-auto relative ">
        {/* I aim to resize this image so that its height matches the screen height while preserving its aspect ratio. Additionally, I want the image to be horizontally scrollable when it's wider than the device screen. Ideally, I would also remove the object-cover property as it woulld affect the hotspots' positioning.  My tech stack includes Next.js, Tailwind CSS, and Typescript. */}
        <Image
          src={src}
          alt={title}
          placeholder="blur"
          blurDataURL={blurDataURL}
          width={4000}
          height={2500}
          className={cn("h-full w-full object-cover")}
        />
        {hotspots.map((hotspot, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: hotspot?.position?.left,
              top: hotspot?.position?.top,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Popover>
              <PopoverTrigger asChild>
                <div className="relative size-10 flex items-center justify-center cursor-pointer">
                  <div className="bg-white rounded-full p-3 animate-slow-ping opacity-65" />
                  <div className="bg-white rounded-full p-1 animate-none shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2" />
                </div>
              </PopoverTrigger>
              <PopoverContent
                className={cn(
                  GeistSans.className,
                  "rounded-full capitalize text-sm lg:text-base font-medium tracking-tight px-4 py-1.5"
                )}
              >
                <a href={hotspot?.href}>
                  <div>{hotspot?.name}</div>
                </a>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </section>
  );
};
