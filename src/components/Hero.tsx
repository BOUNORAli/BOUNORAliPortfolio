import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-28 md:pt-36"
      aria-labelledby="hero-name"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-40 620 C 180 520, 280 700, 480 560 S 780 420, 980 500 S 1180 620, 1240 480"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-accent/25"
          />
          <path
            d="M-20 280 C 160 360, 320 180, 520 260 S 820 380, 1020 220 S 1220 160, 1280 300"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-accent/18"
          />
          <path
            d="M 80 80 C 220 220, 360 40, 540 160 S 820 280, 1000 120 S 1160 40, 1260 180"
            stroke="currentColor"
            strokeWidth="1"
            className="text-ink/8"
          />
          <circle cx="480" cy="560" r="3.5" className="fill-accent/40" />
          <circle cx="1020" cy="220" r="3.5" className="fill-accent/35" />
          <circle cx="540" cy="160" r="2.5" className="fill-ink/20" />
        </svg>
        <div className="absolute inset-x-[7%] top-[17%] h-px bg-line md:inset-x-[11%]" />
      </div>

      <div className="shell hero-rise relative">
        <p className="kicker mb-6">{site.role}</p>
        <h1
          id="hero-name"
          className="title max-w-[10ch] text-[clamp(3.2rem,13vw,8.25rem)]"
        >
          {site.name}
        </h1>
        <div className="hero-rule mt-8 h-[2px] w-20 bg-accent md:w-28" />
        <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-relaxed text-ink-muted md:mt-10 md:text-xl md:leading-[1.55]">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
          <a href="#realisations" className="btn btn-fill">
            Voir les travaux
          </a>
          <a href="#contact" className="btn btn-ghost">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
