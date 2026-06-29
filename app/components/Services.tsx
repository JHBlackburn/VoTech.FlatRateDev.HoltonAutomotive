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
import { LightboxBackground } from "~/components/LightboxBackground";
import { business } from "~/data/business";

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
    <LightboxBackground
      id="services"
      titleId="services-title"
      imageSrc={business.images.brakeService}
      imageAlt="Technician installing a brake caliper and rotor"
      imageTitle="Brake Service"
      className="text-stone-50"
      overlayClassName="bg-[linear-gradient(90deg,rgba(15,15,15,0.9),rgba(15,15,15,0.76)_58%,rgba(15,15,15,0.56))]"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Services</p>
        <h2 id="services-title" className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Everyday repairs, maintenance, and answers that make sense.
        </h2>
      </div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ name, icon: Icon }) => (
          <article key={name} className="rounded-lg border border-white/20 bg-white/95 p-5 shadow-sm">
            <Icon className="text-red-800" aria-hidden="true" size={28} />
            <h3 className="mt-4 text-lg font-extrabold text-zinc-950">{name}</h3>
          </article>
        ))}
      </div>
    </LightboxBackground>
  );
}
