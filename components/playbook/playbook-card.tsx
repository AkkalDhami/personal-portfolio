import { IPlaybook } from "@/types/app.types";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { motion } from "motion/react";

export function PlaybookCard({ data, i }: { data: IPlaybook; i: number }) {
  return (
    <motion.a
      href={`/docs/${data.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group hover:bg-card-hover relative border p-3 duration-300">
      <h2 className="text-muted-primary group-hover:text-foreground mb-2 text-lg font-medium underline-offset-4 group-hover:underline">
        {data.title}
      </h2>
      {data.description && (
        <p className="text-muted-foreground line-clamp-3">{data.description}</p>
      )}
      <CornerMarkers offset={8} hoverOffset={6} key={data.slug} />
    </motion.a>
  );
}
