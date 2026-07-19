import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <section
      id="approche"
      className="section-pad border-t border-line py-20 md:py-28"
      aria-labelledby="approche-title"
    >
      <div className="shell">
        <Reveal>
          <p className="kicker mb-4">Méthode</p>
          <h2 id="approche-title" className="title max-w-2xl text-3xl md:text-5xl">
            Du besoin à la livraison
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.about}
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-14">
          <ol className="method-rail border-t border-line lg:border-0">
            {site.approach.map((step, index) => (
              <li
                key={step}
                className="method-step relative flex items-baseline gap-3 border-b border-line py-4"
              >
                <span className="method-dot hidden lg:block" aria-hidden />
                <span className="font-display text-xs font-semibold text-accent tabular-nums lg:sr-only">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-ink lg:text-[0.88rem]">
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
