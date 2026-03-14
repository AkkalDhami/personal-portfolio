import { PlaybookSection } from "@/components/playbook/playbook-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Explore our comprehensive playbook, featuring best practices, strategies, and guidelines to help you excel in your projects and initiatives."
};

export default function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x px-4 pt-16 pb-2">
      <PlaybookSection />
    </div>
  );
}
