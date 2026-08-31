import { experience } from "../../data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border py-16 sm:py-20"
      aria-labelledby="experience-title"
    >
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs text-accent">
          // places I have learned
        </p>
        <h2
          id="experience-title"
          className="text-2xl font-medium tracking-tight text-text sm:text-3xl"
        >
          Experience
        </h2>
      </div>
      <div className="border-l border-border">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="relative pl-6 pb-9 last:pb-0 sm:pl-8"
          >
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium text-text">{entry.role}</h3>
              <time className="font-mono text-xs text-muted">
                {entry.dates}
              </time>
            </div>
            <p className="mt-1 font-mono text-xs text-accent">
              {entry.company}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              {entry.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
