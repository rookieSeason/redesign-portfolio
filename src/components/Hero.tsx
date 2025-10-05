"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  BadgeCheck,
  Mail,
  Linkedin,
  Facebook,
  Github,
} from "lucide-react";

const NAME = "Lester John Gatpolintan";
const LOCATION = "Bacoor, Cavite, Philippines";
const TITLE = "Aspiring QA Engineer | Former Web Developer";
const RESUME_LINK = "/leg-qa-resume.pdf";

const socials = [
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lester-john-gatpolintan-119112272/",
  },
  {
    icon: <Facebook size={18} />,
    label: "Facebook",
    href: "https://www.facebook.com/Liquid.L",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/rookieSeason",
  },
];

export default function Hero() {
  function handleContact() {
    const email = "gatpolintanjohn@gmail.com";
    const subject = encodeURIComponent("Contacting You From Your Portfolio");
    const body = encodeURIComponent(
      "Hi Lester John, I’d like to get in touch with you!"
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  }

  return (
    <section className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src="/avatar.jpg"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border p-1"
        />
      </div>

      {/* Info */}
      <div className="text-center md:text-left space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          {NAME} <BadgeCheck className="inline-block text-blue-500" size={20} />
        </h1>

        <h2 className="text-sm text-muted-foreground">
          <MapPin className="inline-block me-1" size={20} />
          {LOCATION}
        </h2>

        <p className="max-w-xl ">{TITLE}</p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
          <Button asChild size="sm">
            <a href={RESUME_LINK} download>
              Download Resume
            </a>
          </Button>

          <Button variant="outline" size="sm" onClick={handleContact}>
            <Mail size={18} />
            Send Email
          </Button>

          {socials.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => window.open(social.href, "_blank")}
              className="text-muted-foreground"
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
