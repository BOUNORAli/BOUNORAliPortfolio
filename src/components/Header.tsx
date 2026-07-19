"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const SECTION_IDS = site.nav.map((item) => item.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] shadow-[0_8px_30px_rgba(26,26,23,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad container-narrow flex h-16 items-center justify-between md:h-[4.25rem]">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Principal"
        >
          {site.nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm text-ink-muted transition-colors hover:text-ink ${
                  active === id ? "is-active" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={site.cvPath}
            className="btn-ghost !px-3 !py-2 text-sm"
            download
          >
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
          <span className="sr-only">Menu</span>
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
        <nav
          className="section-pad flex flex-col gap-5 pt-10"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[2rem] leading-none text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cvPath}
            className="btn-primary mt-4 w-fit"
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
