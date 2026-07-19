import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <section
      id="approche"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="approche-title"
    >
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Méthode
          </p>
          <h2
            id="approche-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Du besoin métier à la solution déployée
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.about}
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <ol className="flex flex-col gap-0 border-t border-line md:flex-row md:flex-wrap md:border-t-0">
            {site.approach.map((step, index) => (
              <li
                key={step}
                className="flex items-baseline gap-4 border-b border-line py-4 md:w-1/2 md:border-r md:border-b md:px-5 md:py-6 lg:w-[14.28%] lg:border-b-0 lg:px-3 lg:py-0 lg:first:pl-0"
              >
                <span className="font-display text-sm text-accent tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-ink md:text-[0.95rem]">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
