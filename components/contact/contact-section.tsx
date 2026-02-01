"use client";

import { motion } from "motion/react";
import { SocialLinks } from "@/components/home/social-link";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

import { ContactCta } from "./contact-cta";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>Let&apos;s Connect</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          Ready to start your next project? Reach out and let&apos;s create
          something amazing together.
        </SubHeading>
      </motion.div>

      <div className="space-y-12">
        <SocialLinks />
        <ContactCta />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
