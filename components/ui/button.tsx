"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-tertiary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer group active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-border bg-background hover:color-card-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-secondary/80 text-muted-foreground hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline !p-0 !h-auto",
        glass:
          "bg-background/20 backdrop-blur-md border border-white/10 text-foreground hover:bg-background/30 hover:border-white/20"
      },
      size: {
        default: "h-10 px-6 gap-2",
        xs: "h-7 px-3 rounded-md text-[10px] gap-1",
        sm: "h-9 px-4 rounded-lg text-xs gap-1.5",
        lg: "h-11 px-8 rounded-2xl text-base gap-2.5",
        icon: "size-10 rounded-md",
        "icon-xs": "size-7 rounded-lg",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-13 rounded-2xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends HTMLMotionProps<"button">, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
