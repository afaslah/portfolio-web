export type Link = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: Link[];
  imagePath: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  images?: string[];
  imagesNotes?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type SocialLink = Link & {
  icon: "github" | "linkedin" | "email" | "whatsapp";
};
