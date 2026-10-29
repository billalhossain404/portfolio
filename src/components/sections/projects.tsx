import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export function Projects() {
  return (
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
        Project summaries are introductory. Update them with verified features,
        technology stacks, screenshots, and live demos after reviewing each
        repository.
      </p>
    </section>
  );
}
