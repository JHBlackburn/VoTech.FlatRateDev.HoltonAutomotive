import { describe, expect, it } from "vitest";
import { createContactCardResponse } from "~/utils/contact-response";

describe("download-contact vCard route", () => {
  it("returns a valid inline vCard response", async () => {
    const response = createContactCardResponse();
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/vcard; charset=utf-8");
    expect(response.headers.get("Content-Disposition")).toBe('inline; filename="holton-automotive.vcf"');
    expect(body).toContain("BEGIN:VCARD");
    expect(body).toContain("VERSION:3.0");
    expect(body).toContain("FN:Holton Automotive");
    expect(body).toContain("TEL;TYPE=WORK,VOICE");
    expect(body).toContain("ADR;TYPE=WORK");
  });
});
