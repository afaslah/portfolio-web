import type { Experience } from "../types";
import tpa_1 from "../assets/images/tpa_1.webp";
import tpa_2 from "../assets/images/tpa_2.webp";
import tpa_3 from "../assets/images/tpa_3.webp";
import tpa_4 from "../assets/images/tpa_4.webp";
import mostrans_1 from "../assets/images/mostrans_1.webp";
import mostrans_2 from "../assets/images/mostrans_2.webp";
import mostrans_3 from "../assets/images/mostrans_3.webp";

export const experience: Experience[] = [
  {
    company: "PT Teladan Prima Agro Tbk",
    role: "IT Intern — Dashboard & Digitalization",
    dates: "Jan 2026 - Jul 2026",
    summary:
      "Built Tableau dashboards from messy raw data and automated the manual transposition work with Python. Helped develop a Django-based fingerprint attendance system, fixing bugs and adding features like real-time sync. Also ran QA/UAT testing for a mobile and web employee management app.",
    images: [tpa_1, tpa_2, tpa_3, tpa_4],
    imagesNotes:"Images blurred for confidentiality.",
  },
  {
    company: "PT. Mostrans Global Digilog",
    role: "IT Business Analyst Intern",
    dates: "Aug 2025 - Dec 2025",
    summary:
      "Built a commercial analytics dashboard with React, TypeScript, and GraphQL, replacing manual PowerPoint reporting with real-time revenue and logistics insights. Added interactive charts and filters with ApexCharts for performance analysis by shipper and region. Designed a star-schema data warehouse with ETL pipelines, cutting query execution time from seconds to under 300ms.",
    images: [mostrans_1, mostrans_2, mostrans_3],
    imagesNotes:"Images blurred for confidentiality.",
  },
];
