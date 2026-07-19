import { education, experiences, languages } from "@/content/experience";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="parcours"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="parcours-title"
    >
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Parcours
          </p>
          <h2
            id="parcours-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Expérience à l’interface métier et technique
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {experiences.map((item) => (
            <Reveal
              as="li"
              key={item.id}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="text-sm text-accent tabular-nums">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl tracking-tight text-ink md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {item.organization} · {item.location}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-ink md:text-[0.95rem]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.tools ? (
                  <p className="mt-5 text-xs leading-relaxed text-ink-muted">
                    {item.tools}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6 grid gap-10 border-t border-line pt-14 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">
              Formation
            </h3>
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.id}>
                  <p className="text-sm text-accent tabular-nums">{item.period}</p>
                  <p className="mt-1 font-display text-lg text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {item.organization} · {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">
              Langues
            </h3>
            <ul className="mt-6 space-y-4">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
                >
                  <span className="text-ink">{lang.name}</span>
                  <span className="text-sm text-ink-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
