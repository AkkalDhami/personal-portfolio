import { motion } from "motion/react";
import { ICategory } from "@/utils/stack";
import { SkillCard } from "./skill-card";
import { CornerMarkers } from "../ui/corner-markers";
import { Heading } from "../ui/heading";
import { SubHeading } from "../ui/sub-heading";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export function SkillCategoryCard({ description, title, stacks }: ICategory) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="h-full relative group border px-4 py-2 transition-all duration-300">
        <div className="p-1">
          <Heading className="font-medium mb-0.5 text-muted-primary text-lg sm:text-[22px]">
            {title}
          </Heading>

          <SubHeading className="text-base text-muted-foreground mb-6 mx-0">
            {description}
          </SubHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {stacks.map((stack, index) => (
              <SkillCard key={stack.value} skill={stack} index={index} />
            ))}
          </div>
        </div>
        <CornerMarkers
          offset={8}
          hoverOffset={0}
          key={title}
          className="text-primary"
        />
      </div>
    </motion.div>
  );
}
