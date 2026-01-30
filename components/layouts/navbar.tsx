"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Profile } from "./profile";
import { CornerMarkers } from "@/components/ui/corner-markers";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Route } from "next";
import { isActiveLink } from "@/utils/link";

interface MenuItem {
  label: string;
  href: Route;
}

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = useMemo<MenuItem[]>(
    () => [
      {
        label: "About",
        href: "/" as Route
      },
      {
        label: "Projects",
        href: "/projects" as Route
      },
      {
        label: "Contact",
        href: "/contact" as Route
      }
    ],
    []
  );

  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between px-4 py-2.5 transition-all duration-500",
          "bg-background backdrop-blur-md w-full max-w-4xl"
        )}>
        <Profile />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/20 p-1 border border-border/60">
          {menuItems.map((item, index) => {
            const isActive = isActiveLink(pathname, item.href);
            const isMoving =
              (hoveredIndex ?? (isActive ? index : -1)) === index;

            return (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative px-4 py-1.5 text-xs cursor-pointer font-medium uppercase tracking-widest transition-all duration-300",
                  isMoving
                    ? "text-primary"
                    : "text-muted-primary hover:text-primary"
                )}>
                <span className="relative z-10">{item.label}</span>
                {isMoving && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute border-[1.5px] border-neutral-500/40 inset-0 bg-muted"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden relative bg-muted cursor-pointer hover:bg-secondary transition-colors">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed h-screen inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] h-screen bg-background border-l border-border z-50 md:hidden overflow-y-auto">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Menu
                    </span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 relative group cursor-pointer bg-muted hover:bg-secondary transition-colors">
                      <X size={16} />
                      <span className="sr-only">Close menu</span>
                      <CornerMarkers
                        hoverOffset={2}
                        className="group-hover:text-primary"
                      />
                    </button>
                  </div>

                  <div className="flex flex-col space-y-4">
                    {menuItems.map(item => {
                      const isActive = isActiveLink(pathname, item.href);
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center cursor-pointer gap-4 px-4 py-2.5 transition-all duration-200 group relative",
                            isActive
                              ? "bg-secondary/50 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                          )}>
                          <span className="font-semibold text-xl uppercase tracking-widest">
                            {item.label}
                          </span>
                          {isActive && (
                            <>
                              <CornerMarkers
                                hoverOffset={0}
                                className="text-primary"
                              />
                            </>
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-auto pt-8 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <Profile />
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-sm font-semibold tracking-tight">
                          Akkal Dhami
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          Full Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
