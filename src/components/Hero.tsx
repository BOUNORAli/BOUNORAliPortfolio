import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-28 md:pt-36"
      aria-labelledby="hero-name"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -right-[10%] top-[14%] h-[58vmin] w-[58vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,74,58,0.16),transparent_68%)]" />
        <div className="absolute -left-[6%] bottom-[6%] h-[42vmin] w-[42vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,26,23,0.07),transparent_70%)]" />
        <div className="absolute inset-x-[6%] top-[20%] h-px bg-line md:inset-x-[10%]" />
        <div className="absolute bottom-[18%] left-[6%] hidden h-24 w-px bg-line md:block md:left-[10%]" />
      </div>

      <div className="container-narrow hero-animate relative">
        <p className="mb-5 text-sm tracking-[0.18em] text-accent uppercase md:mb-6">
          {site.role}
        </p>
        <h1
          id="hero-name"
          className="font-display max-w-[12ch] text-[clamp(3rem,11vw,7.75rem)] leading-[0.9] tracking-[-0.035em] text-ink"
        >
          {site.name}
        </h1>
        <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-relaxed text-ink-muted md:mt-10 md:text-xl md:leading-[1.55]">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
          <a href="#profil" className="btn-primary">
            Voir le profil
          </a>
          <a href="#realisations" className="btn-ghost">
            Voir les réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
