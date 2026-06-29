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
    <section id="models" className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="models-title">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Models serviced</p>
          <h2 id="models-title" className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
            Popular American and Japanese makes
            <span className="block text-red-800">we service</span>
          </h2>
        </div>
        <div className="mt-8 rounded-lg border-l-4 border-red-800 bg-red-50 px-5 py-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Mazda experts</p>
            <h3 className="mt-2 text-2xl font-extrabold text-zinc-950">The Mazda experts in town.</h3>
          </div>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-zinc-700 sm:mt-0">
            Holton Automotive knows Mazda inside and out, and they work on all the following makes too.
          </p>
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
  );
}
