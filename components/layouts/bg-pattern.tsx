import { cn } from "@/lib/utils";

export function BgPattern() {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-10",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black" />
    </>
  );
}
