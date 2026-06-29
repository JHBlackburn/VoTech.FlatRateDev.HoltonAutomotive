import { ContactActions } from "~/components/ContactActions";
import { ImageWithFallback } from "~/components/ImageWithFallback";
import { business, fullAddress } from "~/data/business";

export function Hero() {
  return (
    <section id="top" className="bg-zinc-950 text-stone-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:pb-20 md:pt-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
            Family-owned Gainesville auto repair
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Honest Auto Repair in Gainesville, Florida
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">
            Family-owned automotive repair from a local shop built on fair pricing, clear communication, and dependable work.
          </p>
          <p className="mt-4 text-sm font-semibold text-stone-300">{fullAddress}</p>
          <ContactActions className="mt-8" />
        </div>
        <ImageWithFallback
          src={business.images.hero}
          alt={`${business.name} in Gainesville, Florida`}
          className="min-h-[22rem] shadow-2xl shadow-black/30 md:min-h-[30rem]"
        />
      </div>
    </section>
  );
}
