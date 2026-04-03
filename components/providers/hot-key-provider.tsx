"use client";

import { useThemeToggleHotkey } from "@/hooks/use-theme-hot-key";
import { useNavigationHotkeys } from "@/hooks/use-navigation-hotkeys";

export function ThemeHotkeyProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useThemeToggleHotkey();
  useNavigationHotkeys();

  return <>{children}</>;
}
