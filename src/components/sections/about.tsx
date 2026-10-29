import { GraduationCap, Sparkles } from "lucide-react";

export function About() {
  return (
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
            I&apos;m a software development enthusiast who has completed my BSc
            at American International University-Bangladesh (AIUB). During my
            university journey, I worked on different software projects that
            helped me explore programming, application development, and
            problem-solving.
          </p>
          <p className="mt-5 leading-8 text-zinc-500">
            As an early-career engineer, I&apos;m focused on strengthening my
            engineering fundamentals, writing maintainable code, and creating
            useful digital experiences. I&apos;m excited to collaborate with
            teams, contribute to meaningful products, and keep growing through
            real-world challenges.
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
  );
}
