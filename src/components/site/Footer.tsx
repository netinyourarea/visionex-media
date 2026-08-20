import { Link } from "@tanstack/react-router";

import logoBlack from "@/assets/visionex logo black.png";
import { company, services } from "@/data/site";

const nav = [
  { label: "Services", to: "/services" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Technology", to: "/technology" as const },
  { label: "About", to: "/about" as const },
  { label: "Work", to: "/work" as const },
  { label: "Checkout & Booking", to: "/checkout" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contact", to: "/contact" as const },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy" as const },
  { label: "Terms & Conditions", to: "/terms" as const },
  { label: "Cookie Policy", to: "/cookies" as const },
  { label: "Disclaimer", to: "/disclaimer" as const },
];

function Column({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string; params?: Record<string, string> }[];
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={`${item.to}-${item.label}`}>
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              to={item.to as any}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              params={item.params as any}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="hairline-t relative overflow-hidden bg-surface">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Visionex — home">
            <img src={logoBlack} alt="Visionex" className="h-12 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {company.description}
          </p>
          <dl className="mt-8 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            <div className="flex flex-col">
              <dt className="text-foreground/60">Email</dt>
              <dd>{company.email}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-foreground/60">Phone</dt>
              <dd>{company.phone}</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-foreground/60">Office</dt>
              <dd>{company.address}</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3">
          <Column title="Navigate" items={nav} />
        </div>
        <div className="lg:col-span-3">
          <h3 className="eyebrow mb-5">Services</h3>
          <ul className="space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-sm text-primary/90 hover:text-primary">
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <Column title="Legal" items={legal} />
        </div>
      </div>

      <div className="hairline-t">
        <div className="container-x flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
            Registered entity: {company.legalEntity}
          </p>
        </div>
      </div>
    </footer>
  );
}
