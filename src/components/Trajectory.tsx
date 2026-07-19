import {
  education,
  experiences,
  languages,
} from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/Reveal";

export function Trajectory() {
  return (
    <section
      id="trajectoire"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="trajectoire-title"
    >
      <div className="shell">
        <Reveal>
          <p className="kicker mb-4">Trajectoire</p>
          <h2
            id="trajectoire-title"
            className="title max-w-2xl text-3xl md:text-5xl"
          >
            Parcours et compétences
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-0 md:before:absolute md:before:top-2 md:before:bottom-2 md:before:left-[7.25rem] md:before:w-px md:before:bg-line">
          {experiences.map((item) => (
            <Reveal
              as="li"
              key={item.id}
              className="grid gap-3 border-t border-line py-10 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-12"
            >
              <p className="relative text-sm font-500 text-accent tabular-nums md:pt-1">
                <span
                  aria-hidden
                  className="absolute top-2 -right-[1.85rem] hidden h-2 w-2 rounded-full bg-accent md:block"
                />
                {item.period}
              </p>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
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
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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

        <Reveal className="mt-6 grid gap-12 border-t border-line pt-14 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
              Formation
            </h3>
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.id}>
                  <p className="text-sm text-accent tabular-nums">{item.period}</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {item.organization} · {item.location}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="font-display mt-12 text-2xl font-bold tracking-tight text-ink">
              Langues
            </h3>
            <ul className="mt-6 space-y-3">
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

          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
              Compétences
            </h3>
            <div className="mt-6 grid gap-0 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.id}
                  className="border-b border-line py-6 sm:border-r sm:px-5 sm:odd:pl-0 sm:[&:nth-child(2n)]:border-r-0"
                >
                  <p className="font-display text-lg font-bold text-ink">
                    {group.title}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
