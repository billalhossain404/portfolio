import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return <section id="contact" className="border-t border-[var(--line)] pt-20 lg:pt-28">
    <div className="mx-auto max-w-[1240px] px-5 pb-20 sm:px-8 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] border border-[#658534] bg-[#cfff78] px-7 py-11 text-[#17210c] sm:px-11 sm:py-14 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="absolute -right-20 -top-28 h-[460px] w-[460px] rounded-full border-[80px] border-[#17210c]/[.065]"/>
          <p className="relative mb-6 font-mono text-xs uppercase tracking-[.22em]">/ 04 — Have something in mind?</p>
          <h2 className="relative max-w-[850px] text-[clamp(2.85rem,7.8vw,7rem)] font-semibold leading-[.98] tracking-[-.08em]">Let's make something <span className="italic">matter.</span></h2>
          <p className="relative mt-7 max-w-xl text-base leading-7 text-[#3b4c2b]">I'm looking for opportunities to grow with great teams and collaborate on meaningful projects. Have an idea or a role in mind? Let's connect.</p>
          <div className="relative mt-9 flex flex-wrap items-center gap-3"><Button asChild size="lg" className="bg-[#17210c] text-[#dbff9d] hover:bg-[#253316]"><a href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17}/></a></Button><span className="break-all text-sm font-medium sm:ml-3">{profile.email}</span></div>
        </div>
      </Reveal>
    </div>
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-5 py-9 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div><p className="text-sm font-semibold">Billal Hossain<span className="text-[var(--accent-strong)]">.</span></p><p className="mt-1 text-xs text-[var(--muted)]">Full Stack Software Engineer</p></div>
        <div className="flex flex-wrap items-center gap-4 text-[var(--muted)]"><a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer noopener" className="transition hover:text-[var(--foreground)]"><Github size={19}/></a><a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="transition hover:text-[var(--foreground)]"><Linkedin size={19}/></a><a aria-label="Email" href={`mailto:${profile.email}`} className="transition hover:text-[var(--foreground)]"><Mail size={19}/></a><CopyEmail/></div>
        <div className="text-xs text-[var(--muted)] md:text-right">© {new Date().getFullYear()} Billal Hossain. Crafted with care.</div>
      </div>
    </footer>
  </section>;
}
