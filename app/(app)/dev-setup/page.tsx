import { Metadata } from "next";
import { SetupSection } from "@/components/setup/setup-section";

export const metadata: Metadata = {
  title: "Development Setup",
  description:
    "A detailed look at my development environment, including my IDE setup, themes, fonts, and tools."
};

export default function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x px-4 pt-16 pb-2">
      <SetupSection />
    </div>
  );
}
