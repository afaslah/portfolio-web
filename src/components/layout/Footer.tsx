import { profile } from "../../data/profile";
import type { SocialLink } from "../../types";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons: Record<SocialLink["icon"], typeof FaGithub> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdEmail,
  whatsapp: FaWhatsapp,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl justify-end gap-4 px-5 py-5 sm:px-8">
        {profile.socialLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.label}
              className="text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              <Icon aria-hidden="true" className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
