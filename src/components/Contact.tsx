"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Github } from "lucide-react";

const contacts = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/lester-john-gatpolintan-119112272/",
    label: "LinkedIn",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/Liquid.L",
    label: "Facebook",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/rookieSeason",
    label: "GitHub",
  },
];

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-2 md:px-6 py-6">
      <h1 className="text-xl md:text-2xl font-bold mb-2">Get in touch</h1>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Text */}
        <p className="text-muted-foreground text-sm md:flex-1">
          Feel free to reach out! Whether it’s for professional inquiries,
          potential collaborations, project ideas, or simply to say hi, I’d be
          delighted to hear from you. I value connecting with like-minded
          people, sharing knowledge, and exploring opportunities to create
          something meaningful together.
        </p>

        {/* Social buttons */}
        <div className="flex gap-3 text-muted-foreground">
          {contacts.map((contact, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              size="sm"
              className="p-2"
            >
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {contact.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
