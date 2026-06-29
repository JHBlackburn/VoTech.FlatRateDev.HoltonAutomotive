import { ContactActions } from "~/components/ContactActions";
import { business, fullAddress } from "~/data/business";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-zinc-950 text-stone-50">
      <img
        src={business.images.hero}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.88),rgba(15,15,15,0.48)_48%,rgba(15,15,15,0.12))]" />
      <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-6xl items-center px-4 py-14 sm:px-6 md:min-h-[36rem] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
            Family-owned Gainesville auto repair
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Honest Auto Repair in Gainesville, Florida
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100">
            Family-owned automotive repair from a local shop built on fair pricing, clear communication, and dependable work.
          </p>
          <p className="mt-4 text-sm font-semibold text-stone-300">{fullAddress}</p>
          <div className="hidden md:block">
            <ContactActions className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
