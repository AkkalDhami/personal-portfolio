import { cn } from "@/lib/utils";
import {
  ChevronDownLeft,
  ChevronDownRight,
  ChevronUpLeft,
  ChevronUpRight
} from "@/components/icons";

interface CornerMarkersProps {
  className?: string;
  size?: number | string;
  offset?: number;
  hoverOffset?: number;
}

export function CornerMarkers({
  className,
  size = 20,
  offset = 8,
  hoverOffset = 4
}: CornerMarkersProps) {
  const isSizeString = typeof size === "string" && size.includes("-");

  const baseStyles = cn(
    "absolute text-muted-foreground transition-all duration-300 ease-out",
    "group-hover:text-accent-foreground pointer-events-none",
    isSizeString ? size : "",
    className
  );

  const styleBase = isSizeString ? {} : { width: size, height: size };
  const offsetPx = `-${offset}px`;
  const movePx = `${hoverOffset}px`;
  const negMovePx = `-${hoverOffset}px`;

  return (
    <>
      {/* Top Left */}
      <ChevronUpLeft
        style={
          {
            ...styleBase,
            top: offsetPx,
            left: offsetPx,
            "--move-x": negMovePx,
            "--move-y": negMovePx
          } as unknown as React.CSSProperties
        }
        className={cn(
          baseStyles,
          "group-hover:transform-[translate(var(--move-x),var(--move-y))]"
        )}
      />
      {/* Top Right */}
      <ChevronUpRight
        style={
          {
            ...styleBase,
            top: offsetPx,
            right: offsetPx,
            "--move-x": movePx,
            "--move-y": negMovePx
          } as unknown as React.CSSProperties
        }
        className={cn(
          baseStyles,
          "group-hover:transform-[translate(var(--move-x),var(--move-y))]"
        )}
      />
      {/* Bottom Right */}
      <ChevronDownRight
        style={
          {
            ...styleBase,
            bottom: offsetPx,
            right: offsetPx,
            "--move-x": movePx,
            "--move-y": movePx
          } as unknown as React.CSSProperties
        }
        className={cn(
          baseStyles,
          "group-hover:transform-[translate(var(--move-x),var(--move-y))]"
        )}
      />
      {/* Bottom Left */}
      <ChevronDownLeft
        style={
          {
            ...styleBase,
            bottom: offsetPx,
            left: offsetPx,
            "--move-x": negMovePx,
            "--move-y": movePx
          } as unknown as React.CSSProperties
        }
        className={cn(
          baseStyles,
          "group-hover:transform-[translate(var(--move-x),var(--move-y))]"
        )}
      />
    </>
  );
}
