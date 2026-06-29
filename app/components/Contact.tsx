import { QRCodeSVG } from "qrcode.react";
import { ContactActions } from "~/components/ContactActions";
import { business, fullAddress } from "~/data/business";
import { absoluteUrl } from "~/utils/seo";

export function Contact() {
  const contactUrl = absoluteUrl("/download-contact.vcf");

  return (
    <section id="contact" className="bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
            Save Holton Automotive to your phone
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            Scan this code with your phone to save Holton Automotive, call the shop, or get directions when you need them.
          </p>
          <div className="mt-6 space-y-2 text-base font-semibold text-zinc-900">
            <p>{business.phoneDisplay}</p>
            <p>{fullAddress}</p>
            <p>{business.hoursNote}</p>
          </div>
          <ContactActions className="mt-8" />
        </div>
        <aside
          className="rounded-lg border border-zinc-300 bg-white p-6 shadow-sm"
          aria-label="Save contact QR code"
        >
          <div className="mx-auto flex w-full max-w-xs justify-center rounded-lg border border-zinc-200 bg-stone-50 p-5">
            <QRCodeSVG value={contactUrl} size={220} level="M" includeMargin />
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-zinc-700">
            QR code opens the Holton Automotive contact card.
          </p>
        </aside>
      </div>
    </section>
  );
}
