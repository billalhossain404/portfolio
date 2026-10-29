import { ArrowUpRight } from "lucide-react";
import { navItems } from "./data";

export function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 py-5">
      <a href="#home" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 font-mono text-sm font-black text-black">
          BH.
        </span>
        <span className="text-sm font-semibold tracking-wide">
          Billal Hossain
          <span className="mt-0.5 block text-xs font-normal text-zinc-500">
            Software Engineer
          </span>
        </span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-lime-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="mailto:info.billalhossainoo1@gmail.com"
        className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-lime-300/60 hover:text-lime-300 sm:inline-flex"
      >
        Let&apos;s talk <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
