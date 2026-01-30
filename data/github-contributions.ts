"use server";

import type { Activity } from "@/components/ui/contribution-graph";
import { GITHUB_USERNAME } from "@/lib/constants";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = async (
  year: string | number = "last"
): Promise<Activity[]> => {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
    {
      next: {
        revalidate: 86400,
        tags: ["github-contributions"]
      }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch github contributions");
  }

  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
};
