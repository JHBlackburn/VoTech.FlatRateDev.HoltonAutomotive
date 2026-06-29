import { business } from "~/data/business";
import { buildVCard } from "~/utils/vcard";

export function createContactCardResponse() {
  return new Response(buildVCard(), {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `inline; filename="${business.contactCardFilename}"`,
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
