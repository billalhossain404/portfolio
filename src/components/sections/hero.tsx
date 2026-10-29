import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Code2, Layers2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

function DeveloperScene() {
  return <div aria-label="Decorative developer workstation illustration" className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-7">
    <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-40" />
    <div aria-hidden="true" className="glow-halo absolute inset-[-15%]" />
    <div className="relative z-10 flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--background)]/80 px-3 py-2 font-mono text-[10px] tracking-widest text-[var(--muted)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"/> DEV SPACE / 001</span>
      <span className="rounded-xl border border-[var(--line)] bg-[var(--background)]/70 p-2 text-[var(--accent-strong)]"><Code2 size={19}/></span>
    </div>
    <div aria-hidden="true" className="relative z-0 mx-auto flex h-[225px] w-full items-center justify-center">
      <div className="orbit-ring absolute h-[230px] w-[310px] rounded-[50%]" />
      <div className="orbit-ring-two absolute h-[175px] w-[290px] rounded-[50%]" />
      <div className="orb-core float-slow relative flex h-[147px] w-[147px] items-center justify-center rounded-full text-[48px] font-black tracking-[-.13em] text-[#203413]">b<span className="self-end pb-10 text-[var(--accent)]">.</span></div>
      <span className="absolute right-[8%] top-[17%] rounded-xl border border-[#415f2a] bg-[#172218] p-3 text-[#d0ff7c] shadow-lg"><Layers2 size={21} /></span>
      <span className="absolute bottom-[14%] left-[6%] rounded-xl border border-[#334932] bg-[#172218] p-3 text-[#d0ff7c] shadow-lg"><Sparkles size={20}/></span>
      <span className="absolute bottom-[15%] right-[6%] rounded-full bg-[#d0ff7c] px-3 py-1.5 font-mono text-[10px] font-bold text-[#1f2915]">EST. AIUB</span>
    </div>
    <div className="terminal-glow relative z-10 overflow-hidden rounded-[20px] border border-[#354039] bg-[#0b1110] text-[#d1dfd5]">
      <div className="flex items-center justify-between border-b border-[#26342e] px-4 py-3">
        <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#f38e80]"/><span className="h-2.5 w-2.5 rounded-full bg-[#e7c66a]"/><span className="h-2.5 w-2.5 rounded-full bg-[#8dcf90]"/></div>
        <span className="font-mono text-[10px] text-[#788d7e]">billal.ts</span>
        <span className="font-mono text-[10px] text-[#788d7e]">TSX</span>
      </div>
      <div className="space-y-1 px-4 py-5 font-mono text-[11px] leading-[1.85] sm:text-xs">
        <p><span className="mr-4 text-[#607568]">01</span><span className="text-[#8abaff]">const</span> <span className="text-[#f3e1a2]">developer</span> = {'{'}</p>
        <p><span className="mr-4 text-[#607568]">02</span>  name: <span className="text-[#d0ff7c]">"Billal Hossain"</span>,</p>
        <p><span className="mr-4 text-[#607568]">03</span>  focus: <span className="text-[#d0ff7c]">"Full Stack"</span>,</p>
        <p><span className="mr-4 text-[#607568]">04</span>  mindset: <span className="text-[#d0ff7c]">"Build & iterate"</span>,</p>
        <p><span className="mr-4 text-[#607568]">05</span>{'}'};</p>
      </div>
    </div>
    <div className="relative mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.15em] text-[var(--muted)]"><span>Think / build / improve</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"/> Online</span></div>
  </div>;
}

export function Hero() {
  return <section id="home" className="relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
    <div className="grid-field pointer-events-none absolute inset-0 opacity-40"/>
    <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-16">
      <Reveal>
        <Badge className="mb-7"><span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"/> {profile.availability}</Badge>
        <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[.15em] text-[var(--muted)]"><span className="h-px w-7 bg-[var(--accent)]"/> HELLO, I'M BILLAL</div>
        <h1 className="max-w-[730px] text-[clamp(2.95rem,7.4vw,7rem)] font-semibold leading-[.99] tracking-[-.083em]">Engineering <span className="text-gradient">ideas</span> into<br className="hidden sm:block"/> experiences<span className="text-[var(--accent)]">.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-[1.8] text-[var(--muted)] sm:text-lg">Full Stack Software Engineer and AIUB graduate. I enjoy bringing ambitious ideas to life through purposeful design, clean code, and practical problem-solving.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#work">Explore my work <ArrowUpRight size={17}/></a></Button>
          <Button asChild size="lg" variant="outline"><a href={`mailto:${profile.email}`}>Get in touch <ChevronRight size={17}/></a></Button>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[var(--line)] pt-7">
          <div><div className="text-xl font-semibold tracking-tight">AIUB</div><div className="mt-1 text-[11px] text-[var(--muted)]">BSc graduate</div></div>
          <span className="h-8 w-px bg-[var(--line)]" aria-hidden="true"/>
          <div><div className="text-xl font-semibold tracking-tight">03</div><div className="mt-1 text-[11px] text-[var(--muted)]">Featured repositories</div></div>
          <span className="h-8 w-px bg-[var(--line)]" aria-hidden="true"/>
          <div><div className="flex items-center gap-1 text-xl font-semibold tracking-tight">Build <Check size={17} className="text-[var(--accent-strong)]"/></div><div className="mt-1 text-[11px] text-[var(--muted)]">Across the stack</div></div>
        </div>
      </Reveal>
      <Reveal delay={0.16}><DeveloperScene /></Reveal>
    </div>
    <div className="relative mx-auto mt-12 flex max-w-[1240px] items-center justify-between px-5 text-[10px] uppercase tracking-[.24em] text-[var(--muted)] sm:px-8"><span>Scroll to discover</span><ArrowDownRight size={16} /></div>
  </section>;
}
