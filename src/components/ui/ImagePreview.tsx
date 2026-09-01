import { useEffect, useRef } from 'react'

type ImagePreviewProps = {
  images: string[]
  index: number
  title: string
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImagePreview({ images, index, title, onClose, onNavigate }: ImagePreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const hasMultiple = images.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!hasMultiple) return
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, images.length, hasMultiple, onNavigate])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="image-preview-title"
      className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none border-0 bg-transparent p-4 backdrop:bg-black/40"
      onClose={onClose}
    >
      <div
        className="flex h-full items-center justify-center"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <figure className="relative max-h-[85vh] max-w-[90vw] border border-border bg-bg p-2 shadow-2xl">
          <figcaption id="image-preview-title" className="sr-only">
            {title} image preview{hasMultiple ? ` (${index + 1} of ${images.length})` : ''}
          </figcaption>

          <button
            type="button"
            className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center border border-border bg-bg text-lg text-text transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Close image preview"
            onClick={() => dialogRef.current?.close()}
          >
            X
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center border border-border bg-bg text-text transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Previous image"
                onClick={() => onNavigate((index - 1 + images.length) % images.length)}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center border border-border bg-bg text-text transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Next image"
                onClick={() => onNavigate((index + 1) % images.length)}
              >
                ›
              </button>
            </>
          )}

          <img
            src={images[index]}
            alt={`${title} full-size screenshot${hasMultiple ? ` ${index + 1}` : ''}`}
            className="block max-h-[80vh] max-w-[86vw] object-contain"
          />

          {hasMultiple && (
            <p className="mt-2 text-center font-mono text-xs text-muted">
              {index + 1} / {images.length}
            </p>
          )}
        </figure>
      </div>
    </dialog>
  )
}