import { MessageSquareText, Scale, Users } from "lucide-react";
import { business } from "~/data/business";

const cards = [
  { title: "Clear communication", icon: MessageSquareText },
  { title: "Fair repair guidance", icon: Scale },
  { title: "Local, family-owned service", icon: Users },
];

export function Reputation() {
  return (
    <section id="reviews" className="bg-zinc-950 px-4 py-16 text-stone-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Recommended by Gainesville drivers for honest, practical auto repair.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map(({ title, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-zinc-700 bg-zinc-900 p-6">
              <Icon className="text-amber-300" aria-hidden="true" size={28} />
              <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-stone-300">{business.hoursNote}</p>
      </div>
    </section>
  );
}
