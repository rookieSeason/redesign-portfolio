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
    window.location.href =
      "mailto:gatpolintanjohn@gmail.com?subject=Contacting%20You%20From%20Your%20Portfolio&body=Hi%20Lester%20John,%20I’d%20like%20to%20get%20in%20touch%20with%20you!";
  }
  return (
    <section className="max-w-3xl mx-auto px-2 md:px-6 py-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
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
      <div className="text-center md:text-left space-y-1 md:space-y-2 flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-0.5 md:gap-1">
          {NAME}
          <BadgeCheck className="text-blue-500" size={18} />
        </h1>

        <h2 className="text-sm sm:text-base text-muted-foreground flex items-center justify-center md:justify-start gap-1">
          <MapPin size={18} />
          {LOCATION}
        </h2>

        <p className="max-w-xl mx-auto md:mx-0">{TITLE}</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
          {/* Main buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full sm:w-auto">
            <Button asChild size="sm">
              <a href={RESUME_LINK} download>
                Download Resume
              </a>
            </Button>

            <Button variant="outline" size="sm" onClick={handleContact}>
              <Mail size={18} />
              Send Email
            </Button>
          </div>

          {/* Social icons */}
          {/* <div className="flex justify-center md:justify-start gap-2 w-full sm:w-auto">
            {socials.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => window.open(social.href, "_blank")}
                className="text-muted-foreground flex items-center gap-1"
              >
                {social.icon}
                <span className="block md:hidden text-xs">{social.label}</span>
              </Button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
