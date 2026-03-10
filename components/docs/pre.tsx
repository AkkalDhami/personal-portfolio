"use client";

import * as React from "react";
import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";
import { CODE_THEME_BG } from "@/lib/constants";

const bg = CODE_THEME_BG;

export function Pre({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const ref = React.useRef<HTMLPreElement>(null);
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    if (!ref.current) return;

    const codeText =
      ref.current.querySelector("code")?.textContent ??
      ref.current.innerText ??
      "";

    setCode(codeText);
  }, [children]);

  return (
    <div className="relative max-w-[272.5px] overflow-x-auto sm:max-w-[850px]">
      <pre
        ref={ref}
        {...props}
        className={cn("thin-scrollbar relative my-2", className)}
        style={{
          backgroundColor: bg
        }}>
        <CopyButton
          text={code}
          docs={true}
          className="group absolute right-5 bottom-3 z-10 cursor-pointer bg-transparent text-xs hover:bg-neutral-800 hover:text-white"
        />
        {children}
      </pre>
    </div>
  );
}
