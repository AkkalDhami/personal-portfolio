import { cn } from "@/lib/utils";
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function ChevronDownLeft({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left",
        className
      )}
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8v8h8" />
    </svg>
  );
}

export function ChevronDownRight({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-right",
        className
      )}
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 8v8h-8" />
    </svg>
  );
}

export function ChevronUpLeft({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-chevron-up-left",
        className
      )}
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 16v-8h8" />
    </svg>
  );
}

export function ChevronUpRight({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "icon icon-tabler icons-tabler-outline icon-tabler-chevron-up-right",
        className
      )}
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 16v-8h-8" />
    </svg>
  );
}
