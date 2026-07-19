export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  bullets: string[];
  tools?: string;
};

export type EducationItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: "omotal",
    period: "Depuis 2025",
    title: "Ingénieur SI & Responsable digitalisation",
    organization: "OMOTAL TRAVAUX",
    location: "Maroc",
    bullets: [
      "Contribution au pilotage administratif, financier et opérationnel d’un marché de travaux publics d’environ 20 M MAD (~1,8 M€).",
      "Recueil et formalisation des besoins, cartographie des processus, règles métier, spécifications et critères de recette.",
      "Conception fonctionnelle et pilotage du prototypage assisté par IA de trois solutions métiers : BF4 Invest, OMOTAL BTP et ALOM Solutions.",
      "Tests fonctionnels, recette, correction des écarts et coordination avec terrain, direction, fournisseurs et sous-traitants.",
    ],
    tools:
      "Excel avancé, Agile, UML, Cursor / IA ; Java/Spring Boot, Angular/React, REST, MongoDB/PostgreSQL, Git/Docker",
  },
  {
    id: "bassetti",
    period: "03–09/2025",
    title: "Développeur intégrateur Full Stack — Stage de fin d’études",
    organization: "BASSETTI",
    location: "Paris",
    bullets: [
      "Participation au cycle complet des solutions métiers TEEXMA : besoins clients, spécifications, plans de tests, développement et recette.",
      "Intégration de modules et déploiement dans des environnements industriels (LIMS, production, R&D).",
      "Collaboration avec chefs de projet et interlocuteurs métier.",
    ],
    tools: "Delphi, Angular, JavaScript/jQuery, HTML/CSS, XML, SQL, Agile",
  },
  {
    id: "scpit",
    period: "05–07/2024",
    title: "Développeur Full Stack — Stage",
    organization: "SCPIT",
    location: "Lille",
    bullets: [
      "Conception d’une application web/mobile de services hôteliers : besoin, APIs REST, authentification et rôles.",
      "Interfaces Flutter, back-office et tableau de bord.",
    ],
    tools: "Java 17, Spring Boot, MongoDB, Flutter, REST, JWT, Maven",
  },
];

export const education: EducationItem[] = [
  {
    id: "sup-galilee",
    period: "2021 – 2025",
    title: "Diplôme d’ingénieur en génie informatique",
    organization: "Sup Galilée",
    location: "Villetaneuse",
  },
  {
    id: "cpge",
    period: "2020 – 2021",
    title: "Classes préparatoires Physique-Chimie",
    organization: "Lycée Claude Fauriel",
    location: "Saint-Étienne",
  },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Avancé — TOEIC 965" },
] as const;
