"use client";

import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { Project } from "@/data/projects";
import { fadeInUp } from "../playbook/playbook-section";
import { stagger } from "../projects/project-section";
import { TemplateCard } from "./template-card";
import { GITHUB_URL } from "@/lib/constants";

export type ITemplate = Pick<
  Project,
  | "title"
  | "description"
  | "thumbnail"
  | "githubUrl"
  | "liveUrl"
  | "technologies"
>;

export const TEMPLATE_DATA: ITemplate[] = [
  {
    title: "Minimal Developer Portfolio",
    description:
      "A sleek developer portfolio with modern UI, subtle animations, and fully responsive layouts built for performance and clarity.",
    thumbnail: "/images/og.png",
    githubUrl: `${GITHUB_URL}/akkal-dhami`,
    liveUrl: "https://akkal.vercel.app",
    technologies: [
      { name: "Nextjs" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" }
    ]
  },
  {
    title: "Clean Personal Portfolio",
    description:
      "A lightweight and elegant personal portfolio template focused on simplicity, speed, and intuitive design.",
    thumbnail: "/assets/templates/temp-2.png",
    githubUrl: `${GITHUB_URL}/minimal-portfolio-template`,
    liveUrl: "https://akkal-min-portfolio.vercel.app",
    technologies: [
      { name: "Nextjs" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" }
    ]
  },
  {
    title: "Retro-Inspired Portfolio",
    description:
      "A unique and retro-inspired portfolio website designed for developers who want to showcase their work with a nostalgic touch.",
    thumbnail: "/assets/templates/temp-6.png",
    githubUrl: `${GITHUB_URL}/8bit-portfolio-template`,
    liveUrl: "https://8bit-portfolio-template.vercel.app",
    technologies: [
      { name: "Nextjs" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" }
    ]
  },
  {
    title: "Full-Stack MERN Portfolio",
    description:
      "A full-stack portfolio template built with the MERN stack, designed to showcase scalable projects and real-world applications.",
    thumbnail: "/assets/templates/temp-3.png",
    githubUrl: `${GITHUB_URL}/MERN-Portfolio`,
    liveUrl: "https://akkaldhami.vercel.app",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "MongoDB" },
      { name: "Nodejs" },
      { name: "Expressjs" }
    ]
  },
  {
    title: "Terminal-Style Portfolio",
    description:
      "A unique terminal-inspired portfolio experience with interactive UI and a developer-focused aesthetic.",
    thumbnail: "/assets/templates/temp-5.png",
    githubUrl: `${GITHUB_URL}/terminal-portfolio`,
    liveUrl: "https://terminal-portfolio-akkal.vercel.app",
    technologies: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "Tailwind" }
    ]
  },
  {
    title: "Classic Minimal Portfolio",
    description:
      "A modern yet classic portfolio template built with clean layouts, smooth interactions, and responsive design.",
    thumbnail: "/assets/templates/temp-4.png",
    githubUrl: `${GITHUB_URL}/Portfolio`,
    liveUrl: "https://akkal2.vercel.app",
    technologies: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "Tailwind" }
    ]
  }
];

export function TemplateSection() {
  return (
    <section id="contact" className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>Templates</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          A curated collection of beautiful portfolio templates and modern
          landing pages crafted for performance and design.
        </SubHeading>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8">
        {TEMPLATE_DATA.map(t => (
          <motion.div key={t.githubUrl} variants={fadeInUp} className="group">
            <TemplateCard template={t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
