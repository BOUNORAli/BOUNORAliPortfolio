import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/content/projects";
import { Reveal } from "@/components/Reveal";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link text-sm"
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal as="article" className="border-t border-line py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14">
        <div>
          <p className="font-display text-sm text-accent tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-3 text-3xl tracking-tight text-ink md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>
          <p className="mt-4 text-xs tracking-[0.12em] text-accent uppercase">
            {project.role}
          </p>
          <ProjectLinks project={project} />
        </div>

        <div>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            {project.description}
          </p>
          <ul className="mt-6 space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-ink md:text-[0.95rem]"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed tracking-wide text-ink-muted">
            {project.stack.join(" · ")}
          </p>
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
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Travaux
          </p>
          <h2
            id="realisations-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Applications métier conçues à partir de processus réels
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Quatre réalisations prioritaires — ERP chantier, SaaS multi-tenant,
            négoce BTP et site éditorial — puis d’autres projets complémentaires.
          </p>
        </Reveal>

        <div className="mt-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Reveal className="mt-8 border-t border-line pt-14">
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
            Autres projets
          </h3>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {otherProjects.map((project) => (
              <li
                key={project.id}
                className="grid gap-3 py-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-baseline md:gap-8"
              >
                <div>
                  <p className="font-display text-xl text-ink">{project.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link text-sm"
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
