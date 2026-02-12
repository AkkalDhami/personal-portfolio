import { cn } from "@/lib/utils";
import { IStack } from "@/utils/stack";
import { motion } from "motion/react";
import Image from "next/image";
import { CornerMarkers } from "../ui/corner-markers";

function SkillCard({ skill, index }: { skill: IStack; index: number }) {
  const typeOfSkillIcon = skill.icon instanceof Function ? "icon" : "image";

  return (
    <motion.div
      key={skill.label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "group/item relative flex items-center gap-2 border border-neutral-300 p-2 transition-colors duration-200 dark:border-neutral-800",
        index % 2 === 0 ? "bg-linear-l" : "bg-linear-b"
      )}>
      <div className="p-1.5">
        {typeOfSkillIcon === "icon" ? (
          <skill.icon className="text-accent-foreground size-5" />
        ) : (
          <Image
            src={skill.icon as string}
            alt={skill.label}
            width={20}
            height={20}
            className="text-accent-foreground size-5 invert"
          />
        )}
      </div>
      <span className="text-accent-foreground truncate text-base font-medium">
        {skill.label}
      </span>
      <CornerMarkers
        offset={7}
        hoverOffset={0}
        className="group-hover:text-muted-foreground"
      />
    </motion.div>
  );
}

export { SkillCard };
