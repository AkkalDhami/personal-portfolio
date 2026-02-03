"use client";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { Send, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { contactFormSchema, ContactFormValues } from "@/validators/contact";
import z from "zod";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string[]>>
  >({});
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      toast.add({
        title: "Validation Error",
        description: "Please check the form for errors.",
        type: "error"
      });
      return;
    }

    startTransition(async () => {
      const device = navigator.userAgent || "Unknown";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            device
          })
        });

        const data = await response.json();

        if (data.success) {
          toast.add({
            title: "Success!",
            description: data.message || "Your message has been sent.",
            type: "success"
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          if (data.error && typeof data.error === "object") {
            setErrors(data.error);
          }
          toast.add({
            title: "Error",
            description:
              typeof data.error === "string"
                ? data.error
                : "Failed to send message.",
            type: "error"
          });
        }
      } catch {
        toast.add({
          title: "Error",
          description: "Something went wrong. Please try again.",
          type: "error"
        });
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field when user starts typing
    if (errors[name as keyof ContactFormValues]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ContactFormValues];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <h3 className="text-xl font-normal">Send me a message</h3>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="text-muted-primary">
          Your Name *
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-primary">
          Your Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-primary">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          className="max-h-[100px] resize-none"
          placeholder="Briefly describe your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          disabled={isPending}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message[0]}</p>
        )}
      </div>

      <PrimaryButton
        type="submit"
        className="w-full cursor-pointer py-2"
        disabled={isPending}>
        <div className="flex items-center justify-center gap-2">
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {isPending ? "Sending..." : "Send Message"}
          <CornerMarkers offset={7} hoverOffset={6} key={"primary-button"} />
        </div>
      </PrimaryButton>
    </form>
  );
}
