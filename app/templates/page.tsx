import { Metadata } from "next";
import { TemplateSection } from "@/components/templates/template-section";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "A curated collection of beautiful portfolio templates and modern landing pages crafted for performance and design."
};

export default function Page() {
  return (
    <div className="mt-8 px-3">
      <TemplateSection />
    </div>
  );
}
