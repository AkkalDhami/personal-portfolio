import { Code2, Terminal, Palette, Plug } from "lucide-react";

import { ElementType } from "react";
import { RxFontFamily } from "react-icons/rx";

export interface SetupItem {
  title: string;
  link?: string;
  image?: string;
  current?: boolean;
}

export interface SetupCategory {
  title: string;
  icon: ElementType;
  items: SetupItem[];
}

export const SETUP_DATA: SetupCategory[] = [
  {
    title: "Editor & AI",
    icon: Code2,
    items: [
      {
        title: "VS Code",
        link: "https://code.visualstudio.com/",
        image: "/assets/icons/vscode.png"
      },
      {
        title: "Cursor",
        link: "https://cursor.sh/",
        image: "/assets/icons/cursor.png"
      },
      {
        title: "Antigravity",
        link: "https://antigravity.google",
        image: "/assets/icons/antigravity.png",
        current: true
      }
    ]
  },
  {
    title: "Themes",
    icon: Palette,
    items: [
      {
        title: "Just Black",
        link: "https://marketplace.visualstudio.com/items?itemName=nur.just-black",
        current: true
      },
      {
        title: "Oscura Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=Fey.oscura"
      },
      {
        title: "Ayu",
        link: "https://marketplace.visualstudio.com/items?itemName=teabyii.ayu"
      },
      {
        title: "Vesper",
        link: "https://marketplace.visualstudio.com/items?itemName=raunofreiberg.vesper"
      },
      {
        title: "One Dark Pro",
        link: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
      },
      {
        title: "Chai Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=hiteshchoudharycode.chai-theme"
      }
    ]
  },
  {
    title: "Fonts",
    icon: RxFontFamily,
    items: [
      {
        title: "Geist Mono",
        link: "https://vercel.com/font",
        current: true
      },
      {
        title: "Fira Code",
        link: "https://fonts.google.com/specimen/Fira+Code",
        current: true
      },
      {
        title: "JetBrains Mono",
        link: "https://fonts.google.com/specimen/JetBrains+Mono"
      }
    ]
  },
  {
    title: "Terminal & Tools",
    icon: Terminal,
    items: [
      {
        title: "Windows Terminal",
        link: "https://github.com/microsoft/terminal"
      },
      {
        title: "Warp",
        link: "https://www.warp.dev/",
        current: true
      },
      {
        title: "Git",
        link: "https://git-scm.com/"
      }
    ]
  },
  {
    title: "Extensions",
    icon: Plug,
    items: [
      {
        title: "Prettier",
        link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
      },
      {
        title: "ESLint",
        link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
      },
      {
        title: "Tailwind CSS IntelliSense",
        link: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
      },
      {
        title: "Pretty TypeScript Errors",
        link: "https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors"
      },
      {
        title: "Better Comments",
        link: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
      },
      {
        title: "Auto Close Tag",
        link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
      },
      {
        title: "Auto Rename Tag",
        link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
      },
      {
        title: "Colorize",
        link: "https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize"
      },
      {
        title: "CSS Peek",
        link: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"
      },
      {
        title: "Path Intellisense",
        link: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
      },
      {
        title: "Error Lens",
        link: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"
      },
      {
        title: "Code Runner",
        link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
      },
      {
        title: "ES7+ React snippets",
        link: "https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets"
      },
      {
        title: "HTML Tag Wrap",
        link: "https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap"
      },
      {
        title: "Image Preview",
        link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
      },
      {
        title: "Import Cost",
        link: "https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
      },
      {
        title: "JavaScript Snippets",
        link: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets"
      },
      {
        title: "Live Server",
        link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
      },
      {
        title: "Multi Cursor Case Preserve",
        link: "https://marketplace.visualstudio.com/items?itemName=Cardinal90.multi-cursor-case-preserve"
      },
      {
        title: "Template String Converter",
        link: "https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter"
      },
      {
        title: "Markdownlint",
        link: "https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint"
      },
      {
        title: "Symbols",
        link: "https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
      },
      {
        title: "GitHub Copilot",
        link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
      },
      {
        title: "REST Client",
        link: "https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
      },
      {
        title: "Material Icon Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
      },
      {
        title: "CSS Navigation",
        link: "https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation"
      },
      {
        title: "VS Code PDF",
        link: "https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf"
      }
    ]
  }
];
