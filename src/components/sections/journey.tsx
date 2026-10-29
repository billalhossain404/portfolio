export function Journey() {
  return (
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
          <p className="mt-2 text-sm text-lime-300">BSc Graduate · AIUB</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            My university years gave me the opportunity to strengthen my
            programming foundations and explore software development through
            hands-on projects.
          </p>

          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="font-mono text-xs tracking-wider text-zinc-500">
              DEVELOPMENT
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Academic &amp; Personal Projects
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
  );
}
