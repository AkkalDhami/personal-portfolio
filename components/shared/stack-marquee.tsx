import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { STACKS } from "@/utils/stack";
import Image from "next/image";

export function StackMarquee() {
  return (
    <section id="stack-marquee" className="relative py-12">
      <Marquee className="space-y-5">
        <MarqueeContent speed={70} direction="right" gradient={false}>
          {STACKS.map(s => (
            <StackMarqueeItem key={s.value} stack={s} />
          ))}
        </MarqueeContent>
        <MarqueeContent speed={70} gradient={false}>
          {STACKS.toSorted().map(s => (
            <StackMarqueeItem key={s.value} stack={s} />
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}

function StackMarqueeItem({
  stack,
  className
}: {
  stack: (typeof STACKS)[number];
  className?: string;
}) {
  const typeOfStackIcon = stack.icon instanceof Function ? "icon" : "image";

  return (
    <MarqueeItem
      className={cn(
        "group flex items-center gap-2 text-xl font-medium",
        className
      )}>
      <div className="p-1.5">
        {typeOfStackIcon === "icon" ? (
          <stack.icon className="text-muted-primary group-hover:text-primary size-8" />
        ) : (
          <Image
            src={stack.icon as string}
            alt={stack.label}
            width={20}
            height={20}
            className="text-accent-foreground size-8 invert"
          />
        )}
      </div>
      <span className="text-muted-primary group-hover:text-primary text-3xl leading-0.5 font-medium">
        {stack.label}
      </span>
    </MarqueeItem>
  );
}
