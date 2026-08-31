import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && selectedProject && !dialog.open) dialog.showModal();
  }, [selectedProject]);

  const closePreview = () => dialogRef.current?.close();

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border py-16 sm:py-20"
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
                  onClick={() => setSelectedProject(project)}
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
      {selectedProject && (
        <dialog
          ref={dialogRef}
          aria-labelledby="project-preview-title"
          className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none border-0 bg-transparent p-4 backdrop:bg-black/40"
          onClose={() => setSelectedProject(null)}
        >
          <div
            className="flex h-full items-center justify-center"
            onClick={(event) => {
              if (event.target === event.currentTarget) closePreview();
            }}
          >
            <figure className="relative max-h-[85vh] max-w-[90vw] border border-border bg-bg p-2 shadow-2xl">
              <figcaption id="project-preview-title" className="sr-only">
                {selectedProject.title} image preview
              </figcaption>
              <button
                type="button"
                className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center border border-border bg-bg text-lg text-text transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Close image preview"
                onClick={closePreview}
              >
                X
              </button>
              <img
                src={selectedProject.imagePath}
                alt={`${selectedProject.title} full-size screenshot`}
                className="block max-h-[80vh] max-w-[86vw] object-contain"
              />
            </figure>
          </div>
        </dialog>
      )}
    </section>
  );
}
