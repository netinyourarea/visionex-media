import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";
import logoWhite from "@/assets/visionex logo white.png";
import logoBlack from "@/assets/visionex logo black.png";
import { cn } from "@/lib/utils";
import { useCheckout } from "@/context/CheckoutContext";

const nav = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Technology", to: "/technology" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Checkout", to: "/checkout" },
  { label: "Contact", to: "/contact" },
] as const;

function Wordmark({ isHome, scrolled }: { isHome: boolean; scrolled: boolean }) {
  // White logo only on the home hero (dark background). Black everywhere else.
  const useDark = !isHome || scrolled;
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Visionex — home">
      <img
        src={useDark ? logoBlack : logoWhite}
        alt="Visionex"
        className="h-12 w-auto transition-all duration-300"
      />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { items } = useCheckout();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const whiteHeader = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        // theme-dark (white text) ONLY on home page before scroll
        whiteHeader && "theme-dark",
        // Non-home pages always show a solid/blurred background at the top
        // Home page only shows the background once scrolled
        scrolled || !isHome
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Wordmark isHome={isHome} scrolled={scrolled} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/checkout"
            className="relative inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 font-display text-[13px] font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart className="size-4" />
            <span>Checkout</span>
            {items.length > 0 && (
              <span className="flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground group-hover:bg-background group-hover:text-foreground font-mono">
                {items.length}
              </span>
            )}
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-sm border border-border bg-surface px-5 py-2 font-display text-[13px] font-semibold text-foreground transition-all duration-300 hover:bg-accent lg:inline-flex"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex flex-col py-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className="flex items-baseline justify-between border-b border-border/60 py-4 font-display text-2xl font-bold tracking-tight text-foreground"
                  >
                    {item.label}
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-6 inline-flex justify-center rounded-sm bg-primary px-6 py-4 font-display text-sm font-semibold text-primary-foreground"
              >
                Let's Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
