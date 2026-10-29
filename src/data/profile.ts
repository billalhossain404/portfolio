/** Single source of truth for personal information. Update here first. */
export const profile = {
  name: "Billal Hossain",
  initials: "BH",
  title: "Full Stack Software Engineer",
  university: "American International University–Bangladesh (AIUB)",
  degree: "Bachelor of Science (BSc)",
  email: "info.billalhossainoo1@gmail.com",
  github: "https://github.com/billalhossain404",
  linkedin: "https://www.linkedin.com/in/billalhossainexe/",
  location: "Bangladesh",
  availability: "Open to software engineering roles & select projects",
  heroLine: "I turn ideas into digital experiences that feel effortless.",
  about: "I'm a BSc graduate from American International University–Bangladesh (AIUB) with a strong interest in full-stack software engineering. During university, I worked on a range of hands-on projects that helped me grow from learning individual technologies to thinking about complete product experiences. I enjoy solving problems across the stack—from the first interface interaction to the data behind it—and I'm excited to contribute to thoughtful engineering teams and client projects.",
} as const;

export const skillGroups = [
  { label: "Frontend craft", number: "01", detail: "Interfaces, interactions & web experiences", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { label: "Backend engineering", number: "02", detail: "Application logic & server-side development", skills: ["C#", ".NET Core", "PHP", "Java"] },
  { label: "Data & tooling", number: "03", detail: "Persistence, querying & development environments", skills: ["MongoDB", "Oracle Database", "SQL Server Management Studio"] },
  { label: "Foundations", number: "04", detail: "Programming principles & problem-solving", skills: ["C++", "Object-Oriented Programming"] },
] as const;

/**
 * Project titles/URLs are provided by Billal. Detailed repository READMEs were
 * not accessible during generation. Do not publish unverified features or stacks.
 * Replace the short copy and the illustrative panels once repos are reviewed.
 */
export const projects = [
  {
    slug: "smart-care",
    number: "01",
    name: "Smart-Care",
    type: "Featured repository",
    description: "A selected project from my university software development journey. Explore the source code and implementation in the repository.",
    github: "https://github.com/billalhossain404/Smart-Care",
    palette: "mint",
    monogram: "SC",
    label: "Project / 01",
  },
  {
    slug: "bazardor",
    number: "02",
    name: "BazarDor",
    type: "Featured repository",
    description: "A hands-on project highlighting my interest in building useful applications and improving everyday digital experiences.",
    github: "https://github.com/billalhossain404/bazardor-dotcom",
    palette: "lilac",
    monogram: "BD",
    label: "Project / 02",
  },
  {
    slug: "fitlog",
    number: "03",
    name: "FitLog",
    type: "Featured repository",
    description: "A software project from my growing body of work, shared as an example of practical development and iterative learning.",
    github: "https://github.com/billalhossain404/fitlog",
    palette: "orange",
    monogram: "FL",
    label: "Project / 03",
  },
] as const;
