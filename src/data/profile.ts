import type { Link, SocialLink } from "../types";

export const profile = {
  name: "Aqeel Fazlemawla Faslah",
  role: "Information Systems graduate building full-stack apps and data-driven dashboards.",
  contactIntro:
    "Have a question, project idea, or just want to connect? Reach out through any of these placeholder channels.",
  links: [
    { label: "GitHub", href: "https://github.com/afaslah", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aqeelfazlemawlafaslah/",
      external: true,
    },
    { label: "WhatsApp", href: "https://wa.me/6289617820219", external: true },
    { label: "CV", href: "/cv.pdf", external: true }, // public folder
  ] satisfies Link[],
  email: "afaslah12@gmail.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/afaslah",
      icon: "github",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aqeelfazlemawlafaslah/",
      icon: "linkedin",
      external: true,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6289617820219",
      icon: "whatsapp",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:afaslah12@gmail.com",
      icon: "email",
      external: true,
    },
  ] satisfies SocialLink[],
};
