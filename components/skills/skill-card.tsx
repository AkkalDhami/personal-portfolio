import { cn } from "@/lib/utils";
import { IStack } from "@/utils/stack";
import { motion } from "motion/react";

function SkillCard({ skill, index }: { skill: IStack; index: number }) {
  return (
    <motion.div
      key={skill.label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "flex items-center gap-2 p-2 border border-dashed border-neutral-400 dark:border-neutral-600 transition-colors duration-200 group/item",
        index % 2 === 0 ? "bg-linear-l" : "bg-linear-b"
      )}>
      <div className="p-1.5 rounded-md">
        <skill.icon className="size-5 text-accent-foreground" />
      </div>
      <span className="text-base font-medium text-accent-foreground truncate">
        {skill.label}
      </span>
    </motion.div>
  );
}

export { SkillCard };
