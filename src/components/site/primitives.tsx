import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      <span className="inline-block h-px w-8 bg-primary/60" aria-hidden />
      {children}
    </p>
  );
}

export function SectionShell({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 lg:py-40", className)}>
      {children}
    </section>
  );
}

type LinkProps = Omit<ComponentProps<typeof Link>, "children">;

export function CtaLink({
  children,
  variant = "primary",
  className,
  ...props
}: LinkProps & { variant?: "primary" | "ghost"; children: ReactNode }) {
  return (
    <Link
      {...props}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-sm px-6 py-3.5 font-display text-sm font-semibold tracking-tight transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:brightness-110 hover:glow-accent"
          : "border border-border text-foreground hover:border-primary/60 hover:bg-surface-2",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border border-dashed border-border-strong bg-surface/60 px-4 py-3 font-mono text-[11px] leading-relaxed tracking-wide text-muted-foreground">
      {children}
    </p>
  );
}
