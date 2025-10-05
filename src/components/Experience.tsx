import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EXPERIENCES = [
  {
    role: "Aspiring QA Engineer",
    company: "Side Projects & Training",
    date: "Dec 2024 – Present",
    details: [
      "Developing a strong foundation in manual testing by creating detailed test cases, executing test plans, and documenting defects with clarity and accuracy.",
      "Utilizing JIRA for efficient defect tracking, test management, and cross-team communication to ensure smooth QA processes.",
      "Expanding knowledge in automation testing by exploring frameworks like Selenium and Cypress to improve testing efficiency and coverage.",
      "Applying prior development experience to analyze system behavior, identify potential risks early, and ensure high-quality product delivery.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "In1go Technologies, Inc.",
    date: "Sep 2023 – Nov 2024",
    details: [
      "Designed and developed scalable web applications using a microservices architecture, supporting better modularity, testability, and maintainability of features.",
      " Improved database performance by optimizing SQL queries and leveraging ORM frameworks, helping to ensure data accuracy and efficient system behavior during testing.",
      "Developed responsive and user-friendly interfaces using React, Reactstrap, and JavaScript, while proactively identifying and fixing UI-related issues across different devices and browsers.",
      "Built and maintained RESTful APIs using Node.js and Express, with a focus on clean architecture and maintainable code that supported easier debugging and validation.",
      "Performed functional testing of API endpoints and UI components during development to ensure reliability and seamless integration, often collaborating with testers to resolve bugs and edge cases early",
    ],
  },
  {
    role: "Capstone Developer",
    company: "Cavite State University",
    date: "Jun 2022 - Dec 2022",
    details: [
      "Designed and developed an intuitive and user-friendly User Interface (UI), focusing on enhancing the user experience through clear navigation, visual appeal, and seamless interactions.",
      "Applied Object-Oriented Programming (OOP) principles to create scalable, maintainable, and efficient code using PHP, ensuring high-quality software architecture and development practices.",
      "Conducted thorough user testing to identify pain points and gather actionable feedback, applying insights to continuously refine and improve the interface, ultimately enhancing user satisfaction and engagement.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-3xl mx-auto py-3 px-2 md:px-6">
      <h1 className="text-2xl font-bold mb-1">Experience</h1>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        My journey started in web development, where I built and maintained
        applications using modern technologies. Over time, I developed a strong
        interest in testing and quality assurance — ensuring that products not
        only work but provide a seamless user experience. Below are the key
        experiences that have shaped my growth as a QA professional.
      </p>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {exp.role}{" "}
              <span className="text-sm text-muted-foreground font-normal">
                • {exp.company} ({exp.date})
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
