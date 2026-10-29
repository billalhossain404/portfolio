import { Boxes, Braces, Code2, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
const icons = [<Code2 key="code" size={22}/>, <Braces key="braces" size={22}/>, <Database key="data" size={22}/>, <Boxes key="boxes" size={22}/>];
export function Stack() {
  return <section id="stack" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
    <Reveal><SectionHeading number="03" eyebrow="Technical expertise" title="Tools for the job." description="A versatile foundation built through academic learning, experimentation, and project development."/></Reveal>
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group, index) => <Reveal key={group.number} delay={index*.07}><Card className="card-inset group flex h-full min-h-[252px] flex-col justify-between p-7 transition-colors hover:border-[var(--muted)] sm:p-8">
        <div className="flex items-start justify-between"><div className="feature-icon text-[var(--accent-strong)]">{icons[index]}</div><span className="font-mono text-xs text-[var(--muted)]">/ {group.number}</span></div>
        <div className="pt-9"><h3 className="text-xl font-semibold tracking-[-.03em]">{group.label}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{group.detail}</p>
          <div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-full border border-[var(--line)] bg-[var(--surface-raised)] px-3 py-1.5 text-xs text-[var(--foreground)] transition group-hover:border-[var(--muted)]">{skill}</span>)}</div>
        </div>
      </Card></Reveal>)}
    </div>
    <Reveal><div className="mt-5 flex items-center gap-3 rounded-[22px] border border-[var(--line)] px-5 py-5 text-sm text-[var(--muted)] sm:px-7"><Wrench size={18} className="shrink-0 text-[var(--accent-strong)]"/><p>My favorite stack is the one that solves the problem well. The fundamentals always come first.</p></div></Reveal>
  </section>;
}
