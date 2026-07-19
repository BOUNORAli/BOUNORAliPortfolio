import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Roles() {
  const { posture } = site;

  return (
    <section
      id="profil"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="profil-title"
    >
      <div className="shell">
        <Reveal>
          <p className="kicker mb-4">Posture</p>
          <h2 id="profil-title" className="title max-w-3xl text-3xl md:text-6xl">
            {posture.equation}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {posture.line}
          </p>
        </Reveal>

        <Reveal className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[2.55rem] right-[6%] left-[6%] hidden h-px bg-line md:block"
          />
          <ul className="grid gap-12 md:grid-cols-3 md:gap-10">
            {posture.axes.map((axis) => (
              <li key={axis.id}>
                <span
                  aria-hidden
                  className="mb-5 block h-2.5 w-2.5 rounded-full bg-accent"
                />
                <p className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {axis.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                  {axis.detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16 border-t border-line pt-10 md:mt-20">
          <p className="kicker mb-6">Ce que je fais</p>
          <p className="font-display flex flex-wrap items-baseline gap-x-3 gap-y-2 text-2xl font-semibold tracking-tight text-ink md:gap-x-5 md:text-4xl">
            {posture.verbs.map((verb, index) => (
              <span
                key={verb}
                className="inline-flex items-baseline gap-x-3 md:gap-x-5"
              >
                <span>{verb}</span>
                {index < posture.verbs.length - 1 ? (
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
