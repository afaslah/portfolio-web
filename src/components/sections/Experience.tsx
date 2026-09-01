import { useState } from "react";
import { experience } from "../../data/experience";
import { ImagePreview } from "../ui/ImagePreview";
import type { Experience as ExperienceType } from "../../types";

export function Experience() {
  const [preview, setPreview] = useState<{
    images: string[];
    title: string;
    index: number;
  } | null>(null);

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
          <ExperienceEntry
            key={`${entry.company}-${entry.role}`}
            entry={entry}
            onOpenPreview={setPreview}
          />
        ))}
      </div>

      {preview && (
        <ImagePreview
          images={preview.images}
          index={preview.index}
          title={preview.title}
          onClose={() => setPreview(null)}
          onNavigate={(i) =>
            setPreview((prev) => (prev ? { ...prev, index: i } : prev))
          }
        />
      )}
    </section>
  );
}

function ExperienceEntry({
  entry,
  onOpenPreview,
}: {
  entry: ExperienceType;
  onOpenPreview: (p: {
    images: string[];
    title: string;
    index: number;
  }) => void;
}) {
  const [showImages, setShowImages] = useState(true);
  const hasImages = entry.images && entry.images.length > 0;

  return (
    <article className="relative pl-6 pb-9 last:pb-0 sm:pl-8">
      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-accent" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-medium text-text">{entry.role}</h3>
        <time className="font-mono text-xs text-muted">{entry.dates}</time>
      </div>
      <p className="mt-1 font-mono text-xs text-accent">{entry.company}</p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        {entry.summary}
      </p>

      {hasImages && (
        <>
          <button
            type="button"
            onClick={() => setShowImages((prev) => !prev)}
            className="mt-4 font-mono text-xs text-muted underline decoration-muted/40 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {showImages
              ? `// hide images (${entry.images!.length})`
              : `// view images (${entry.images!.length})`}
          </button>

          {showImages && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                {entry.images!.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    className="h-16 w-24 overflow-hidden border border-border bg-border/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`Open image ${i + 1} for ${entry.company}`}
                    onClick={() =>
                      onOpenPreview({
                        images: entry.images!,
                        title: entry.company,
                        index: i,
                      })
                    }
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {entry.imagesNotes && (
                <p className="mt-2 font-mono text-[11px] italic text-muted">
                  * {entry.imagesNotes}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </article>
  );
}
