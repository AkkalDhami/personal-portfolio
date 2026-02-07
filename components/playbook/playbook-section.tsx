"use client";

import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { PLAYBOOK_DATA } from "@/data/playbook";
import { PlaybookCard } from "./playbook-card";
import { IPlaybook } from "@/types/app.types";

export const fadeInUp = {
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

export function PlaybookSection() {
  return (
    <section id="projects" className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>Backend Playbook</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          Notes from building production backend systems with Node.js and
          TypeScript.
        </SubHeading>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {PLAYBOOK_DATA.map((playbook: IPlaybook) => (
          <PlaybookCard data={playbook} key={playbook.slug} />
        ))}
      </motion.div>
    </section>
  );
}
