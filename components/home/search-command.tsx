"use client";

import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import {
  RiBookOpenLine,
  RiHome4Line,
  RiPhoneLine,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill
} from "react-icons/ri";
import { HiOutlineCube } from "react-icons/hi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { LuLayoutTemplate } from "react-icons/lu";
import { Fragment, useEffect, useState } from "react";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { Route } from "next";
import { PROJECTS } from "@/data/projects";
import { PLAYBOOK_DATA } from "@/data/playbook";
import { CONTACT_INFO } from "@/components/contact/contact-info";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "@/lib/constants";
import { LuMoonStar } from "react-icons/lu";
import { useTheme } from "next-themes";
import { TEMPLATE_DATA } from "../templates/template-section";

export interface Item {
  value: string;
  label: string;
  icon: IconType | string;
  link?: boolean;
  newTab?: boolean;
}

export interface Group {
  value: string;
  items: Item[];
}

export const navigations: Item[] = [
  {
    icon: RiHome4Line,
    label: "Home",
    value: "/",
    link: true
  },
  {
    icon: HiOutlineCube,
    label: "Projects",
    value: "/projects",
    link: true
  },
  {
    icon: HiOutlineSquare3Stack3D,
    label: "Tech Skills",
    value: "/#skills",
    link: true
  },
  {
    icon: LiaLaptopCodeSolid,
    label: "Development Setup",
    value: "/dev-setup",
    link: true
  },
  {
    icon: RiBookOpenLine,
    label: "PlayBook",
    value: "/playbook",
    link: true
  },
  {
    icon: LuLayoutTemplate,
    label: "Templates",
    value: "/templates",
    link: true
  },
  {
    icon: RiPhoneLine,
    label: "Contacts",
    value: "/contacts",
    link: true
  }
];

export const projects: Item[] = PROJECTS.map(proj => {
  return {
    value: `/projects/${proj.slug}`,
    label: proj.title,
    icon: HiOutlineCube,
    link: true,
    newTab: false
  };
});

export const playbooks: Item[] = PLAYBOOK_DATA.map(play => {
  return {
    value: `${play.docs}`,
    label: play.title,
    icon: RiBookOpenLine,
    link: true,
    newTab: true
  };
});

export const templates: Item[] = TEMPLATE_DATA.map(t => {
  return {
    value: `${t.liveUrl}`,
    label: t.title,
    icon: LuLayoutTemplate,
    link: true,
    newTab: true
  };
});

export const contacts: Item[] = CONTACT_INFO.filter(
  f => f.label.toLowerCase() != "github"
).map(c => {
  return {
    value: c.value,
    label: `${c.label}: ${c.value}`,
    icon: c.icon,
    link: false
  };
});

export const socials: Item[] = [
  {
    value: GITHUB_URL,
    label: "GitHub",
    icon: RiGithubFill,
    link: true,
    newTab: true
  },
  {
    value: LINKEDIN_URL,
    label: "LinkedIn",
    icon: RiLinkedinFill,
    link: true,
    newTab: true
  },
  {
    value: X_URL,
    label: "Twitter",
    icon: RiTwitterXFill,
    link: true,
    newTab: true
  }
];

export const others: Item[] = [
  {
    icon: RiGithubFill,
    label: "Source Code",
    value: `${GITHUB_URL}/akkal-dhami`,
    link: true,
    newTab: true
  },
  {
    icon: LuMoonStar,
    label: "Toggle Theme",
    value: `Toggle Theme`,
    link: false
  }
];

export const groupedItems: Group[] = [
  { items: navigations, value: "NAVIGATION" },
  { items: projects, value: "PROJECTS" },
  { items: playbooks, value: "BACKEND PLAYBOOK" },
  { items: templates, value: "TEMPLATES" },
  { items: contacts, value: "CONTACT INFO" },
  { items: socials, value: "SOCIAL LINKS" },
  { items: others, value: "OTHERS" }
];

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();

  function handleItemClick(_item: Item) {
    if (_item?.link && _item.newTab) {
      return window.open(_item.value, "_blank");
    }

    if (_item.value.toLowerCase() === "toggle theme") {
      const currentTheme = theme === "system" ? systemTheme : theme;
      const isDark = currentTheme === "dark";

      setTheme(isDark ? "light" : "dark");
    }

    if (_item?.link) {
      router.push(_item.value as Route);
      setOpen(false);
    }
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog onOpenChange={setOpen} open={open}>
      <CommandDialogTrigger
        render={
          <PrimaryButton
            variant="outline"
            className="relative px-2 py-2 transition-colors">
            <CornerMarkers offset={7} hoverOffset={4} key={"primary-button"} />
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </PrimaryButton>
        }></CommandDialogTrigger>
      <CommandDialogPopup className={"group relative"}>
        <CornerMarkers offset={7} hoverOffset={8} key={"primary-button"} />
        <Command items={groupedItems}>
          <CommandInput placeholder="Search for apps and commands..." />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: Group) => (
                <Fragment key={group.value}>
                  <CommandGroup items={group.items}>
                    <CommandGroupLabel>{group.value}</CommandGroupLabel>
                    <CommandCollection>
                      {(item: Item) => {
                        const image = typeof item.icon === "string";
                        return (
                          <CommandItem
                            key={item.value}
                            onClick={() => handleItemClick(item)}
                            value={item.value}
                            className={"ml-2 flex items-center gap-2 py-2"}>
                            {image ? (
                              <Image
                                src={item.icon as string}
                                alt={item.label}
                                width={16}
                                height={16}
                                className={cn(
                                  "text-muted-primary group-hover:text-accent-foreground size-6",
                                  item.label.toLocaleLowerCase() === "email" &&
                                    "dark:invert"
                                )}
                              />
                            ) : (
                              <item.icon className="size-4" />
                            )}

                            <span className="flex-1">{item.label}</span>
                          </CommandItem>
                        );
                      }}
                    </CommandCollection>
                  </CommandGroup>
                  <CommandSeparator />
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <KbdGroup>
                  <Kbd>
                    <ArrowUpIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowDownIcon />
                  </Kbd>
                </KbdGroup>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <Kbd>
                  <CornerDownLeftIcon />
                </Kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Kbd>Esc</Kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
