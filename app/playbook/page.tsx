import { PlaybookSection } from "@/components/playbook/playbook-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Explore our comprehensive playbook, featuring best practices, strategies, and guidelines to help you excel in your projects and initiatives."
};

export default function Page() {
  return (
    <div className="mt-8 min-h-screen px-3">
      <PlaybookSection />
    </div>
  );
}
