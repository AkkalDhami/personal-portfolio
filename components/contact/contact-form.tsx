"use client";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { PrimaryButton } from "../ui/primary-button";
import { CornerMarkers } from "../ui/corner-markers";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name) {
      toast.add({
        description: "There was a problem with your request.",
        title: "Please enter your name.",
        type: "error"
      });
      return;
    } else if (!formData.email) {
      toast.add({
        description: "There was a problem with your request.",
        title: "Please enter your email.",
        type: "error"
      });
      return;
    } else if (!formData.message) {
      toast.add({
        description: "There was a problem with your request.",
        title: "Please enter your message.",
        type: "error"
      });
      return;
    }

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    toast.add({
      description: "Your changes have been saved.",
      title: "Success!",
      type: "success"
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
        />
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
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-primary">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          className="resize-none"
          placeholder="Briefly describe your project or inquiry..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <PrimaryButton type="submit" className="w-full cursor-pointer py-2">
        <div className="flex items-center gap-2">
          <Send className="mr-2 h-4 w-4" />
          Send Message
          <CornerMarkers offset={7} hoverOffset={6} key={"primary-button"} />
        </div>
      </PrimaryButton>
    </form>
  );
}
