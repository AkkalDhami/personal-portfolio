"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export type DetailData = {
  images: string[];
};

type DetailSwapCardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: DetailData;
  onImageChange?: (index: number) => void;
  showImageCounter?: boolean;
  showDotIndicator?: boolean;
  showThumbnailNavigator?: boolean;
  imageHeight?: number | string;
  imageFit?: "cover" | "contain";
  classNames?: {
    mainImage?: string;
    thumbnailImage?: string;
  };
};

const DetailSwapCard = React.forwardRef<HTMLDivElement, DetailSwapCardProps>(
  (
    {
      data,
      className,
      onImageChange,
      showImageCounter = true,
      showDotIndicator = true,
      showThumbnailNavigator = true,
      imageHeight = 500,
      imageFit = "cover",
      classNames,
      ...rest
    },
    ref
  ) => {
    const images = data?.images || [];
    const totalImages = images.length;

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    const handleImageChange = (index: number) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      onImageChange?.(index);
      setTimeout(() => setIsTransitioning(false), 400);
    };

    const handleNext = () => handleImageChange((activeIndex + 1) % totalImages);
    const handlePrevious = () =>
      handleImageChange((activeIndex - 1 + totalImages) % totalImages);

    if (!images.length) {
      return (
        <div
          ref={ref}
          className={cn(
            "text-muted-foreground flex h-auto items-center justify-center text-sm",
            className
          )}>
          No images available
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("w-full space-y-2 p-4", className)}
        {...rest}>
        {/* Main image display */}
        <div
          className={cn(
            "relative w-full overflow-hidden",
            typeof imageHeight === "number"
              ? `h-[${imageHeight}px]`
              : `h-[${imageHeight}]`
          )}
          style={{ height: imageHeight }}>
          {images.map((image, index) => (
            <div
              key={image + index}
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-out",
                activeIndex === index
                  ? "transform-none opacity-100"
                  : "scale-95 opacity-0"
              )}
              style={{
                transform:
                  activeIndex === index
                    ? "none"
                    : index < activeIndex
                      ? "translateX(-100%)"
                      : "translateX(100%)"
              }}>
              <Image
                src={image}
                width={600}
                height={600}
                alt={`Image ${index + 1}`}
                className={cn(
                  "h-full w-full transition-all duration-500",
                  classNames?.mainImage
                )}
                style={{ objectFit: imageFit }}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          {totalImages > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-2 size-8 -translate-y-1/2 rounded-none bg-black/40 text-white hover:bg-black/60"
                onClick={handlePrevious}
                disabled={isTransitioning}>
                <ChevronLeft size={16} />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-1/2 right-2 size-8 -translate-y-1/2 rounded-none bg-black/40 text-white hover:bg-black/60"
                onClick={handleNext}
                disabled={isTransitioning}>
                <ChevronRight size={16} />
                <span className="sr-only">Next image</span>
              </Button>
            </>
          )}

          {/* Dot Indicator */}
          {showDotIndicator && totalImages > 1 && (
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 bg-black/40 px-2 py-1 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={cn(
                    "h-2 w-2 cursor-pointer transition-all duration-300",
                    activeIndex === index
                      ? "scale-110 bg-white ring-1 ring-white/50"
                      : "bg-white/60 hover:bg-white/80"
                  )}
                  aria-label={`View image ${index + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {showImageCounter && (
            <div className="absolute top-2 right-2 bg-black/40 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              {activeIndex + 1} / {totalImages}
            </div>
          )}
        </div>
        {/* Thumbnail Navigator */}
        {showThumbnailNavigator && totalImages > 1 && (
          <ScrollArea className="w-full">
            <div className="flex gap-6 px-1 pt-2 pb-2.5">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={cn(
                    "relative aspect-video w-26 shrink-0 overflow-hidden border p-2 transition-all duration-200",
                    activeIndex === index
                      ? "ring-1 ring-neutral-500 ring-offset-1 dark:ring-neutral-400"
                      : "border border-neutral-500/50"
                  )}
                  disabled={isTransitioning}>
                  <Image
                    src={image}
                    width={150}
                    height={100}
                    alt={`Thumbnail ${index + 1}`}
                    className={cn(
                      "cursor-pointer object-cover transition-all duration-200",
                      activeIndex !== index && "grayscale",
                      classNames?.thumbnailImage
                    )}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="h-1.5" />
          </ScrollArea>
        )}
      </div>
    );
  }
);

DetailSwapCard.displayName = "DetailSwapCard";

export { DetailSwapCard };
