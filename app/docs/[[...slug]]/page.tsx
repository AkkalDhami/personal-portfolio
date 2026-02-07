import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import { mdxComponents } from "@/components/docs/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";
import { DEFAULT_CODE_THEME } from "@/lib/constants";
import { OnThisPage } from "@/components/docs/on-this-page";
import { Metadata, Route } from "next";
import { findNeighbour } from "@/lib/source";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { PLAYBOOK_DATA } from "@/data/playbook";
import { IPlaybook } from "@/types/app.types";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { PrimaryButton } from "@/components/ui/primary-button";

export const revalidate = false;
export const dynamic = "force-dynamic";
export const dynamicParams = false;

const DOCS_PATH = path.join(process.cwd(), "/docs");

export async function generateStaticParams() {
  const registryParams = PLAYBOOK_DATA.map(({ docs }) => {
    const slugArray = docs.replace("/docs/", "").split("/").filter(Boolean);
    return [...slugArray];
  });

  return [...registryParams];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug ?? [];
  const filePath = getDocPath(slug);
  if (!fs.existsSync(filePath)) {
    return {
      title: "Not Found | ServerCN Docs"
    };
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  return {
    title: `${data.title}  | Playbook ` ?? "Playbook",
    description:
      data.description ??
      "ServerCN documentation for building modern Node.js backends.",
    keywords: data.keywords ?? [
      "ServerCN",
      "ServerCN Docs",
      "ServerCN Documentation",
      "ServerCN Backend",
      "ServerCN Backend Documentation"
    ],
    openGraph: {
      title: data.title ?? "ServerCN Docs",
      description:
        data.description ??
        "ServerCN documentation for backend components and guides.",
      url: `/docs/${slug.length > 0 ? slug.join("/") : ""}`,
      siteName: "ServerCN",
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "ServerCN Docs"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: data.title ?? "ServerCN Docs",
      description: data.description ?? "ServerCN backend documentation."
    }
  };
}

const getPrettyCodeOptions = (theme: string) => ({
  theme: {
    dark: theme || "github-dark-high-contrast",
    light: "github-light-default"
  },
  keepBackground: true,
  defaultLang: "plaintext",
  grid: true,
  lineNumbers: true
});

function getDocPath(slug?: string[]) {
  if (!slug || slug.length === 0) {
    notFound();
  }

  return path.join(DOCS_PATH, `${slug.join("/")}.mdx`);
}

export default async function DocsPage(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;

  const { slug = [] } = params;

  const filePath = getDocPath(slug);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const lastComponentIndex = slug.length > 0 ? slug.length - 1 : -1;
  const lastSlug =
    lastComponentIndex >= 0 ? slug[lastComponentIndex] : undefined;

  const { next, prev } = lastSlug
    ? findNeighbour(lastSlug as string)
    : { next: undefined, prev: undefined };

  const source = fs.readFileSync(filePath, "utf8");
  const { content } = matter(source);

  const theme = DEFAULT_CODE_THEME;

  return (
    <div className="flex w-full max-w-3xl gap-8 px-3 sm:p-0">
      <div id="docs-content" className="flex-1">
        <article className="prose prose-neutral dark:prose-invert mb-6 max-w-none [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, getPrettyCodeOptions(theme)]]
              }
            }}
          />
        </article>
        <div className="mt-14">
          <NextSteps next={next} prev={prev} />
        </div>
      </div>
      <aside className="thin-scrollbar docs-content bg-background sticky top-16 z-1 hidden max-h-[calc(100vh-2rem)] min-w-64 shrink-0 overflow-y-auto px-4 xl:block">
        <OnThisPage />
      </aside>
    </div>
  );
}

const NextSteps = ({
  next,
  prev
}: {
  next?: IPlaybook | undefined;
  prev?: IPlaybook | undefined;
}) => {
  return (
    <div className="mt-8 flex items-center justify-between">
      {prev && (
        <PrimaryButton
          variant="secondary"
          className="group px-4 py-2 font-medium tracking-normal capitalize"
          as="a"
          title={prev?.title}
          href={prev.docs as Route}>
          <div className="flex items-center gap-1">
            <ArrowLeftIcon className="size-4" />
            <span className="hidden sm:inline"> {prev.title}</span>{" "}
          </div>
          <CornerMarkers offset={7} hoverOffset={6} className="text-primary" />
        </PrimaryButton>
      )}
      {next && (
        <div className="flex items-center justify-end">
          <PrimaryButton
            variant="secondary"
            className="group px-4 py-2 font-medium tracking-normal capitalize"
            as="a"
            title={next.title}
            href={next.docs as Route}>
            <div className="flex items-center gap-1">
              <span className="hidden sm:inline"> {next.title}</span>{" "}
              <ArrowRightIcon className="size-4" />
            </div>
            <CornerMarkers
              offset={7}
              hoverOffset={6}
              className="text-primary"
            />
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
