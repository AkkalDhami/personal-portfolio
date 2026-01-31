import { ContactSection } from "@/components/contact/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubContributions } from "@/components/github";
import { ProjectsSection } from "@/components/projects/project-section";
import { SkillsSection } from "@/components/skills/skill-section";

export default async function Page() {
  return (
    <div className="px-3 relative">
      <HeroSection />
      <ProjectsSection />
      <GitHubContributions />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
