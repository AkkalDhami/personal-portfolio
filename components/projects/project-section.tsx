"use client";

import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { PrimaryButton } from "../ui/primary-button";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
};

export function ProjectsSection({ details = false }: { details?: boolean }) {
  return (
    <section id="projects" className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading> Featured Projects</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          A collection of projects that showcase my skills in modern web
          development and problem-solving capabilities.
        </SubHeading>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8">
        {PROJECTS.map(project => (
          <motion.div key={project.slug} variants={fadeInUp} className="group">
            <ProjectCard project={project} details={details} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-12">
        <PrimaryButton className="w-full cursor-default text-xs sm:text-sm">
          More Projects under Development
        </PrimaryButton>
      </motion.div>
    </section>
  );
}
