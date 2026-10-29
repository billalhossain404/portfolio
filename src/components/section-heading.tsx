export function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]"><span className="mr-3 text-[var(--muted)]">/{number}</span>{eyebrow}</p>
      <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl md:text-[58px]">{title}</h2>
    </div>
    {description && <p className="max-w-sm text-sm leading-7 text-[var(--muted)] md:pb-1">{description}</p>}
  </div>;
}
