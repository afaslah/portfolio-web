import { useState } from "react";
import { projects } from "../../data/projects";
import { ImagePreview } from "../ui/ImagePreview";

export function Projects() {
  const [preview, setPreview] = useState<{
    title: string;
    index: number;
  } | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border py-12 sm:py-16"
      aria-labelledby="projects-title"
    >
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs text-accent">// selected work</p>
        <h2
          id="projects-title"
          className="text-2xl font-medium tracking-tight text-text sm:text-3xl"
        >
          Projects
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col border border-border bg-bg"
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="ml-2 font-mono text-xs text-muted">
                {project.title}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              {project.imagePath ? (
                <button
                  type="button"
                  className="group mb-5 block aspect-[16/8] w-full cursor-zoom-in bg-border/20 p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Open full-size preview of ${project.title}`}
                  onClick={() => setPreview({ title: project.title, index: 0 })}
                >
                  <img
                    src={project.imagePath}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-contain transition-opacity group-hover:opacity-80"
                  />
                </button>
              ) : (
                <div
                  className="mb-5 aspect-[16/8] bg-border/60"
                  role="img"
                  aria-label={`${project.title} image placeholder`}
                />
              )}
              <p className="max-w-prose text-sm leading-6 text-muted">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-xs text-muted">
                // {project.tags.join(" / ")}
              </p>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {preview && (
        <ImagePreview
          images={[projects.find((p) => p.title === preview.title)!.imagePath]}
          index={preview.index}
          title={preview.title}
          onClose={() => setPreview(null)}
          onNavigate={() => {}}
        />
      )}
    </section>
  );
}
