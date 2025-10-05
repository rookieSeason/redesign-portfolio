import { Badge } from "./ui/badge";

const TESTING = [
  "Manual",
  "Selenium",
  "Cypress",
  "Postman",
  "Test Case Design",
  "Bug Tracking",
];

const FRONT_END = [
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Reactstrap",
  "HTML",
  "CSS",
];

const DATABASES = ["SQL", "Sequelize ORM"];

const TOOLS = ["Github ", "Jira", "Google Sheets"];

const BACK_END = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PHP",
  "Laravel",
  "Express",
];
export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-3 px-6">
      <h1 className="text-2xl font-bold mb-1">About Me</h1>
      {/* Intro */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {" "}
        I am an aspiring QA Engineer with a background in web development. My
        experience as a developer taught me how software is built from the
        ground up, which helps me identify potential issues before they reach
        users. I’m passionate about ensuring product quality, functionality, and
        user satisfaction through thorough testing and attention to detail. I’m
        also continuously learning manual and automation testing tools to
        strengthen my QA foundation.
      </p>

      {/* Skills */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold pt-3">Tech Stacks</h1>

        {/* Testing */}
        <div>
          <h3 className="text-base font-medium pb-2">Testing & Automation</h3>
          <div className="flex flex-wrap gap-2">
            {TESTING.map((test, idx) => {
              return <Badge key={idx}>{test}</Badge>;
            })}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-base font-medium pb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {FRONT_END.map((frontEnd, idx) => {
              return <Badge key={idx}>{frontEnd}</Badge>;
            })}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-base font-medium pb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {BACK_END.map((backEnd, idx) => {
              return <Badge key={idx}>{backEnd}</Badge>;
            })}
          </div>

          {/* Database */}
          <div>
            <h3 className="text-base font-medium pb-2">Database</h3>
            <div className="flex flex-wrap gap-2">
              {DATABASES.map((database, idx) => {
                return <Badge key={idx}>{database}</Badge>;
              })}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-base font-medium pb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool, idx) => {
                return <Badge key={idx}>{tool}</Badge>;
              })}
            </div>
          </div>
        </div>

        {/* Personal note */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Beyond Work</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Outside of work, I’m passionate about design and gaming. I enjoy
            creating logos, experimenting with UI/UX mockups, and exploring
            creative ways to blend functionality with aesthetics. On the gaming
            side, I play competitively in Wild Rift reaching Grandmaster tier in
            the mid lane. These hobbies aren’t just for fun; they sharpen my
            problem-solving, attention to detail, and ability to think
            strategically under pressure. Whether I’m breaking down a complex
            game scenario or testing software, I approach both with the same
            mindset: <span className="italic">analyze, adapt, and improve</span>
            . This balance of creativity and strategy is something I carry into
            my QA work, ensuring I deliver thoughtful, high-quality results.
          </p>
        </div>
      </div>
    </section>
  );
}
