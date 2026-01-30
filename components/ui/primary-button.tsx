"use client";

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { motion } from "motion/react";

type ButtonVariant = "outline" | "default";

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<typeof motion.button> & {
    as?: "button";
    href?: never;
  };

type AnchorProps = BaseProps &
  ComponentPropsWithoutRef<typeof motion.a> & {
    as: "a";
    href: string;
  };

type PrimaryButtonProps = ButtonProps | AnchorProps;

export function PrimaryButton({
  children,
  className,
  variant = "default",
  ...props
}: PrimaryButtonProps) {
  const commonStyles = cn(
    "group relative inline-flex items-center justify-center",
    "text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300",
    "border-[1.5px] px-8 py-4 cursor-pointer no-underline",
    variant === "default"
      ? "bg-accent-foreground bg-linear-to-b from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-200 text-background border-neutral-900 dark:border-neutral-300 hover:from-neutral-800 hover:to-neutral-700 dark:hover:from-neutral-50 dark:hover:to-neutral-300 duration-300"
      : "bg-transparent text-foreground hover:bg-card-hover border-neutral-300 dark:border-neutral-700 hover:bg-neutral-500/10",
    className
  );

  const Content = (
    <>
      <span>{children}</span>
    </>
  );

  if (props.as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, href, ...anchorProps } = props;
    return (
      <motion.a
        href={href}
        className={commonStyles}
        {...(anchorProps as ComponentPropsWithoutRef<typeof motion.a>)}>
        {Content}
      </motion.a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, ...buttonProps } = props as ButtonProps;
  return (
    <motion.button
      className={commonStyles}
      {...(buttonProps as ComponentPropsWithoutRef<typeof motion.button>)}>
      {Content}
    </motion.button>
  );
}
