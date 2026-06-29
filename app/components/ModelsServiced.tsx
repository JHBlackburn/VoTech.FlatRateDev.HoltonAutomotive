import { ArrowDown } from "lucide-react";

const servicedMakes = [
  { rank: 1, make: "Toyota", origin: "Japan", models: "Camry, Corolla, RAV4, Tacoma" },
  { rank: 2, make: "Ford", origin: "USA", models: "F-150, Escape, Explorer, Mustang" },
  { rank: 3, make: "Chevrolet", origin: "USA", models: "Silverado, Equinox, Tahoe, Malibu" },
  { rank: 4, make: "Honda", origin: "Japan", models: "Accord, Civic, CR-V, Pilot" },
  { rank: 5, make: "Nissan", origin: "Japan", models: "Altima, Rogue, Sentra, Frontier" },
  { rank: 6, make: "Subaru", origin: "Japan", models: "Outback, Forester, Crosstrek, Legacy" },
  { rank: 7, make: "GMC", origin: "USA", models: "Sierra, Yukon, Terrain, Acadia" },
  { rank: 8, make: "Jeep", origin: "USA", models: "Wrangler, Grand Cherokee, Cherokee, Compass" },
  { rank: 9, make: "Mazda", origin: "Japan", models: "CX-5, CX-30, Mazda3, CX-9" },
  { rank: 10, make: "Ram", origin: "USA", models: "1500, 2500, 3500, ProMaster" },
];

export function ModelsServiced() {
  return (
    <>
      <section
        id="mazda-experts"
        className="bg-amber-50 px-4 py-14 sm:px-6 lg:px-8"
        aria-labelledby="mazda-experts-title"
      >
        <div className="mx-auto max-w-6xl rounded-lg border border-amber-200 bg-yellow-50 px-5 py-8 shadow-sm sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">Our Mazda specialty</p>
              <h2
                id="mazda-experts-title"
                className="mt-3 text-5xl font-black uppercase leading-none text-zinc-950 sm:text-6xl lg:text-7xl"
              >
                Deep Expertise with Mazda
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold leading-8 text-zinc-800">
                We're the Mazda experts in town, with the diagnostics, maintenance, and repair experience Mazda owners
                look for.
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-zinc-700">
                We also service a wide range of American and Japanese vehicles.
              </p>
            </div>
          </div>
          <a
            href="#models"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-3 text-sm font-extrabold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 focus:ring-offset-yellow-50"
          >
            See all makes we service
            <ArrowDown aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section id="models" className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="models-title">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Models serviced</p>
            <h2 id="models-title" className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Popular American and Japanese makes
              <span className="block text-red-800">we service</span>
            </h2>
          </div>
          <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {servicedMakes.map(({ rank, make, origin, models }) => (
              <li key={make} className="rounded-lg border border-zinc-300 bg-stone-50 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-zinc-950 text-sm font-extrabold text-white">
                    {rank}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-red-800">{origin}</span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-zinc-950">{make}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">{models}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
