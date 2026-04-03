"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/constants";

type HotkeyMap = Record<string, string>;

type Options = {
  routes?: HotkeyMap;
  requireShift?: boolean;
};

export function useNavigationHotkeys(options: Options = {}) {
  const router = useRouter();

  const {
    routes = {
      h: "/",
      p: "/projects",
      c: "/contacts",
      s: "/dev-setup",
      b: "/playbook",
      t: "/templates",
      g: GITHUB_URL,
      x: X_URL,
      l: LINKEDIN_URL
    },
    requireShift = false
  } = options;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      const key = e.key.toLowerCase();

      if (requireShift && !e.shiftKey) return;

      const path = routes[key];
      if (!path) return;

      e.preventDefault();
      if ([GITHUB_URL, X_URL, LINKEDIN_URL].includes(path)) {
        window.open(path, "_blank");
        return;
      }

      router.push(path as Route);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router, routes, requireShift]);
}
