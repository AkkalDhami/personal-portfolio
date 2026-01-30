import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function Heading({
  children,
  as = "h2",
  className
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-3 text-3xl font-bold sm:text-4xl",
        as === "h2" && "text-2xl font-medium sm:text-3xl sm:font-semibold",
        className
      )}>
      {children}
    </Tag>
  );
}
