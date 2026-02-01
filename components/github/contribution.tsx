"use client";

import { useEffect, useState } from "react";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
  type Activity
} from "@/components/ui/contribution-graph";
import { motion } from "motion/react";
import { getGitHubContributions } from "@/data/github-contributions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import { LoaderIcon } from "lucide-react";

const YEARS = [
  { label: "Last Year", value: "last" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" }
];

interface GithubContributionsProps {
  initialData: Activity[];
}

export function GitHubContributionGraph({
  initialData
}: GithubContributionsProps) {
  const [year, setYear] = useState<string>("last");
  // Default to initialData and no loading state
  const [data, setData] = useState<Activity[]>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Skip fetching if year is "last" because we already have initialData for it
    if (year === "last") {
      setData(initialData);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const contributions = await getGitHubContributions(year);
        setData(contributions);
      } catch (error) {
        console.error("Failed to fetch contributions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [year, initialData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
          Github <br /> Contributions
        </h3>
        <Select
          value={year}
          onValueChange={val => {
            if (val) setYear(val);
          }}>
          <SelectTrigger className="h-6 w-[120px] text-xs">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent className={"w-auto"}>
            {YEARS.map(y => (
              <SelectItem key={y.value} value={y.value} className="text-xs">
                {y.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-secondary/10 relative min-h-[200px] border border-neutral-200 p-4 dark:border-neutral-800">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
          </div>
        ) : (
          <ContributionGraph data={data} blockSize={12} blockMargin={4}>
            <ContributionGraphCalendar
              className="no-scrollbar px-2"
              title="GitHub Contributions">
              {({ activity, dayIndex, weekIndex }) => (
                <Tooltip>
                  <TooltipTrigger render={<g />}>
                    <ContributionGraphBlock
                      activity={activity}
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </TooltipTrigger>

                  <TooltipContent className="font-sans">
                    <p>
                      {activity.count} contribution
                      {activity.count > 1 ? "s" : null} on{" "}
                      {format(new Date(activity.date), "yyyy-MM-dd")}
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter className="mt-4 text-sm">
              <ContributionGraphTotalCount />
              <ContributionGraphLegend />
            </ContributionGraphFooter>
          </ContributionGraph>
        )}
      </div>
    </motion.div>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="text-muted-foreground animate-spin" />
    </div>
  );
}
