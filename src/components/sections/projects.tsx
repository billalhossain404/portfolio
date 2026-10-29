import { ArrowRight, ArrowUpRight, Github, MoveUpRight } from "lucide-react";
import { projects, profile } from "@/data/profile";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function ProjectArtwork({ project }: { project: (typeof projects)[number] }) {
  return <div className={`project-art project-art-${project.palette} relative flex h-full min-h-[270px] items-center justify-center rounded-[20px] sm:min-h-[310px]`} role="img" aria-label={`Abstract illustrative artwork for ${project.name}; not an application screenshot`}>
    <div className="project-wireframe" />
    <div className="project-mark select-none" aria-hidden="true">{project.monogram}</div>
    <span className="project-satellite absolute left-5 top-5 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-widest">{project.label}</span>
    <div className="project-satellite absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 font-mono text-xs">{project.monogram}</span>{project.name}<ArrowUpRight size={15}/></div>
    <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[.13em] opacity-60">Illustrative artwork</span>
  </div>;
}
export function Projects() {
  return <section id="work" className="border-y border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_50%,var(--background))] py-20 lg:py-28">
    <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
      <Reveal><SectionHeading number="02" eyebrow="Selected work" title="Things I've built." description="A selection of projects from my development journey. Explore the repositories to dig into the code."/></Reveal>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {projects.map((project, index) => <Reveal key={project.slug} delay={index * .08} className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12"}>
          <Card className={`group card-inset flex h-full flex-col gap-5 overflow-hidden p-4 transition-colors hover:border-[var(--muted)] sm:p-5 ${index === 2 ? "lg:flex-row-reverse lg:items-stretch" : ""}`}>
            <div className={index === 2 ? "lg:w-[52%]" : ""}><ProjectArtwork project={project}/></div>
            <div className={`flex flex-1 flex-col justify-between px-2 pb-3 pt-1 sm:px-3 ${index === 2 ? "lg:px-6 lg:py-6" : ""}`}>
              <div>
                <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]"><span>0{index+1} / Featured project</span><span className="h-2 w-2 rounded-full bg-[var(--accent)]"/></div>
                <h3 className="text-[30px] font-semibold tracking-[-.055em] sm:text-[38px]">{project.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-5">
                <span className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)]">{project.type}</span>
                <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label={`View ${project.name} on GitHub`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] underline-offset-4 transition hover:text-[var(--accent-strong)] hover:underline"><Github size={16}/> View code <MoveUpRight size={15}/></a>
              </div>
            </div>
          </Card>
        </Reveal>)}
      </div>
      <Reveal><div className="mt-8 flex flex-wrap items-center justify-between gap-4"><p className="max-w-lg text-xs leading-6 text-[var(--muted)]">More project details and real screenshots can be added as these case studies evolve.</p><a href={profile.github} target="_blank" rel="noreferrer noopener" className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">Explore all repositories <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></a></div></Reveal>
    </div>
  </section>;
}
