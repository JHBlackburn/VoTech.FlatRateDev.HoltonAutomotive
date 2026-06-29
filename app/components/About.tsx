import { ImageWithFallback } from "~/components/ImageWithFallback";
import { business } from "~/data/business";

export function About() {
  return (
    <section id="about" className="bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <ImageWithFallback
          src={business.images.serviceBay}
          alt="Holton Automotive service bay"
          className="min-h-80"
          label="Service bay photo coming soon."
        />
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">About</p>
          <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
            A local shop for straight answers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            Holton Automotive serves Gainesville drivers who want straight answers, dependable repairs, and a shop that does not make car care harder than it has to be. Whether you are coming in for routine maintenance, a warning light, AC trouble, or a repair you want explained clearly, the goal is simple: help you understand what is going on and get you back on the road.
          </p>
        </div>
      </div>
    </section>
  );
}
