"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const IDS = site.nav.map((n) => n.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const els = IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActive(top.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.45] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_12px_40px_rgba(18,21,26,0.06)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="section-pad shell flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${active === id ? "is-active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
          <a href={site.cvPath} className="btn btn-ghost !px-3 !py-2 text-sm" download>
            CV
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 bg-[color-mix(in_srgb,var(--bg)_97%,transparent)] backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="section-pad flex flex-col gap-5 pt-12" aria-label="Mobile">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[2.2rem] font-bold leading-none tracking-tight text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cvPath}
            className="btn btn-fill mt-6 w-fit"
            download
            onClick={() => setOpen(false)}
          >
            Télécharger le CV
          </a>
        </nav>
      </div>
    </header>
  );
}
