import ContactSection from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubContributions } from "@/components/github";

export default async function Page() {
  return (
    <div>
      <HeroSection />
      <ContactSection>
        <GitHubContributions />
      </ContactSection>
    </div>
  );
}
