import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("rounded-[28px] border border-[var(--line)] bg-[var(--surface)]", className)} {...props} />;
}
