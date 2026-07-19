import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Téléphone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "LinkedIn",
    value: "ali-bounor",
    href: site.linkedin,
  },
  {
    label: "GitHub",
    value: "BOUNORAli",
    href: site.github,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby="contact-title"
    >
      <div className="container-narrow">
        <Reveal>
          <p className="mb-4 text-sm tracking-[0.16em] text-accent uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="font-display max-w-2xl text-3xl leading-tight tracking-tight text-ink md:text-5xl"
          >
            Discutons analyse, produit ou transformation digitale
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.contactLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              Écrire un email
            </a>
            <a href={site.cvPath} className="btn-ghost" download>
              Télécharger le CV
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-14 grid gap-0 border-t border-line sm:grid-cols-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex flex-col gap-2 border-b border-line py-6 transition-colors sm:border-r sm:px-6 sm:odd:pl-0 sm:[&:nth-child(2n)]:border-r-0 hover:bg-surface"
            >
              <span className="text-xs tracking-[0.14em] text-accent uppercase">
                {item.label}
              </span>
              <span className="font-display text-xl text-ink transition-colors group-hover:text-accent md:text-2xl">
                {item.value}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
