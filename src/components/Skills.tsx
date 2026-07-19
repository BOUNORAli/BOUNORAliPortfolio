import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <section
      id="competences"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="competences-title"
    >
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Compétences
          </p>
          <h2
            id="competences-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Une double culture métier et SI
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal
              key={group.id}
              className="border-b border-line py-8 sm:border-r sm:px-6 sm:odd:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <h3 className="font-display text-xl text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
