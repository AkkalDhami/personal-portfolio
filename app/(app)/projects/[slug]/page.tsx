import { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { BackButton } from "@/components/shared/back-btn";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { PrimaryButton } from "@/components/ui/primary-button";
import { getPreviousAndNextProject, getProjectBySlug } from "@/utils/project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";
import { Route } from "next";

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.thumbnail]
    }
  };
}

export default async function Page(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug as string);

  if (!project) {
    redirect("/projects");
  }

  const { previousProject, nextProject } = getPreviousAndNextProject(
    slug as string
  );
  return (
    <div className="border-edge mx-auto max-w-4xl border-x pt-18 pb-4">
      <div className="px-4 py-0 pt-4">
        <BackButton />
      </div>
      <ProjectCard project={project} details={true} />
      <div className="flex justify-between px-4">
        {previousProject && (
          <PrimaryButton
            variant="secondary"
            className="group px-4 py-2 font-medium tracking-normal capitalize"
            as="a"
            title={previousProject.title}
            href={`/projects/${previousProject.slug}` as Route}>
            <div className="flex items-center gap-1">
              <ChevronLeft className="size-5" /> Previous Project
            </div>
            <CornerMarkers
              offset={7.5}
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
            href={`/projects/${nextProject.slug}` as Route}>
            <div className="flex items-center gap-1">
              Next Project <ChevronRight className="size-5" />
            </div>
            <CornerMarkers
              offset={7.5}
              hoverOffset={6}
              className="text-primary"
            />
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
