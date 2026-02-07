import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

import { CodeBlock } from "./code-block";
import { CodeWrapper } from "./code-wrapper";
import { TerminalIcon } from "lucide-react";
import { CODE_THEME_BG } from "@/lib/constants";
import { cn } from "@/lib/utils";
const bg = CODE_THEME_BG;

const managers = {
  pnpm: (c: string) => `pnpm dlx ${c.replace("npx ", "")}`,
  npm: (c: string) => c,
  yarn: (c: string) => `yarn ${c.replace("npx ", "")}`,
  bun: (c: string) => `bunx --bun ${c.replace("npx ", "")}`
};

export default async function PackageManagerTabs({
  command = ""
}: {
  command: string;
}) {
  return (
    <Tabs
      defaultValue="npm"
      style={{
        backgroundColor: bg
      }}
      className={"mt-4"}>
      <TabsList variant="underline" className={"pl-4"}>
        <TerminalIcon className="mr-4 size-5 text-neutral-400" />
        {Object.keys(managers).map(m => (
          <TabsTab
            key={m}
            value={m}
            className={cn(
              "flex items-center gap-2 font-medium text-neutral-400 hover:text-white dark:text-neutral-400"
            )}
            style={{ backgroundColor: bg }}>
            {m}
          </TabsTab>
        ))}
      </TabsList>

      {Object.entries(managers).map(([key, transform]) => {
        const cmd = transform(command);

        return (
          <TabsPanel key={key} value={key}>
            <CodeWrapper code={cmd}>
              <CodeBlock code={cmd} lang="bash" />
            </CodeWrapper>
          </TabsPanel>
        );
      })}
    </Tabs>
  );
}
