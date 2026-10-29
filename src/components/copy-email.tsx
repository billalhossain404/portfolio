"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return <button type="button" onClick={handleCopy} aria-label={copied ? "Email copied" : "Copy email address"} aria-live="polite" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs text-[var(--muted)] transition hover:text-[var(--foreground)]">{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "Copied!" : "Copy email"}</button>;
}
