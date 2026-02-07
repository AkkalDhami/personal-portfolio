"use client";

import { motion } from "motion/react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

export function NamePronoun() {
  const handleVoiceClick = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/audio/audio.wav");
      audio.play().catch(err => console.error("Error playing audio:", err));
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <motion.button
            onClick={handleVoiceClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group text-muted-foreground hover:text-primary relative hidden cursor-pointer items-center justify-center p-2 transition-colors outline-none"
            aria-label="Listen to pronunciation">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 sm:size-6">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 8a5 5 0 0 1 0 8" />
              <path d="M17.7 5a9 9 0 0 1 0 14" />
              <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            </motion.svg>
          </motion.button>
        }
      />
      <TooltipContent side="right">Listen to pronunciation</TooltipContent>
    </Tooltip>
  );
}
