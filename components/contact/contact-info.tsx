"use client";

import { User, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { EMAIL, GITHUB_URL, LOCATION, NAME, PHONE } from "@/lib/constants";

export const CONTACT_INFO = [
  {
    label: "Name",
    value: NAME,
    icon: User
  },
  {
    label: "Github",
    value: "AkkalDhami",
    icon: FaGithub,
    href: GITHUB_URL
  },
  {
    label: "Email",
    value: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`
  },
  {
    label: "Phone",
    value: PHONE,
    icon: Phone,
    href: `tel:${PHONE}`
  },
  {
    label: "Location",
    value: LOCATION,
    icon: MapPin
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-xl font-normal">Contact Information</h3>
      </div>
      <div className="grid grid-cols-1 space-y-4">
        {CONTACT_INFO.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative">
            <CornerMarkers offset={7} hoverOffset={0} />
            <div className="flex items-center gap-3">
              <div className="relative">
                <item.icon className="bg-muted/20 border-border text-muted-primary size-11 border p-2" />
              </div>
              <div className="text-primary flex flex-col space-y-1">
                <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  {item.label}
                </span>
                {item.href ? (
                  <Link
                    href={item.href as Route}
                    target="_blank"
                    className="decoration-primary text-sm font-semibold underline-offset-4 hover:underline">
                    {item.value}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold">{item.value}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
