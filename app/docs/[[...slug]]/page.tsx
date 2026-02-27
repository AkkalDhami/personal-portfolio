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
import siteConfig from "@/lib/site";
import { cn } from "@/lib/utils";

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
      title: "Not Found | Playbook"
    };
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  return {
    title: `${data.title}  | Playbook `,
    description: data.description ?? "Playbook",
    keywords: siteConfig.keywords,
    openGraph: {
      title: `${data.title}  | Playbook `,
      description: data.description ?? "Playbook",
      url: `/docs/${slug.length > 0 ? slug.join("/") : ""}`,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: data.title ?? "Playbook",
      description: data.description ?? "Playbook"
    }
  };
}

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
  const { content, data } = matter(source);

  const theme = DEFAULT_CODE_THEME;

  return (
    <div className="flex w-full max-w-4xl gap-8 px-3 sm:p-0">
      <div id="docs-content">
        <article className="prose prose-neutral dark:prose-invert mb-6 max-w-none [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
          <div className="my-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-medium">{data.title}</h2>
              <NextSteps next={next} prev={prev} min />
            </div>
            <OnThisPage />
          </div>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: {
                        dark: theme || "github-dark-high-contrast",
                        light: "github-light-default"
                      },
                      keepBackground: false,
                      defaultLang: "plaintext",
                      grid: true
                    }
                  ]
                ]
              }
            }}
          />
        </article>
        <div className="mt-14">
          <NextSteps next={next} prev={prev} className="mt-8" />
        </div>
      </div>
    </div>
  );
}

const NextSteps = ({
  next,
  prev,
  min,
  className
}: {
  next?: IPlaybook | undefined;
  prev?: IPlaybook | undefined;
  min?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {prev && (
        <PrimaryButton
          variant="secondary"
          className={cn(
            "group font-medium tracking-normal capitalize",
            min ? "px-2 py-2" : "px-4 py-2"
          )}
          as="a"
          href={prev.docs as Route}>
          <div className="flex items-center gap-1">
            <ArrowLeftIcon className="size-4" />
            {!min && <span className="hidden sm:inline"> {prev.title}</span>}
          </div>
          <CornerMarkers offset={7} hoverOffset={4} />
        </PrimaryButton>
      )}
      {next && (
        <div className="flex items-center justify-end">
          <PrimaryButton
            variant="secondary"
            className={cn(
              "group font-medium tracking-normal capitalize",
              min ? "px-2 py-2" : "px-4 py-2"
            )}
            as="a"
            title={next.title}
            href={next.docs as Route}>
            <div className="flex items-center gap-1">
              {!min && <span className="hidden sm:inline"> {next.title}</span>}
              <ArrowRightIcon className="size-4" />
            </div>
            <CornerMarkers offset={7} hoverOffset={4} />
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
