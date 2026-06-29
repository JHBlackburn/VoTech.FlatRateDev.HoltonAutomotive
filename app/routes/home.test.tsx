import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { business } from "~/data/business";
import Home, { meta } from "./home";

describe("home route", () => {
  it("renders key one-page sections", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /Honest Auto Repair in Gainesville/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Everyday repairs/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /A local shop/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Recommended by Gainesville drivers/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Save Holton Automotive/i })).toBeInTheDocument();
  });

  it("renders mobile action bar actions", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: /Call Holton Automotive/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Save Holton Automotive contact card/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Get directions to Holton Automotive/i }).length).toBeGreaterThan(0);
  });

  it("renders desktop QR save-contact card", () => {
    render(<Home />);

    expect(screen.getByLabelText("Save contact QR code")).toBeInTheDocument();
    expect(screen.getByText(/QR code opens/i)).toBeInTheDocument();
  });

  it("shows image fallback when an image is missing", () => {
    render(<Home />);

    const image = screen.getByAltText(`${business.name} in Gainesville, Florida`);
    fireEvent.error(image);
    expect(screen.getByText("Shop photo coming soon.")).toBeInTheDocument();
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
