import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-[var(--background)] px-5 text-center"><span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-strong)]">404 / Page not found</span><h1 className="text-6xl font-bold tracking-[-.08em] sm:text-8xl">Lost in the stack.</h1><p className="max-w-sm text-sm leading-7 text-[var(--muted)]">Looks like this route doesn&apos;t exist. Let&apos;s get you back to something worth exploring.</p><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#152009]"><ArrowLeft size={16}/> Back to home</Link></main>;
}
