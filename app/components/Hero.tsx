import { ContactActions } from "~/components/ContactActions";
import { business, fullAddress } from "~/data/business";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex flex-1 overflow-hidden bg-zinc-950 text-stone-50">
      <img
        src={business.images.hero}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.88),rgba(15,15,15,0.48)_48%,rgba(15,15,15,0.12))]" />
      <div className="mx-auto flex w-full flex-1 items-center px-4 py-6 sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-sm sm:tracking-[0.22em]">
            Family-owned Gainesville auto repair
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Honest Auto Repair in Gainesville, Florida
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-100 sm:mt-5 sm:text-lg sm:leading-8">
            Family-owned automotive repair from a local shop built on fair pricing, clear communication, and dependable work.
          </p>
          <p className="mt-3 text-xs font-semibold leading-5 text-stone-300 sm:mt-4 sm:text-sm">{fullAddress}</p>
          <div className="hidden md:block">
            <ContactActions className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
