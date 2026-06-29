import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  label = "Shop photo coming soon.",
  className = "",
  imgClassName = "",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-zinc-300 bg-zinc-900 ${className}`}
      data-testid="image-frame"
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="grid h-full min-h-56 place-items-center bg-[linear-gradient(135deg,#242424,#3a3a3a)] p-8 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              Holton Automotive
            </p>
            <p className="mt-3 text-lg font-semibold text-stone-50">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
