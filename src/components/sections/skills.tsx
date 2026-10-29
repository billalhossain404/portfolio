import { skillGroups } from "./data";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-10 border-t border-white/10 py-20 sm:py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-lime-300">
            02 / TOOLKIT
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-500">
          A growing toolkit across programming languages, web development,
          application logic, and data management.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-lime-300/30 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl border border-lime-300/20 bg-lime-300/[0.07] p-2.5">
                  <Icon size={20} className="text-lime-300" />
                </div>
                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
