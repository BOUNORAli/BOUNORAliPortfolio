export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "omotal-btp",
    title: "OMOTAL BTP",
    subtitle: "ERP opérations chantier",
    role: "Conception fonctionnelle & prototypage",
    description:
      "ERP web conçu autour des workflows réels d’un chantier de travaux publics — caisse, gasoil, pointage, équipements et pilotage terrain.",
    highlights: [
      "Gestion de projets et de chantiers",
      "Suivi de caisse et de dépenses",
      "Stock et consommation de gasoil",
      "Suivi équipements et main-d’œuvre",
      "Tableaux de bord, validations et exports Excel",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    links: [
      {
        label: "Démo",
        href: "https://omotal-btp-8x97.vercel.app/login",
      },
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/OMOTAL-BTP",
      },
    ],
    featured: true,
  },
  {
    id: "gestiflow",
    title: "GestiFlow",
    subtitle: "ALOM Solutions — ERP SaaS multi-tenant",
    role: "Conception fonctionnelle",
    description:
      "Plateforme SaaS multi-entreprises pour commandes, facturation, trésorerie et opérations métier, avec personnalisation white-label.",
    highlights: [
      "Onboarding entreprise, rôles et multi-sociétés",
      "Achats, ventes, BL et facturation",
      "Trésorerie, dépenses et prévisions",
      "Fiscalité et personnalisation white-label",
      "Abonnements et intégration Stripe",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Angular",
      "React",
      "MongoDB",
      "JWT",
      "Stripe",
      "Docker",
    ],
    links: [
      {
        label: "Site",
        href: "https://alom-solutions-website.vercel.app/",
      },
      {
        label: "Application",
        href: "https://alom-solutions-app.vercel.app/login",
      },
    ],
    featured: true,
  },
  {
    id: "bf4-invest",
    title: "BF4 Invest",
    subtitle: "Achats, ventes, facturation & site commercial",
    role: "Conception fonctionnelle & full-stack",
    description:
      "Application métier de négoce BTP pour achats, ventes, factures, recouvrement et KPI, accompagnée d’un site commercial premium.",
    highlights: [
      "Clients, fournisseurs et catalogue produits",
      "Workflows achat / vente et suivi des échéances",
      "Génération PDF et import Excel",
      "Tableaux de bord, audit trail et RBAC",
      "Site commercial BF4 Invest (Maroc)",
    ],
    stack: [
      "Angular",
      "Spring Boot",
      "MongoDB",
      "Spring Security",
      "JWT",
      "Docker",
      "Next.js",
    ],
    links: [
      {
        label: "Site",
        href: "https://bf4invest-website.vercel.app/",
      },
      {
        label: "Application",
        href: "https://bf4invest-app.vercel.app/login",
      },
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/BF4INVESTapp",
      },
    ],
    featured: true,
  },
  {
    id: "marouazi",
    title: "Mohammed Marouazi",
    subtitle: "Mémoire, œuvres et transmission",
    role: "Conception & développement web",
    description:
      "Site hommage dédié à la mémoire, aux ouvrages et à la transmission — biographie, œuvres, jardin des mots et contributions.",
    highlights: [
      "Parcours de l’homme, de l’éducateur et de l’auteur",
      "Présentation des ouvrages publiés",
      "Espace témoignages et contribution",
      "Design éditorial sobre et accessible",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    links: [
      {
        label: "Site",
        href: "https://mohamed-marouazi-site.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/MohamedMarouaziWebSite",
      },
    ],
    featured: true,
  },
  {
    id: "edumanage",
    title: "École+ / EduManage",
    subtitle: "Système d’information scolaire",
    role: "Conception & développement",
    description:
      "Plateforme pour écoles privées marocaines : multi-rôles, interface bilingue FR/AR, paiements et portails institutionnels.",
    highlights: [
      "Authentification multi-rôles",
      "Interface bilingue français / arabe",
      "Paiement en ligne Stripe",
      "Portails administration, parents et élèves",
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Docker",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/EduManage",
      },
    ],
    featured: false,
  },
  {
    id: "jobscout",
    title: "JobScoutPro",
    subtitle: "Application emploi full-stack",
    role: "Développement full-stack",
    description:
      "Application orientée emploi pour la mise en relation et le suivi de candidatures.",
    highlights: [
      "Parcours candidat et recruteur",
      "API Express et interfaces React",
    ],
    stack: ["React", "TypeScript", "Express"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/JobScoutPro",
      },
    ],
    featured: false,
  },
  {
    id: "hotel",
    title: "Hotel Food Ordering",
    subtitle: "Services hôteliers web & mobile",
    role: "Développement full-stack — stage SCPIT",
    description:
      "Application web/mobile de commande alimentaire hôtelière avec rôles, APIs REST et back-office.",
    highlights: [
      "APIs REST et authentification JWT",
      "Interfaces Flutter client / admin",
      "Tableau de bord opérationnel",
    ],
    stack: ["Java 17", "Spring Boot", "MongoDB", "Flutter", "JWT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/hotel-service-master",
      },
    ],
    featured: false,
  },
  {
    id: "premium-cash",
    title: "Premium Cash Management",
    subtitle: "Gestion de trésorerie",
    role: "Développement",
    description:
      "Application de suivi et de pilotage de trésorerie pour opérations financières.",
    highlights: ["Suivi de flux", "Interfaces de pilotage"],
    stack: ["TypeScript", "React"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/BOUNORAli/Premiumcashmanagementapp",
      },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
