import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

export function Hero() {
  return (
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

      <div className="relative mx-auto w-full max-w-lg">
        <div
          aria-hidden="true"
          className="absolute -inset-5 rounded-[2rem] bg-lime-300/[0.08] blur-3xl"
        />

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101114] shadow-2xl shadow-black/40">
          <Image
            src="/images/billal.png"
            alt="Billal Hossain — Full Stack Software Engineer"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/40 via-transparent to-transparent" />
        </div>

        <div className="absolute -bottom-4 -right-2 rounded-2xl border border-lime-300/20 bg-[#151619] px-4 py-3 shadow-xl sm:-right-4">
          <p className="text-xs text-zinc-500">Software Engineer</p>
          <p className="mt-1 text-sm font-medium text-lime-300">
            Billal Hossain
          </p>
        </div>
      </div>
    </section>
  );
}
