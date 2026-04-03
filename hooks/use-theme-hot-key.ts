"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

type Options = {
  key?: string;
  requireShift?: boolean;
};

export function useThemeToggleHotkey(options: Options = {}) {
  const { key = "d", requireShift = false } = options;

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      if (e.key.toLowerCase() !== key.toLowerCase()) return;

      if (requireShift && !e.shiftKey) return;

      const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, requireShift, resolvedTheme, setTheme]);
}
