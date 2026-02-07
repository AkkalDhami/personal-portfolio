"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";
import { CornerMarkers } from "@/components/ui/corner-markers";
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed right-6 bottom-6 z-40">
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            className="border-border/50 hover:bg-muted bg-muted rounded-none border backdrop-blur-md transition-all"
            aria-label="Back to top">
            <ArrowUp className="size-5" />
            <CornerMarkers
              hoverOffset={3}
              className="group-hover:text-primary"
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
