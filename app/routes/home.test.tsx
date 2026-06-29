import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { business } from "~/data/business";
import { autoRepairSchema } from "~/utils/schema";
import Home, { meta } from "./home";

describe("home route", () => {
  it("renders key one-page sections", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /Honest Auto Repair in Gainesville/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Everyday repairs/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Popular American and Japanese makes/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /A local shop/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Recommended by Gainesville drivers/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Save Holton Automotive/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Around the shop/i })).not.toBeInTheDocument();
  });

  it("renders mobile action bar actions", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: /Call Holton Automotive/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Save Holton Automotive contact card/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Get directions to Holton Automotive/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: /Call Now/i })).not.toBeInTheDocument();
  });

  it("opens mobile section navigation from the hamburger", () => {
    render(<Home />);

    const menuButton = screen.getByRole("button", { name: /Open menu/i });

    fireEvent.click(menuButton);

    expect(screen.getByRole("navigation", { name: /Mobile navigation/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Models/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("button", { name: /Close menu/i })).toHaveAttribute("aria-expanded", "true");
  });

  it("renders desktop QR save-contact card", () => {
    render(<Home />);

    expect(screen.getByLabelText("Save contact QR code")).toBeInTheDocument();
    expect(screen.getByText(/Scan this QR code/i)).toBeInTheDocument();
  });

  it("renders fixed weekday hours and appointment toast", () => {
    render(<Home />);

    expect(screen.getAllByText(business.hoursNote).length).toBeGreaterThan(0);
    expect(screen.getByText(/Call, save Holton Automotive to your phone/i)).toBeInTheDocument();
    expect(screen.queryByText(/Call to confirm current hours/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Book an Appointment/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "This would launch your appointments app (e.g., Square Appointments).",
    );
  });

  it("opens and closes section background photos in a lightbox", () => {
    render(<Home />);

    expect(screen.queryByRole("button", { name: /View Photo/i })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Open Brake Service photo/i }));

    expect(screen.getByRole("dialog", { name: /Brake Service photo/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Close photo/i }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("lightboxes the second service photo background", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /Open Oil Service photo/i }));

    expect(screen.getByRole("dialog", { name: /Oil Service photo/i })).toBeInTheDocument();
  });

  it("includes fixed weekday hours in structured data", () => {
    expect(autoRepairSchema()).toMatchObject({
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: business.openingHours.days,
          opens: "08:30",
          closes: "17:30",
        },
      ],
    });
  });

  it("includes server metadata and uses configured OG image", () => {
    const tags = meta();

    expect(tags).toContainEqual({ title: business.seo.title });
    expect(tags).toContainEqual({ name: "description", content: business.seo.description });
    expect(tags).toContainEqual({ property: "og:title", content: business.seo.title });
    expect(tags).toContainEqual({ property: "og:description", content: business.seo.description });
    expect(tags).toContainEqual({
      property: "og:image",
      content: new URL(business.heroImage, business.canonicalUrl).toString(),
    });
  });
});
