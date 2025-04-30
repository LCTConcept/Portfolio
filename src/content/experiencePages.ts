export interface ExperiencePage {
  id: number;
  title?: string;
  text?: string;
  image?: string;
  custom?: JSX.Element;
}

export const experiencePages: ExperiencePage[] = [
  {
    id: 1,
    title: "Présentation",
    text: "Bienvenue dans la section Expériences de mon portfolio. Ce livre présente les rôles que j’ai occupés, les projets menés, et les compétences développées au fil du temps.",
  },
  {
    id: 2,
    title: "ROTOR TEAM – PM & Sales",
    text: "J’ai occupé un rôle hybride entre chef de projet et responsable commercial, assurant le lien entre le terrain, les clients et les outils numériques internes.",
  },
  {
    id: 3,
    image: "/assets/experience_page_one.png",
    text: "Projet de gestion CRM — phase de design.",
  },
  {
    id: 4,
    image: "/assets/experience_page_two.png",
    text: "Atelier collaboratif avec les équipes opérationnelles.",
  },
  {
    id: 5,
    title: "Conclusion",
    text: "Merci d’avoir feuilleté ce chapitre. Vous pouvez passer à la suite ou revenir à la bibliothèque !",
  },
];
