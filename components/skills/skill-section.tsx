"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import {
  BACKEND_STACKS,
  DATABASE_STACKS,
  FRONTEND_STACKS,
  TOOLS_STACKS
} from "@/utils/stack";
import { SkillCategoryCard } from "./skill-category";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  {
    title: "Frontend",
    description: "Modern frontend technologies and frameworks",
    stacks: FRONTEND_STACKS
  },
  {
    title: "Backend",
    description: "Server-side technologies and runtime environments",
    stacks: BACKEND_STACKS
  },
  {
    title: "Database",
    description: "Database management systems and data storage",
    stacks: DATABASE_STACKS
  },
  {
    title: "Tools",
    description: "Development tools and technologies",
    stacks: TOOLS_STACKS
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>Skills & Technologies</Heading>
        <SubHeading className="max-w-2xl mx-0">
          A collection of skills and technologies that I have acquired over the
          years.
        </SubHeading>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6">
        {skills.map((skill, index) => (
          <SkillCategoryCard key={index} {...skill} />
        ))}
      </motion.div>
    </section>
  );
}
