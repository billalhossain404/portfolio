import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-3 border-t border-white/10 py-7 text-xs text-zinc-500 sm:flex-row sm:items-center">
      <a href="#home" className="font-medium text-zinc-300">
        Billal Hossain<span className="text-lime-300">.</span>
      </a>
      <p>Designed &amp; built with care.</p>
      <a
        href="#home"
        className="inline-flex items-center gap-1 transition hover:text-lime-300"
      >
        Back to top <ArrowUpRight size={13} />
      </a>
    </footer>
  );
}
