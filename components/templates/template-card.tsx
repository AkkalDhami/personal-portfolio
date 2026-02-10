"use client";
import { LinkIcon } from "lucide-react";
import { TechBadge } from "@/components/projects/tech-badge";
import type { Route } from "next";
import { CornerMarkers } from "@/components/ui/corner-markers";

import { motion } from "motion/react";

import Image from "next/image";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { TECH_ICONS, TechStack } from "@/utils/icon-map";
import { ITemplate } from "./template-section";

export function TemplateCard({ template }: { template: ITemplate }) {
  return (
    <motion.div className="group relative border border-neutral-500/40 p-4 transition-all">
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          src={template.thumbnail}
          alt={template.title}
          width={200}
          height={200}
          className="object-contain transition-transform duration-500"
        />

        <div className="flex flex-1 flex-col justify-between py-1">
          <div className="space-y-3">
            <h3 className="group-hover:text-primary text-xl font-bold transition-colors md:text-2xl">
              {template.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 md:line-clamp-3">
              {template.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {template.technologies.map((tech, idx) => {
                const Icon =
                  TECH_ICONS[tech.name.toUpperCase() as TechStack] ||
                  TECH_ICONS["DEFAULT"];
                return (
                  <TechBadge key={idx} className="py-0.5 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Icon className="size-3" />
                      {tech.name}
                    </div>
                  </TechBadge>
                );
              })}
            </div>

            <div className="mt-4 flex justify-end">
              <Links template={template} />
            </div>
          </div>
        </div>
      </div>
      <CornerMarkers offset={7} hoverOffset={8} className="text-primary" />
    </motion.div>
  );
}

export function Links({ template }: { template: ITemplate }) {
  const baseClassName =
    "px-3 border border-neutral-500/40 bg-transparent py-2 flex items-center justify-center";
  const linkClassName =
    "text-muted-foreground bg-muted p-2 transition-colors hover:text-foreground hover:bg-muted duration-300";
  return (
    <div className="flex items-center gap-4">
      {template.liveUrl && (
        <Tooltip>
          <TooltipTrigger
            className={baseClassName}
            render={
              <Link
                href={template.liveUrl as Route}
                target="_blank"
                className={linkClassName}
                title="Live Demo">
                <LinkIcon className="size-4" />
              </Link>
            }
          />
          <TooltipContent>
            <p>Live Demo</p>
          </TooltipContent>
        </Tooltip>
      )}
      {template.githubUrl && (
        <Tooltip>
          <TooltipTrigger
            className={baseClassName}
            render={
              <Link
                href={template.githubUrl as Route}
                target="_blank"
                className={linkClassName}
                title="Source Code">
                <SiGithub className="size-4" />
              </Link>
            }
          />
          <TooltipContent>
            <p>Source Code</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
