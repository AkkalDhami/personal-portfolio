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
            "flex h-auto items-center justify-center text-sm text-muted-foreground",
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
                  ? "opacity-100 transform-none"
                  : "opacity-0 scale-95"
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
                className="absolute rounded-none left-2 top-1/2 size-8 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60"
                onClick={handlePrevious}
                disabled={isTransitioning}>
                <ChevronLeft size={16} />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute rounded-none right-2 top-1/2 size-8 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60"
                onClick={handleNext}
                disabled={isTransitioning}>
                <ChevronRight size={16} />
                <span className="sr-only">Next image</span>
              </Button>
            </>
          )}

          {/* Dot Indicator */}
          {showDotIndicator && totalImages > 1 && (
            <div className="absolute  bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={cn(
                    "h-2 w-2 transition-all duration-300 cursor-pointer",
                    activeIndex === index
                      ? "bg-white scale-110 ring-1 ring-white/50"
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
            <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-white">
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
                    "relative w-26 shrink-0 overflow-hidden border transition-all duration-200 aspect-video p-2",
                    activeIndex === index
                      ? "ring-1 ring-neutral-500 dark:ring-neutral-400 ring-offset-1"
                      : "border border-neutral-500/50"
                  )}
                  disabled={isTransitioning}>
                  <Image
                    src={image}
                    width={150}
                    height={100}
                    alt={`Thumbnail ${index + 1}`}
                    className={cn(
                      "object-cover cursor-pointer transition-all duration-200",
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
