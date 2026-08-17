import type { ReactNode } from "react";

import { Eyebrow } from "@/components/site/primitives";
import { Reveal, WordReveal } from "@/components/site/motion-primitives";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[130px]"
        aria-hidden
      />
      <div className="container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-7 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.94]">
          <WordReveal text={title} delay={0.05} />
        </h1>
        {lead ? (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={0.32}>{children}</Reveal> : null}
      </div>
    </header>
  );
}
