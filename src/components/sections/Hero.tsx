import { skillGroups } from "../../data/skills";
import { profile } from "../../data/profile";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 border-b border-border pt-10 pb-20 sm:pt-14 sm:pb-28"
      aria-labelledby="hero-title"
    >
      <p className="mb-5 font-mono text-xs text-accent">// portfolio/index</p>
      <h1
        id="hero-title"
        className="max-w-3xl text-4xl font-medium tracking-tight text-text sm:text-6xl"
      >
        {profile.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
        {profile.role}
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {profile.links.map((link) => (
          <a
            key={link.label}
            className="font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="mt-14 grid max-w-3xl gap-5 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-mono text-xs text-muted">{group.label}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
