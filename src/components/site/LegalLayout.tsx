import { useEffect, useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";

export type LegalSection = { id: string; heading: string; body: string[] };

export function LegalLayout({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={intro} />
      <div className="container-x grid gap-16 pb-28 lg:grid-cols-12 lg:gap-20">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav className="sticky top-32" aria-label="Table of contents">
            <p className="eyebrow mb-5">Contents</p>
            <ol className="space-y-2.5 border-l border-border">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`-ml-px flex gap-3 border-l py-1 pl-4 text-sm transition-colors ${
                      active === s.id
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-[11px] pt-0.5 text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <div className="mt-14 space-y-14">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-widest text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold md:text-[1.75rem]">{s.heading}</h2>
                </div>
                <div className="mt-5 space-y-4 border-l border-border pl-6">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-[15px] leading-[1.8] text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
