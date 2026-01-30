import { cn } from "@/lib/utils";

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
        `from-background to-card-hover text-accent-foreground mx-0.5 inline-flex items-center border border-dashed border-neutral-400 bg-linear-to-r px-1.5 text-base dark:border-neutral-500`,
        className
      )}>
      {children}
    </div>
  );
}
