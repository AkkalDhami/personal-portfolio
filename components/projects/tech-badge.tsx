import { cn } from "@/lib/utils";
import { CornerMarkers } from "../ui/corner-markers";

export interface Tech {
  name: string;
}

export function TechBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `from-background to-card-hover text-accent-foreground relative mx-0.5 inline-flex items-center border border-neutral-400 bg-linear-to-r px-1.5 text-base dark:border-neutral-500`,
        className
      )}>
      {children}

      <CornerMarkers
        offset={7}
        hoverOffset={0}
        className="group-hover:text-muted-foreground"
        key={"primary-button"}
      />
    </div>
  );
}
