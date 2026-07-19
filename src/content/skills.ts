export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "analyse",
    title: "Analyse fonctionnelle",
    items: [
      "Recueil des besoins",
      "Processus & règles métier",
      "Workflows",
      "Spécifications",
      "Critères d’acceptation",
      "Recette",
    ],
  },
  {
    id: "produit",
    title: "Produit / projet",
    items: [
      "Priorisation",
      "Coordination",
      "Agile / Scrum",
      "Tests fonctionnels",
      "Amélioration continue",
      "Conduite du changement",
    ],
  },
  {
    id: "erp",
    title: "ERP / métiers",
    items: [
      "Achats & ventes",
      "Facturation",
      "Recouvrement",
      "Fournisseurs",
      "Trésorerie",
      "Chantier, coûts & rentabilité",
    ],
  },
  {
    id: "data",
    title: "Data / outils",
    items: [
      "Excel avancé",
      "KPI & tableaux de bord",
      "Contrôle de cohérence",
      "Import / export",
      "Microsoft Office",
    ],
  },
  {
    id: "tech",
    title: "Culture technique",
    items: [
      "Java / Spring Boot",
      "APIs REST",
      "Angular / React",
      "SQL",
      "MongoDB / PostgreSQL",
      "Git & Docker",
      "Prototypage assisté par IA",
    ],
  },
];
