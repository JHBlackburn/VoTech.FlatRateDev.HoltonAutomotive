import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { ContactActions } from "~/components/ContactActions";
import { business, fullAddress } from "~/data/business";
import { absoluteUrl } from "~/utils/seo";

export function Contact() {
  const contactUrl = absoluteUrl("/download-contact.vcf");
  const [showAppointmentToast, setShowAppointmentToast] = useState(false);

  useEffect(() => {
    if (!showAppointmentToast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setShowAppointmentToast(false), 4200);

    return () => window.clearTimeout(timeoutId);
  }, [showAppointmentToast]);

  return (
    <section id="contact" className="bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-800">Contact</p>
            <h2 className="mt-3 text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Save Holton Automotive to your phone
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
              Call, save Holton Automotive to your phone, get directions, or book an appointment. Can't wait to see you!
            </p>
            <div className="mt-6 space-y-2 text-base font-semibold text-zinc-900">
              <p>{business.phoneDisplay}</p>
              <p>{fullAddress}</p>
              <p>{business.hoursNote}</p>
            </div>
            <ContactActions className="mt-8 hidden md:flex" />
          </div>
          <aside
            className="hidden rounded-lg border border-zinc-300 bg-white p-6 shadow-sm md:block"
            aria-label="Save contact QR code"
          >
            <div className="mx-auto flex w-full max-w-xs justify-center rounded-lg border border-zinc-200 bg-stone-50 p-5">
              <QRCodeSVG value={contactUrl} size={220} level="M" includeMargin />
            </div>
            <p className="mt-5 text-center text-sm font-semibold text-zinc-700">
              Scan this QR code to save Holton Automotive to your phone.
            </p>
          </aside>
        </div>
        <div className="mt-10 border-t border-zinc-300 pt-8">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-800 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-[#f7f3ea] sm:w-auto"
            onClick={() => setShowAppointmentToast(true)}
          >
            <CalendarClock aria-hidden="true" size={19} />
            Book an Appointment
          </button>
        </div>
      </div>
      {showAppointmentToast ? (
        <div
          className="fixed bottom-24 right-4 z-[80] max-w-sm rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-4 text-sm font-semibold leading-6 text-white shadow-2xl md:bottom-6"
          role="status"
          aria-live="polite"
        >
          This would launch your appointments app (e.g., Square Appointments).
        </div>
      ) : null}
    </section>
  );
}
