import { ContactSection } from "@/components/contact/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubContributions } from "@/components/github";
import { ProjectsSection } from "@/components/projects/project-section";
import { SkillsSection } from "@/components/skills/skill-section";
import { PlaybookSection } from "@/components/playbook/playbook-section";
import { TemplateSection } from "@/components/templates/template-section";

export default async function Page() {
  return (
    <div className="relative px-4">
      <HeroSection />
      <ProjectsSection home />
      <GitHubContributions />
      <PlaybookSection home />
      <SkillsSection />
      <TemplateSection home />
      <ContactSection />
    </div>
  );
}
