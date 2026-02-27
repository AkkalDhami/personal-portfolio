"use client";

import { motion } from "motion/react";

import { FlipWords } from "@/components/ui/flip-words";

import { SocialLinks } from "./social-link";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { TechBadge } from "@/components/projects/tech-badge";
import { HOME_PAGE_STACKS } from "@/utils/stack";
import { NAME } from "@/lib/constants";
import { Route } from "next";
import { BlurText } from "../ui/blur-text";
import { SplitText } from "../ui/split-text";

const HERO_WORDS = [
  "systems that scale under pressure.",
  "APIs designed for real traffic.",
  "scalable backend systems that power real products.",
  "codebases that stay maintainable.",
  "performance-first engineering."
];

const fadeUp = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative z-10 mb-12 pt-20 font-sans font-normal">
      <div className="mt-4 sm:mt-8">
        <div className="mb-5 flex items-baseline-last gap-2">
          {/* <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-inter text-4xl font-medium tracking-wide uppercase sm:text-5xl lg:text-6xl xl:text-7xl">
            {NAME}
          </motion.h1> */}
          <BlurText
            text={NAME}
            delay={80}
            animateBy="letters"
            direction="top"
            className="font-inter text-4xl font-semibold tracking-wide uppercase sm:text-5xl lg:text-6xl xl:text-7xl"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 flex flex-col lg:text-left">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-primary mb-6 hidden overflow-hidden text-lg font-medium sm:block md:text-xl">
            I build <FlipWords words={HERO_WORDS} />
          </motion.h2>
          <SplitText
            text="I design scalable web systems focused on performance, maintainability,
          and real-world impact."
            className="text-muted-foreground text-lg leading-relaxed"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground mb-6 w-full text-lg leading-relaxed">
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {HOME_PAGE_STACKS.map(tech => (
                <TechBadge
                  key={tech.value}
                  className="rounded-primary border-neutral-400 py-1 dark:border-neutral-700">
                  <div className="flex items-center gap-2">
                    <tech.icon className="size-4" />
                    {tech.label}
                  </div>
                </TechBadge>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-6 flex flex-wrap items-center gap-4 lg:justify-start">
            <PrimaryButton
              as="a"
              href="/projects"
              className="rounded-primary w-full py-3 sm:w-auto">
              View My Work
              <CornerMarkers
                offset={7}
                hoverOffset={7}
                key={"primary-button"}
              />
            </PrimaryButton>
            <PrimaryButton
              variant="outline"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={"/resume.pdf" as Route}
              className="rounded-primary w-full py-3 sm:w-auto">
              View My Resume
              <CornerMarkers
                offset={7}
                hoverOffset={7}
                key={"primary-button"}
              />
            </PrimaryButton>
          </motion.div>
          <div className="mt-3">
            <SocialLinks minimal={false} className="sm:gap-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
