"use client";

import { useEffect, useState } from "react";
import GithubSlugger from "github-slugger";
import { cn } from "@/lib/utils";
import {
  ChartNoAxesGanttIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
import { CornerMarkers } from "../ui/corner-markers";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const container = document.getElementById("docs-content");
    if (!container) return;

    const slugger = new GithubSlugger();

    const elements = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const list: Heading[] = elements
      .map(el => {
        const text = el.textContent?.trim() ?? "";
        if (!text) return null;

        const id = el.id || slugger.slug(text);
        el.id = id;

        return {
          id,
          text,
          level: Number(el.tagName[1])
        };
      })
      .filter(Boolean) as Heading[];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(list);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0
      }
    );

    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="group bg-muted relative my-6 w-full p-2">
      <div
        onClick={() => setOpen(o => !o)}
        className="text-muted-primary hover:text-primary my-2 flex cursor-pointer items-center justify-between duration-300">
        <div className="flex items-center gap-2">
          <ChartNoAxesGanttIcon className="text-muted-primary size-5" />
          <h4 className="text-base font-semibold">On This Page</h4>
        </div>
        {open ? (
          <ChevronUpIcon className="size-5" />
        ) : (
          <ChevronDownIcon className="size-5" />
        )}
      </div>

      <CornerMarkers offset={7.5} hoverOffset={5} />

      {open && (
        <ul className="list-inside list-none space-y-2 text-sm">
          {headings.map(h => (
            <li
              key={h.id}
              style={{ paddingLeft: `${(h.level - 2) * 16}px` }}
              className="list-none">
              <a
                href={`#${h.id}`}
                className={cn(
                  "transition-colors",
                  activeId === h.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground underline-offset-2 hover:underline"
                )}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
