import { PROJECTS } from "@/data/projects";

export const getProjectBySlug = (slug: string) => {
  return PROJECTS.find(project => project.slug === slug);
};

//? get previous and next project
export const getPreviousAndNextProject = (slug: string) => {
  const project = getProjectBySlug(slug);
  if (!project) return { previousProject: undefined, nextProject: undefined };
  const index = PROJECTS.indexOf(project);
  const previousProject = PROJECTS[index - 1];
  const nextProject = PROJECTS[index + 1];
  return { previousProject, nextProject };
};
