import { Axe, Mail } from "lucide-react";
import Link from "next/link";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { Profile } from "./profile";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 px-3 mb-10 border-t border-border/40 pt-12 pb-6 relative group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Profile />
            <span className="font-mono font-bold tracking-tighter text-lg">
              Akkal Dhami
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Building modern web experiences with a focus on performance,
            scalability, and clean architecture.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/akkaldhami"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub size={18} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <BsTwitterX size={18} />
            </a>
            <a
              href="mailto:dhamiakkal21@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map(item => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Other
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Akkal Dhami. All rights reserved.
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <span>Built with</span>
          <div className="flex items-center relative gap-1 text-primary">
            <Axe size={16} strokeWidth={2.5} />
          </div>
          by
          <Link
            href="https://github.com/akkaldhami"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary">
            Akkal Dhami
          </Link>
        </div>
      </div>

      <CornerMarkers
        size={18}
        offset={5}
        hoverOffset={0}
        className="text-primary"
      />
    </footer>
  );
}
