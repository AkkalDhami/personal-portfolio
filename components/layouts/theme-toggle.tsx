"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { CornerMarkers } from "@/components/ui/corner-markers";

export function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    const audio = new Audio("/audio/audio.wav");
    audio.play().catch(err => console.error("Error playing sound:", err));
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative group border-[1.5px] py-1.5 px-2 size-9 rounded-0 cursor-pointer transition-colors duration-300",
        "bg-linear-to-r from-background to-card-hover hover:bg-secondary/80 border border-neutral-200 dark:border-neutral-800",
        "flex items-center justify-center",
        "hover:border-neutral-500 dark:hover:border-neutral-400"
      )}
      aria-label="Toggle theme">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: 0.2, ease: "circOut" }}
          className="flex items-center justify-center">
          {!isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                d="M12 3a6 6 0 0 0 9 9"
                className="opacity-40"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-sun">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
      <CornerMarkers hoverOffset={3} className="group-hover:text-primary" />
    </button>
  );
}
