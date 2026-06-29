import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type LightboxBackgroundProps = {
  id: string;
  titleId: string;
  imageSrc: string;
  imageAlt: string;
  imageTitle: string;
  className?: string;
  overlayClassName?: string;
  children: ReactNode;
};

export function LightboxBackground({
  id,
  titleId,
  imageSrc,
  imageAlt,
  imageTitle,
  className = "",
  overlayClassName = "bg-zinc-950/78",
  children,
}: LightboxBackgroundProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id={id} aria-labelledby={titleId} className={`relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <img src={imageSrc} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" aria-hidden="true" />
      <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        onClick={() => setIsOpen(true)}
        aria-label={`Open ${imageTitle} photo`}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        {children}
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${imageTitle} photo`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              className="absolute right-0 top-0 z-10 inline-flex size-11 -translate-y-14 items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close photo"
            >
              <X aria-hidden="true" size={22} />
            </button>
            <img src={imageSrc} alt={imageAlt} className="max-h-[82svh] w-full rounded-lg object-contain shadow-2xl" />
            <p className="mt-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white">{imageTitle}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
