import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/project-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my recent work in web development, from full-stack applications to component registries."
};

export default function Page() {
  return (
    <div className="mt-8 px-3">
      <ProjectsSection details={false} />
    </div>
  );
}
