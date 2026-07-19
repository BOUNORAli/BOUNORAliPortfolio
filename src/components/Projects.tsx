import {
  featuredProjects,
  otherProjects,
  type Project,
} from "@/content/projects";
import { Reveal } from "@/components/Reveal";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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
  const reverse = index % 2 === 1;

  return (
    <Reveal as="article" className="border-t border-line py-14 md:py-20">
      <div
        className={`grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] md:gap-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-4">
            <p className="font-display text-sm text-accent tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </p>
            <span className="h-px flex-1 bg-line" aria-hidden />
          </div>
          <h3 className="font-display mt-5 text-[2rem] leading-[1.05] tracking-tight text-ink md:text-[2.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-ink-muted md:text-base">
            {project.subtitle}
          </p>
          <p className="mt-5 text-xs tracking-[0.14em] text-accent uppercase">
            {project.role}
          </p>
          <ProjectLinks project={project} />
        </div>

        <div className="md:pt-1">
          <p className="text-base leading-relaxed text-ink-muted md:text-lg md:leading-[1.6]">
            {project.description}
          </p>
          <ul className="mt-7 space-y-2.5">
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
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((tech) => (
              <span key={tech} className="stack-chip">
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

        <div className="mt-4">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Reveal className="mt-4 border-t border-line pt-14">
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
            Autres projets
          </h3>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {otherProjects.map((project) => (
              <li
                key={project.id}
                className="grid gap-3 py-7 transition-colors hover:bg-surface md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-baseline md:gap-8 md:px-2"
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
