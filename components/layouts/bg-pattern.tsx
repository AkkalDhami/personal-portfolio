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

      <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center font-mono text-5xl font-bold tracking-widest text-neutral-300 uppercase sm:text-8xl dark:text-neutral-800">
        <p className="fixed top-1/2 left-26 flex -translate-y-1/2 flex-col gap-4">
          {"Akkal".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </p>
        <p className="fixed top-1/2 right-26 flex -translate-y-1/2 flex-col gap-4">
          {"Dhami".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </p>
      </div>
    </>
  );
}
