import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32"
      aria-labelledby="hero-name"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[12%] top-[18%] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,74,58,0.14),transparent_68%)]" />
        <div className="absolute -left-[8%] bottom-[8%] h-[40vmin] w-[40vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,26,23,0.06),transparent_70%)]" />
        <div className="absolute inset-x-[8%] top-[22%] h-px bg-line md:inset-x-[12%]" />
      </div>

      <div className="container-narrow hero-animate relative">
        <p className="mb-5 text-sm tracking-[0.18em] text-accent uppercase">
          {site.role}
        </p>
        <h1
          id="hero-name"
          className="font-display max-w-[14ch] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-ink"
        >
          {site.name}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#realisations" className="btn-primary">
            Voir les réalisations
          </a>
          <a href="#contact" className="btn-ghost">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
