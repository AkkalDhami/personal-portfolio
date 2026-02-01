import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { EMAIL } from "@/lib/constants";

export function ContactCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="relative text-center">
      <div className="border p-8 md:p-12">
        <Heading className="mb-4 text-xl font-bold md:text-2xl">
          Ready to Start Your Project?
        </Heading>
        <SubHeading
          as="p"
          className="text-muted-foreground mx-auto max-w-md text-sm sm:text-lg">
          Let&apos;s schedule a call to discuss your ideas and how we can bring
          them to life.
        </SubHeading>
        <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton as="a" href={`mailto:${EMAIL}`} className="py-3">
            Send Email
            <CornerMarkers offset={7} hoverOffset={7} key={"primary-button"} />
          </PrimaryButton>
        </div>
      </div>
      <CornerMarkers offset={7} hoverOffset={0} className="text-primary" />
    </motion.div>
  );
}
