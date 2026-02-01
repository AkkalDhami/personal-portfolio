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
        title: "One Dark Pro",
        link: "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
      },
      {
        title: "Chai Theme",
        link: "https://marketplace.visualstudio.com/items?itemName=hiteshchoudharycode.chai-theme"
      },
      {
        title: "Vesper",
        link: "https://marketplace.visualstudio.com/items?itemName=raunofreiberg.vesper"
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
        title: "Prettier"
      },
      {
        title: "ESLint"
      },
      {
        title: "Tailwind CSS IntelliSense"
      },
      {
        title: "Pretty TypeScript Errors"
      }
    ]
  }
];
