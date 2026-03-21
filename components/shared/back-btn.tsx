"use client";

import { ArrowLeft } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useRouter } from "next/navigation";
import { CornerMarkers } from "@/components/ui/corner-markers";

export function BackButton() {
  const router = useRouter();
  return (
    <PrimaryButton
      onClick={() => {
        router.back();
      }}
      variant="secondary"
      className="group relative px-3 py-2">
      <div className="flex items-center gap-2">
        <ArrowLeft className="transition-all group-hover:-translate-x-1" /> Go
        Back
      </div>
      <CornerMarkers offset={7.5} hoverOffset={6} className="text-primary" />
    </PrimaryButton>
  );
}
