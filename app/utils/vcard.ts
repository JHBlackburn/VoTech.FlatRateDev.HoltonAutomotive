import { business } from "~/data/business";

function escapeVCardValue(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function buildVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCardValue(business.name)}`,
    `ORG:${escapeVCardValue(business.name)}`,
    `TEL;TYPE=WORK,VOICE:${business.phoneDisplay}`,
    `ADR;TYPE=WORK:;;${escapeVCardValue(business.addressLine1)};${escapeVCardValue(
      business.city,
    )};${escapeVCardValue(business.state)};${escapeVCardValue(
      business.postalCode,
    )};${escapeVCardValue(business.country)}`,
    `URL:${business.websiteUrl}`,
    `NOTE:${escapeVCardValue(
      "Local Gainesville auto repair shop. Call to confirm current hours before visiting.",
    )}`,
    "END:VCARD",
  ];

  return `${lines.join("\r\n")}\r\n`;
}
