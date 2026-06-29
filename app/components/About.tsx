import { LightboxBackground } from "~/components/LightboxBackground";
import { business } from "~/data/business";

export function About() {
  return (
    <LightboxBackground
      id="about"
      titleId="about-title"
      imageSrc={business.images.oilService}
      imageAlt="Technician draining engine oil during maintenance"
      imageTitle="Oil Service"
      className="text-stone-50"
      overlayClassName="bg-[linear-gradient(90deg,rgba(15,15,15,0.9),rgba(15,15,15,0.76)_58%,rgba(15,15,15,0.5))]"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">About</p>
        <h2 id="about-title" className="mt-3 text-3xl font-extrabold sm:text-4xl">
          A local shop for straight answers.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-100">
          Holton Automotive serves Gainesville drivers who want straight answers, dependable repairs, and a shop that does not make car care harder than it has to be. Whether you are coming in for routine maintenance, a warning light, AC trouble, or a repair you want explained clearly, the goal is simple: help you understand what is going on and get you back on the road.
        </p>
      </div>
    </LightboxBackground>
  );
}
