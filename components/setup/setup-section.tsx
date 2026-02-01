"use client";

import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { SetupList } from "./setup-list";

export function SetupSection() {
  return (
    <section id="setup" className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>My Development Setup</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          My daily development environment, including editor configurations,
          themes, fonts, extensions, and tools designed for efficient and
          maintainable coding.
        </SubHeading>
      </motion.div>

      <div className="space-y-12">
        <SetupList />
      </div>
    </section>
  );
}
