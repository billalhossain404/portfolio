
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GraduationCap,
  HeartPulse,
  Layers3,
  Mail,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
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

const projects = [
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

export default function Home() {
  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#08090b] text-zinc-100 selection:bg-lime-300 selection:text-black"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-300/[0.08] blur-[120px]" />
        <div className="absolute top-[45rem] -left-40 h-80 w-80 rounded-full bg-emerald-400/[0.06] blur-[100px]" />
        <div className="absolute right-0 top-[85rem] h-96 w-96 rounded-full bg-sky-400/[0.05] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Navigation */}
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 font-mono text-sm font-black text-black">
              BH.
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Billal Hossain
              <span className="mt-0.5 block text-xs font-normal text-zinc-500">
                Software Engineer
              </span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-lime-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:info.billalhossainoo1@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-lime-300/60 hover:text-lime-300 sm:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-3.5 py-2 text-xs font-medium text-lime-200">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              Open to software engineering opportunities
            </div>

            <p className="mb-4 font-mono text-sm tracking-wide text-zinc-400">
              HELLO, WORLD! I&apos;M BILLAL HOSSAIN.
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              I build digital
              <br />
              experiences that
              <br />
              <span className="text-lime-300">make an impact.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Full Stack Software Engineer and AIUB graduate. I enjoy turning
              ideas into practical software through thoughtful interfaces,
              reliable application logic, and continuous learning.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-lime-200"
              >
                Explore my work <ArrowDownRight size={17} />
              </a>

              <a
                href="mailto:info.billalhossainoo1@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition hover:border-white/40 hover:bg-white/[0.04]"
              >
                <Mail size={16} /> Get in touch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <a
                href="https://github.com/billalhossain404"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="font-medium text-zinc-300">GitHub</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href="https://www.linkedin.com/in/billalhossainexe/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="font-medium text-zinc-300">LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Developer card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-lime-300/[0.06] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101114]/95 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  developer.ts
                </span>
                <Code2 size={16} className="text-lime-300" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-xl font-bold text-lime-300">
                    BH
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Billal Hossain</h2>
                    <p className="mt-1 text-sm text-zinc-500">
                      Full Stack Software Engineer
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/[0.07] bg-black/30 p-4 font-mono text-xs leading-7 sm:p-5 sm:text-sm">
                  <p className="text-zinc-500">
                    <span className="text-purple-300">const</span>{" "}
                    <span className="text-sky-200">developer</span> = {"{"}
                  </p>
                  <p className="pl-4 text-zinc-300">
                    name: <span className="text-emerald-300">&quot;Billal Hossain&quot;</span>,
                  </p>
                  <p className="pl-4 text-zinc-300">
                    education: <span className="text-emerald-300">&quot;AIUB&quot;</span>,
                  </p>
                  <p className="pl-4 text-zinc-300">
                    role: <span className="text-emerald-300">&quot;Full Stack Engineer&quot;</span>,
                  </p>
                  <p className="pl-4 text-zinc-300">
                    mindset: <span className="text-emerald-300">&quot;Always learning&quot;</span>,
                  </p>
                  <p className="pl-4 text-zinc-300">
                    build: <span className="text-emerald-300">&quot;Ideas into software&quot;</span>
                  </p>
                  <p className="text-zinc-500">{"};"}</p>
                  <p className="mt-3 text-lime-300">
                    <span className="text-purple-300">export default</span>{" "}
                    developer;
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["Frontend", "Backend", "Databases"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-3 text-center text-xs text-zinc-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="text-xs text-zinc-500">
                    Built with curiosity.
                  </span>
                  <Sparkles size={17} className="text-lime-300" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#151619] px-4 py-3 shadow-xl sm:block">
              <p className="text-xs text-zinc-500">Current focus</p>
              <p className="mt-1 text-sm font-medium text-lime-300">
                Building & learning
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-10 border-t border-white/10 py-20 sm:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime-300">
                01 / ABOUT ME
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Curious mind.
                <br />
                <span className="text-zinc-500">Builder&apos;s mindset.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-300">
                I&apos;m a Computer Science and software development enthusiast
                who has completed my BSc at American International
                University-Bangladesh (AIUB). During my university journey, I
                worked on different software projects that helped me explore
                programming, application development, and problem-solving.
              </p>
              <p className="mt-5 leading-8 text-zinc-500">
                As an early-career engineer, I&apos;m focused on strengthening my
                engineering fundamentals, writing maintainable code, and
                creating useful digital experiences. I&apos;m excited to
                collaborate with teams, contribute to meaningful products, and
                keep growing through real-world challenges.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <GraduationCap className="mb-4 text-lime-300" size={22} />
                  <p className="font-semibold">AIUB Graduate</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Bachelor&apos;s degree completed
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <Sparkles className="mb-4 text-lime-300" size={22} />
                  <p className="font-semibold">Project-driven learning</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Learning by building and improving software
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-10 border-t border-white/10 py-20 sm:py-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime-300">
                02 / TOOLKIT
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Technologies I work with.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              A growing toolkit across programming languages, web development,
              application logic, and data management.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-lime-300/30 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl border border-lime-300/20 bg-lime-300/[0.07] p-2.5">
                      <Icon size={20} className="text-lime-300" />
                    </div>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-10 border-t border-white/10 py-20 sm:py-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime-300">
                03 / SELECTED WORK
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Things I&apos;ve built.
              </h2>
            </div>
            <a
              href="https://github.com/billalhossain404"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-300"
            >
              Explore all repositories <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101114] transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div
                    className={`relative flex min-h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
                  >
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-sm transition duration-300 group-hover:scale-110">
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                    <span className="absolute left-5 top-5 font-mono text-xs text-zinc-400">
                      PROJECT / {project.number}
                    </span>
                    <span className="absolute bottom-5 right-5 font-mono text-xs text-white/50">
                      {project.repo}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-lime-300">
                      {project.tag}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-zinc-500">
                      {project.description}
                    </p>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-zinc-300 transition hover:text-lime-300"
                    >
                      View GitHub repository
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-6 text-zinc-600">
            Project summaries are introductory. Update them with verified
            features, technology stacks, screenshots, and live demos after
            reviewing each repository.
          </p>
        </section>

        {/* Education / Journey */}
        <section className="border-t border-white/10 py-20 sm:py-24">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime-300">
                04 / MY JOURNEY
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built on learning.
                <br />
                <span className="text-zinc-500">Driven by curiosity.</span>
              </h2>
            </div>

            <div className="relative border-l border-white/10 pl-7">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-lime-300 ring-4 ring-lime-300/10" />
              <p className="font-mono text-xs tracking-wider text-zinc-500">
                EDUCATION
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                American International University-Bangladesh
              </h3>
              <p className="mt-2 text-sm text-lime-300">
                BSc Graduate · AIUB
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                My university years gave me the opportunity to strengthen my
                programming foundations and explore software development
                through hands-on projects.
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="font-mono text-xs tracking-wider text-zinc-500">
                  DEVELOPMENT
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Academic & Personal Projects
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                  I continue to build on that foundation by exploring modern
                  development tools, improving my problem-solving skills, and
                  creating software projects that demonstrate what I can do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-10 border-t border-white/10 py-20 sm:py-28"
        >
          <div className="relative overflow-hidden rounded-3xl border border-lime-300/20 bg-[#11140e] p-7 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-lime-300/[0.10] blur-[90px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-4 font-mono text-xs tracking-[0.2em] text-lime-300">
                  05 / LET&apos;S CONNECT
                </p>
                <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Have an idea?
                  <br />
                  <span className="text-lime-300">Let&apos;s build it.</span>
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                  I&apos;m open to software engineering opportunities,
                  collaborations, and freelance projects. Let&apos;s talk about
                  what we can create together.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4">
                <a
                  href="mailto:info.billalhossainoo1@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-lime-200"
                >
                  <Mail size={17} /> Email me <ArrowRight size={17} />
                </a>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                  <a
                    href="https://github.com/billalhossain404"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <Code2 size={16} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/billalhossainexe/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <ArrowUpRight size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-3 border-t border-white/10 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <a href="#home" className="font-medium text-zinc-300">
            Billal Hossain<span className="text-lime-300">.</span>
          </a>
          <p>Designed & built with care.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 transition hover:text-lime-300"
          >
            Back to top <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
    </main>
  );
}
