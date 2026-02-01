import { getGitHubContributions } from "@/data/github-contributions";
import { Suspense } from "react";
import {
  GitHubContributionFallback,
  GitHubContributionGraph
} from "./contribution";

export async function GitHubContributions() {
  const contributions = await getGitHubContributions();

  return (
    <div className="relative py-12">
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph initialData={contributions} />
      </Suspense>
    </div>
  );
}
