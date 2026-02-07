import { IPlaybook } from "@/types/app.types";
import { CornerMarkers } from "@/components/ui/corner-markers";
import Link from "next/link";
export function PlaybookCard({ data }: { data: IPlaybook }) {
  return (
    <Link
      href={`/docs/${data.slug}`}
      className="group hover:bg-card-hover relative border p-3 duration-300">
      <h2 className="text-muted-primary mb-2 text-lg font-medium">
        {data.title}
      </h2>
      {data.description && (
        <p className="text-muted-foreground line-clamp-2">{data.description}</p>
      )}
      <CornerMarkers offset={8} hoverOffset={4} key={data.slug} className="" />
      <div className="text-muted-secondary group-hover:text-foreground mt-4 flex items-center text-sm font-medium duration-300 group-hover:underline">
        View docs
      </div>
    </Link>
  );
}
