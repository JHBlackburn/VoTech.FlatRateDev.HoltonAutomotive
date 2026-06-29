import { ImageWithFallback } from "~/components/ImageWithFallback";
import { business } from "~/data/business";

const photos = [
  { title: "Shop Exterior", src: business.images.shopExterior },
  { title: "Service Bay", src: business.images.serviceBay },
  { title: "Team", src: business.images.team },
  { title: "Vehicle Service", src: business.images.vehicleService },
];

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 id="gallery-title" className="text-3xl font-extrabold text-zinc-950 sm:text-4xl">
          Around the shop
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <article key={photo.title}>
              <ImageWithFallback
                src={photo.src}
                alt={`${business.name} ${photo.title.toLowerCase()}`}
                className="aspect-[4/3]"
                label={`${photo.title} photo coming soon.`}
              />
              <h3 className="mt-3 text-base font-extrabold text-zinc-950">{photo.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
