import {
  EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  SECONDARY_EMAIL,
  X_URL,
  X_USERNAME
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Route } from "next";
import { CornerMarkers } from "@/components/ui/corner-markers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
type SocialLink = {
  name: string;
  href: string;
  icon: string;
  username: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: GITHUB_URL,
    icon: "/assets/icons/github.webp",
    username: GITHUB_USERNAME
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: "/assets/icons/linkedin.webp",
    username: `@${LINKEDIN_USERNAME}`
  },
  {
    name: "Twitter",
    href: X_URL,
    icon: "/assets/icons/x.webp",
    username: `@${X_USERNAME}`
  },
  {
    name: "Email",
    href: `mailto:${EMAIL}`,
    icon: "/assets/icons/email.svg",
    username: SECONDARY_EMAIL
  }
];

export function SocialLinks({
  minimal = false,
  className
}: {
  minimal?: boolean;
  className?: string;
}) {
  if (minimal) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        {socialLinks.map(link => (
          <Tooltip key={link.name}>
            <TooltipTrigger
              render={
                <PrimaryButton
                  as="a"
                  variant="outline"
                  href={link.href as Route}
                  target="_blank"
                  className="group relative px-1.5 py-1">
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    className={cn(
                      "size-7",
                      link.name.toLocaleLowerCase() === "email" && "dark:invert"
                    )}
                  />
                  <CornerMarkers offset={7} hoverOffset={3} />
                </PrimaryButton>
              }
            />
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}>
      <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}>
        {socialLinks.map(social => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-card-hover group primary-border relative flex w-full space-x-3 rounded-none border-[1.5px] px-3 py-3 text-center">
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className={cn(
                "text-muted-primary group-hover:text-accent-foreground size-11",
                social.name.toLocaleLowerCase() === "email" && "dark:invert"
              )}
            />
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-muted-primary group-hover:text-accent-foreground font-medium underline-offset-3 group-hover:underline">
                  {social.name}
                </h3>
                <LuArrowUpRight className="text-muted-primary group-hover:text-accent-foreground size-4" />
              </div>
              <p className="text-muted-foreground text-sm">{social.username}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
