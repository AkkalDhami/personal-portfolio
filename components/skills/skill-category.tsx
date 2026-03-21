import { motion } from "motion/react";
import { ICategory } from "@/utils/stack";
import { SkillCard } from "./skill-card";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export function SkillCategoryCard({ description, title, stacks }: ICategory) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="group relative h-full border px-4 py-2 transition-all duration-300">
        <div className="p-1">
          <Heading className="text-muted-primary mb-0.5 text-lg font-medium sm:text-[22px]">
            {title}
          </Heading>

          <SubHeading className="text-muted-foreground mx-0 mb-6 text-base">
            {description}
          </SubHeading>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {stacks.map((stack, index) => (
              <SkillCard key={stack.value} skill={stack} index={index} />
            ))}
          </div>
        </div>
        <CornerMarkers
          offset={7.3}
          hoverOffset={0}
          key={title}
          className="text-primary"
        />
      </div>
    </motion.div>
  );
}
