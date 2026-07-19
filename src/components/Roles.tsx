import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Roles() {
  return (
    <section
      id="profil"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="profil-title"
    >
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Profil
          </p>
          <h2
            id="profil-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Cinq postures, une même interface métier / SI
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Je cible ces intitulés sans me figer sur un seul — le fil conducteur
            reste l’analyse du besoin, le produit et la coordination jusqu’au
            déploiement.
          </p>
        </Reveal>

        <ol className="role-list mt-14 border-t border-line">
          {site.targetRoles.map((role, index) => (
            <Reveal
              as="li"
              key={role}
              className="role-item group flex items-baseline gap-5 border-b border-line py-5 md:gap-10 md:py-6"
            >
              <span className="font-display w-8 shrink-0 text-sm text-accent tabular-nums transition-colors group-hover:text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl leading-snug tracking-tight text-ink md:text-[1.65rem]">
                {role}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
