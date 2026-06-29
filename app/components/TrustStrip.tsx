import { BadgeCheck, Gauge, HeartHandshake, MapPin } from "lucide-react";

const cues = [
  { icon: HeartHandshake, label: "Family Owned", shortLabel: "Family Owned" },
  { icon: BadgeCheck, label: "Fair & Honest Repairs", shortLabel: "Fair Repairs" },
  { icon: MapPin, label: "Local Gainesville Shop", shortLabel: "Local Shop" },
  { icon: Gauge, label: "Diagnostics & Maintenance", shortLabel: "Diagnostics" },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust cues" className="shrink-0 border-y border-zinc-300 bg-stone-100">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-3 gap-y-1 px-4 py-2 max-[340px]:flex max-[340px]:gap-3 max-[340px]:overflow-x-auto max-[340px]:py-1 sm:px-6 md:grid-cols-4 md:gap-px md:py-4 lg:px-8">
        {cues.map(({ icon: Icon, label, shortLabel }) => (
          <div key={label} className="flex min-h-9 items-center gap-2 py-1.5 text-xs font-bold text-zinc-900 max-[340px]:min-h-0 max-[340px]:shrink-0 max-[340px]:whitespace-nowrap max-[340px]:py-0.5 md:min-h-0 md:gap-3 md:py-3 md:text-sm">
            <Icon className="size-4 shrink-0 text-red-800 md:size-[21px]" aria-hidden="true" />
            <span className="md:hidden">{shortLabel}</span>
            <span className="hidden md:inline">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
