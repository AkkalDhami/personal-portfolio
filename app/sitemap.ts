import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import siteConfig from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/contacts", "/dev-setup"].map(route => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const projectRoutes = PROJECTS.map(project => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...routes, ...projectRoutes];
}
