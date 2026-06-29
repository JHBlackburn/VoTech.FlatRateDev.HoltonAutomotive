import { Phone } from "lucide-react";
import { business } from "~/data/business";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 text-stone-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="text-base font-extrabold tracking-wide sm:text-lg">
          {business.name}
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="text-sm font-semibold text-stone-200 hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-red-800 px-3 py-2 text-sm font-bold text-white hover:bg-red-900"
          href={`tel:${business.phoneHref}`}
        >
          <Phone aria-hidden="true" size={17} />
          Call Now
        </a>
      </div>
    </header>
  );
}
