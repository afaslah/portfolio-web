import { profile } from "../../data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-12 sm:py-16"
      aria-labelledby="contact-title"
    >
      <p className="mb-2 font-mono text-xs text-accent">// get in touch</p>
      <h2
        id="contact-title"
        className="text-2xl font-medium tracking-tight text-text sm:text-3xl"
      >
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
        {profile.contactIntro}
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        <a
          className="font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
        {profile.socialLinks
          .filter((link) => link.icon !== "email")
          .map((link) => (
            <a
              key={link.label}
              className="font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
      </div>
    </section>
  );
}
