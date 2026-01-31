"use client";

import { ArrowLeft } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <PrimaryButton
      onClick={() => {
        router.back();
      }}
      variant="secondary"
      className="py-2 px-4 group">
      <div className="flex items-center gap-2">
        <ArrowLeft className="group-hover:-translate-x-1 transition-all" /> Go
        Back
      </div>
    </PrimaryButton>
  );
}
