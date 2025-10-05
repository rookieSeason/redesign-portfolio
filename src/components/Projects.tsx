import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "End-to-End Testing E-Commerce Website",
    role: "QA Side Project",
    date: "May 2025",
    description:
      "A project containing end-to-end (E2E) tests for an e-commerce web application using Cypress. These tests cover critical user flows including login, product browsing, cart management, and checkout.",
    tools: ["Cypress", "Google Sheets", "Test Case Design"],
    links: [
      {
        icon: <Github className="w-4 h-4" />,
        label: "Source Code",
        href: "https://github.com/rookieSeason/login-automation-cypress.git",
      },
    ],
  },
  {
    title: " Automation Functional Web Testing",
    role: "Self Learning QA Project",
    date: "April 2025",
    description:
      "A functional testing project focused on validating key web application features such as login, form validation, and user navigation. Utilized Selenium to ensure consistent behavior across test cases and improve overall testing efficiency.",
    tools: [
      "Selenium",
      "Test Case Design",
      "Google Sheets",
      "MS Edge WebDriver",
    ],
    links: [
      {
        icon: <Github className="w-4 h-4" />,
        label: "Source Code",
        href: "https://github.com/rookieSeason/login-automation-selenium.git",
      },
    ],
  },
  {
    title: "Wild Rift Guild Website",
    role: "Static Web Page",
    date: "March 2025",
    description:
      "A game-inspired static web page designed for Reges Riftis, a community-driven guild that values competitiveness, inclusivity, and fun. The website blends modern UI principles with a gaming aesthetic, featuring dynamic visuals, interactive elements, and smooth animations to capture the spirit of the guild.",
    tools: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    links: [
      {
        icon: <Globe className="w-4 h-4" />,
        label: "Live Demo",
        href: "https://reges-riftis.vercel.app",
      },
    ],
  },
  {
    title: "Online Relocation MIS",
    role: "Associate Web Developer",
    date: "Jun 2022 - Dec 2022",
    description:
      "Developed a web-based capstone project focused on usability and functionality. Took charge of key modules such as user management and reporting, performing debugging, testing, and validation to ensure accurate data handling and a smooth user experience.",

    tools: ["PHP", "MySQL", "Bootstrap"],
    links: [
      {
        icon: <Github className="w-4 h-4" />,
        label: "Source Code",
        href: "https://github.com/rookieSeason/Online-Relocation-MIS.git",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto py-3 px-2 md:px-6">
      <h1 className="text-2xl font-bold mb-1">Projects</h1>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Here are some of the projects I’ve worked on that highlight my
        transition from web development to quality assurance. Each project
        reflects my technical foundation, analytical mindset, and dedication to
        delivering reliable and user-friendly software.
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        {PROJECTS.map((project, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {project.title}{" "}
              <span className="text-sm text-muted-foreground font-normal">
                • {project.role} ({project.date})
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-3">
                {project.description}
              </p>

              {/* Tools & Links in one row */}
              <div className="flex flex-wrap items-center justify-between mb-3">
                {/* Tools */}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.tools.map((tool, i) => (
                    <Badge key={i}>{tool}</Badge>
                  ))}
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                    {project.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          {link.icon}
                          <span>{link.label}</span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
