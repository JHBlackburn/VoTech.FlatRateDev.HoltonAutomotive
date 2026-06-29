import { Download, MapPin, Phone } from "lucide-react";
import { business } from "~/data/business";

type ContactActionsProps = {
  compact?: boolean;
  className?: string;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

export function ContactActions({ compact = false, className = "" }: ContactActionsProps) {
  const sizeClass = compact ? "flex-1 px-3 py-2.5 text-xs" : "";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        className={`${buttonBase} ${sizeClass} bg-red-800 text-white hover:bg-red-900 focus:ring-red-700 focus:ring-offset-stone-50`}
        href={`tel:${business.phoneHref}`}
        aria-label={`Call ${business.name}`}
      >
        <Phone aria-hidden="true" size={18} />
        Call{compact ? "" : " Holton"}
      </a>
      <a
        className={`${buttonBase} ${sizeClass} border border-zinc-400 bg-stone-50 text-zinc-950 hover:border-zinc-700 focus:ring-zinc-700 focus:ring-offset-stone-50`}
        href="/download-contact.vcf"
        aria-label={`Save ${business.name} contact card`}
      >
        <Download aria-hidden="true" size={18} />
        {compact ? "Save" : "Save Contact"}
      </a>
      <a
        className={`${buttonBase} ${sizeClass} border border-zinc-700 bg-zinc-950 text-white hover:bg-zinc-800 focus:ring-zinc-800 focus:ring-offset-stone-50`}
        href={business.mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Get directions to ${business.name}`}
      >
        <MapPin aria-hidden="true" size={18} />
        Directions
      </a>
    </div>
  );
}
