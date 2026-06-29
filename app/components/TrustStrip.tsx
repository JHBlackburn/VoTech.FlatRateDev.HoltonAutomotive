import { BadgeCheck, Gauge, HeartHandshake, MapPin } from "lucide-react";

const cues = [
  { icon: HeartHandshake, label: "Family Owned" },
  { icon: BadgeCheck, label: "Fair & Honest Repairs" },
  { icon: MapPin, label: "Local Gainesville Shop" },
  { icon: Gauge, label: "Diagnostics & Maintenance" },
];

export function TrustStrip() {
  return (
    <section aria-label="Trust cues" className="border-y border-zinc-300 bg-stone-100">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {cues.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 py-3 text-sm font-bold text-zinc-900">
            <Icon className="shrink-0 text-red-800" aria-hidden="true" size={21} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
