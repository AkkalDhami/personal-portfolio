"use client";

import { SETUP_DATA } from "@/data/setup";
import { SetupCard } from "./setup-card";
import { motion } from "motion/react";

export function SetupList() {
  return (
    <div className="space-y-16">
      {SETUP_DATA.map((category, categoryIndex) => (
        <section key={category.title} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.05, delay: categoryIndex * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-3">
            <div className="bg-muted text-primary flex size-10 items-center justify-center">
              <category.icon className="size-5" />
            </div>
            <h2 className="text-muted-primary text-2xl font-medium tracking-tight">
              {category.title}
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, itemIndex) => (
              <SetupCard
                key={item.title}
                item={item}
                index={categoryIndex + itemIndex}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
