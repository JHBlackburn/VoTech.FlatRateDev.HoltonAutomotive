import { ContactActions } from "~/components/ContactActions";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-300 bg-stone-50/98 p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <ContactActions compact />
    </div>
  );
}
