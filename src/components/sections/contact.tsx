import { ArrowRight, ArrowUpRight, Code2, Mail } from "lucide-react";

export function Contact() {
  return (
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
              collaborations, and freelance projects. Let&apos;s talk about what
              we can create together.
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
  );
}
