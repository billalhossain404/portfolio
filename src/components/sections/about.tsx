import { ArrowUpRight, GraduationCap, Lightbulb, Network, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function About() {
  return <section id="about" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
    <Reveal><SectionHeading number="01" eyebrow="About me" title="More than just code." description="I care about the little decisions that make software easier to use, maintain, and grow."/></Reveal>
    <div className="grid gap-4 md:grid-cols-12">
      <Reveal className="md:col-span-7"><Card className="card-inset relative h-full min-h-[325px] overflow-hidden p-7 sm:p-9">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-raised)] text-[var(--accent-strong)]"><Terminal size={23}/></div>
        <h3 className="mb-5 max-w-lg text-2xl font-semibold leading-tight tracking-[-.04em] sm:text-3xl">Curious by nature. <span className="text-[var(--muted)]">Intentional by design.</span></h3>
        <p className="max-w-[600px] text-sm leading-8 text-[var(--muted)] sm:text-base">{profile.about}</p>
        <span aria-hidden="true" className="absolute -bottom-16 -right-2 select-none font-mono text-[160px] font-bold leading-none tracking-[-.14em] text-[var(--foreground)] opacity-[.025]">BH</span>
      </Card></Reveal>
      <Reveal className="md:col-span-5" delay={.08}><Card className="card-inset flex h-full min-h-[325px] flex-col justify-between overflow-hidden p-7 sm:p-9">
        <div className="flex items-start justify-between"><div className="feature-icon text-[var(--accent-strong)]"><GraduationCap size={22}/></div><ArrowUpRight size={17} className="text-[var(--muted)]"/></div>
        <div><p className="mb-3 font-mono text-[10px] uppercase tracking-[.22em] text-[var(--accent-strong)]">Education</p><h3 className="mb-4 text-3xl font-semibold tracking-[-.055em]">A foundation for<br/>what's next.</h3><div className="border-t border-[var(--line)] pt-5"><p className="text-base font-medium">{profile.university}</p><p className="mt-2 text-sm text-[var(--muted)]">{profile.degree}</p></div></div>
      </Card></Reveal>
      <Reveal className="md:col-span-4" delay={.05}><Card className="card-inset flex min-h-[215px] flex-col justify-between p-7"><div className="feature-icon text-[var(--accent-strong)]"><Lightbulb size={21}/></div><div><p className="mt-8 text-xl font-semibold tracking-tight">Product thinking</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Understand the problem before choosing the tools.</p></div></Card></Reveal>
      <Reveal className="md:col-span-4" delay={.12}><Card className="card-inset flex min-h-[215px] flex-col justify-between p-7"><div className="feature-icon text-[var(--accent-strong)]"><Network size={21}/></div><div><p className="mt-8 text-xl font-semibold tracking-tight">Full-stack mindset</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Connect interface details with application and data logic.</p></div></Card></Reveal>
      <Reveal className="md:col-span-4" delay={.2}><Card className="card-inset flex min-h-[215px] flex-col justify-between border-[color-mix(in_srgb,var(--accent)_34%,var(--line))] bg-[var(--accent)] p-7 text-[#17230a]"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17230a]/10"><ArrowUpRight size={21}/></div><div><p className="mt-8 text-xl font-semibold tracking-tight">Ready to collaborate</p><p className="mt-2 text-sm leading-6 text-[#384e23]">New opportunities, meaningful challenges, and good teams.</p></div></Card></Reveal>
    </div>
  </section>;
}
