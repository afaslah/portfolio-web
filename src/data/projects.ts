import type { Project } from "../types";
import academicProjectImage from "../assets/images/academic-project.webp";
import stellaCrmImage from "../assets/images/stella-crm.webp";

export const projects: Project[] = [
  {
    title: "stella-crm",
    description:
      "Final-year thesis project, AI-powered multi-tenant CRM built with a team of 3, unifying customer service and field service management. I built the AI chatbot with tool calling for querying CRM data, a Random Forest model for smart ticket assignment, and the Midtrans payment integration.",
    tags: ["ASP.NET Core (.NET 10)", "React/Vite", "PostgreSQL", "Supabase"],
    links: [
      {
        label: "GitHub FE",
        href: "https://github.com/sulthandhafirr/FE-CRM",
        external: true,
      },
      {
        label: "GitHub BE",
        href: "https://github.com/sulthandhafirr/BE-CRM",
        external: true,
      },
      {
        label: "Live demo",
        href: "https://capstone-crm.pages.dev/",
        external: true,
      },
    ],
    imagePath: stellaCrmImage,
  },
  {
    title: "academic-scheduling",
    description:
      "Django web app built with a team of 6 to automate university class scheduling from real study cases. I implemented a Random Forest Classifier that auto-assigns 1000+ classes per semester at 87-90% automation, respecting lecturer, room, and time constraints.",
    tags: ["Python", "Django", "Pandas", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Richeaa/academic-project",
        external: true,
      },
    ],
    imagePath: academicProjectImage,
  },
];
