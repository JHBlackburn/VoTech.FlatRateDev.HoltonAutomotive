import { business, fullAddress } from "~/data/business";

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-4 pb-28 pt-8 text-stone-300 sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-zinc-800 pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-bold text-stone-50">{business.name}</p>
        <p>{fullAddress}</p>
        <p>{business.hoursNote}</p>
      </div>
    </footer>
  );
}
