"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { profile } from "@/data/profile";
const links = [{ href: "#about", label: "About" }, { href: "#work", label: "Work" }, { href: "#stack", label: "Stack" }, { href: "#contact", label: "Contact" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav)] backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
      <Link href="#home" aria-label="Billal Hossain – Home" className="group flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[var(--accent)] text-lg font-black tracking-[-0.08em] text-[#10150a] transition-transform group-hover:-rotate-6">b.</span>
        <span className="hidden text-sm font-semibold tracking-tight text-[var(--foreground)] sm:block">billal<span className="text-[var(--muted)]">.dev</span></span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
        {links.map((item) => <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeSwitch />
        <Button asChild size="sm" className="hidden sm:inline-flex"><a href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a></Button>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
    </div>
    {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-[var(--line)] bg-[var(--background)] px-5 py-4 md:hidden">{links.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-[var(--line)] py-3 text-sm text-[var(--foreground)] last:border-b-0">{item.label}</Link>)}</nav>}
  </header>;
}
