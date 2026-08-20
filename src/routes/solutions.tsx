import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { services, solutions } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Visionex Media Services" },
      {
        name: "description",
        content:
          "Cross-disciplinary solution tracks combining Visionex's engineering services around specific business outcomes.",
      },
    ],
  }),
  component: SolutionsPage,
});

function serviceTitles(slugs: string[]) {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug)?.title)
    .filter((t): t is string => Boolean(t));
}

function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Outcomes, engineered from multiple disciplines."
        lead="Most engagements don't fit inside a single service line. These are the combinations we run most — software, cloud, security and product engineering working as one delivery track."
      />

      <div className="container-x pb-28">
        <div className="grid gap-8 border-t border-border pt-16 lg:grid-cols-2">
          {solutions.map((sol, i) => (
            <Reveal key={sol.name} delay={Math.min(i * 0.05, 0.24)}>
              <div className="group h-full border border-border p-8 transition-colors hover:border-primary/40 md:p-10">
                <span className="font-mono text-[11px] tracking-widest text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
                  {sol.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sol.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {serviceTitles(sol.services).map((title, j) => (
                    <li key={title}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: sol.services[j] as string }}
                        className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Discuss track
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    to="/checkout"
                    search={{ service: sol.services.join(",") }}
                    className="inline-flex items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Book Track Services →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <FinalCta />
    </>
  );
}
