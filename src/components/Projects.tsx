import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/content/projects";
import { Reveal } from "@/components/Reveal";

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link text-sm"
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

function Featured({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      className="border-t border-line-strong py-14 md:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-display text-sm font-semibold text-accent tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="title mt-4 text-[2rem] md:text-[2.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-ink-muted md:text-base">
            {project.subtitle}
          </p>
          <p className="mt-5 text-xs font-500 tracking-[0.16em] text-accent uppercase">
            {project.role}
          </p>
          <Links project={project} />
        </div>

        <div>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg md:leading-[1.6]">
            {project.description}
          </p>
          <ul className="mt-7 space-y-2.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-ink md:text-[0.95rem]"
              >
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section
      id="realisations"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="realisations-title"
    >
      <div className="shell-wide">
        <Reveal>
          <p className="kicker mb-4">Travaux</p>
          <h2 id="realisations-title" className="title max-w-2xl text-3xl md:text-5xl">
            Preuves avant discours
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Applications métier conçues à partir de processus réels — ERP
            chantier, SaaS multi-tenant, négoce BTP et site éditorial.
          </p>
        </Reveal>

        <div className="mt-6">
          {featuredProjects.map((project, index) => (
            <Featured key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal className="mt-4 border-t border-line pt-14">
          <h3 className="title text-2xl md:text-3xl">Autres projets</h3>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {otherProjects.map((project) => (
              <li
                key={project.id}
                className="grid gap-3 py-7 transition-colors hover:bg-surface md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-baseline md:gap-8 md:px-3"
              >
                <div>
                  <p className="font-display text-xl font-semibold text-ink">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-4 md:justify-end">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-sm"
                    >
                      {link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
