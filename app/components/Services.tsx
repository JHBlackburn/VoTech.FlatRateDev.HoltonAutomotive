import {
  BatteryCharging,
  CircleGauge,
  Disc3,
  Fan,
  Gauge,
  SearchCheck,
  Settings,
  Wrench,
} from "lucide-react";

const services = [
  { name: "Oil Changes", icon: Gauge },
  { name: "Diagnostics", icon: SearchCheck },
  { name: "AC & Heating Repair", icon: Fan },
  { name: "Alignments", icon: CircleGauge },
  { name: "Brake Service", icon: Disc3 },
  { name: "Starter & Alternator Repair", icon: BatteryCharging },
  { name: "Routine Maintenance", icon: Settings },
  { name: "General Auto Repair", icon: Wrench },
];

export function Services() {
  return (
    <section id="services" className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
            Everyday repairs, maintenance, and answers that make sense.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ name, icon: Icon }) => (
            <article key={name} className="rounded-lg border border-zinc-300 bg-white p-5 shadow-sm">
              <Icon className="text-red-800" aria-hidden="true" size={28} />
              <h3 className="mt-4 text-lg font-extrabold text-zinc-950">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
