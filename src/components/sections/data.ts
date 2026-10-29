import {
  Activity,
  Braces,
  Code2,
  Database,
  HeartPulse,
  Layers3,
  ShoppingBasket,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C++", "Java", "C#", "PHP", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    icon: Layers3,
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend & Core",
    icon: Braces,
    items: [".NET Core", "PHP", "OOP"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "Oracle", "SQL Server (SSMS)"],
  },
];

export const projects = [
  {
    number: "01",
    name: "Smart Care",
    repo: "Smart-Care",
    description:
      "A care-oriented software project from my development journey. Explore the repository to learn more about its implementation.",
    href: "https://github.com/billalhossain404/Smart-Care",
    icon: HeartPulse,
    accent: "from-emerald-400/20 via-teal-400/5 to-transparent",
    tag: "CARE-FOCUSED PROJECT",
  },
  {
    number: "02",
    name: "BazarDor",
    repo: "bazardor-dotcom",
    description:
      "A market-oriented project built around a practical, everyday digital problem. Explore the source code and project structure.",
    href: "https://github.com/billalhossain404/bazardor-dotcom",
    icon: ShoppingBasket,
    accent: "from-amber-400/20 via-orange-400/5 to-transparent",
    tag: "WEB APPLICATION",
  },
  {
    number: "03",
    name: "FitLog",
    repo: "fitlog",
    description:
      "A fitness-themed software project showcasing another part of my development journey. Visit GitHub for the implementation.",
    href: "https://github.com/billalhossain404/fitlog",
    icon: Activity,
    accent: "from-sky-400/20 via-indigo-400/5 to-transparent",
    tag: "FITNESS PROJECT",
  },
];
