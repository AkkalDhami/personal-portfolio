import { ProjectCard } from "@/components/projects/project-card";
import { BackButton } from "@/components/shared/back-btn";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { PrimaryButton } from "@/components/ui/primary-button";
import { getPreviousAndNextProject, getProjectBySlug } from "@/utils/project";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function Page(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { previousProject, nextProject } = getPreviousAndNextProject(
    slug as string
  );
  return (
    <div className="pt-16">
      <div className="p-4">
        <BackButton />
      </div>
      <ProjectCard project={project} details={true} />
      <div className="flex justify-between p-4">
        {previousProject && (
          <PrimaryButton
            variant="secondary"
            className="group px-4 py-2 font-medium tracking-normal capitalize"
            as="a"
            title={previousProject.title}
            href={`/projects/${previousProject.slug}`}>
            <div className="flex items-center gap-1">
              <ChevronLeft className="size-5" /> Previous Project
            </div>
            <CornerMarkers
              offset={7}
              hoverOffset={6}
              className="text-primary"
            />
          </PrimaryButton>
        )}
        {nextProject && (
          <PrimaryButton
            variant="secondary"
            className="group px-4 py-2 font-medium tracking-normal capitalize"
            as="a"
            title={nextProject.title}
            href={`/projects/${nextProject.slug}`}>
            <div className="flex items-center gap-1">
              Next Project <ChevronRight className="size-5" />
            </div>
            <CornerMarkers
              offset={7}
              hoverOffset={6}
              className="text-primary"
            />
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
