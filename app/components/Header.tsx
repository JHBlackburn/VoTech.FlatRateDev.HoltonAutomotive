import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "~/data/business";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#mazda-experts", label: "Mazda Experts" },
  { href: "#models", label: "Models" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 text-stone-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="text-base font-extrabold tracking-wide sm:text-lg">
          {business.name}
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="text-sm font-semibold text-stone-200 hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-stone-50 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isMenuOpen ? "block" : "hidden"} border-t border-zinc-800 bg-zinc-950 px-4 pb-4 lg:hidden`}
      >
        <div className="mx-auto grid max-w-6xl gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-md px-3 py-3 text-sm font-bold text-stone-100 hover:bg-zinc-900"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
