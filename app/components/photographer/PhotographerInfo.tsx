import type { Photographer } from "@prisma/client";

export default function PhotographerInfo({
  photographer
}: {
  photographer: Photographer;
}) {
  return (
    <div>
      <h1 className="text-6xl text-secondary">{photographer.name}</h1>

      <p className="mt-2 text-2xl text-primary">
        {photographer.city}, {photographer.country}
      </p>

      <p className="mt-4 text-lg text-[rgba(82,82,82,1)]">{photographer.tagline}</p>
    </div>
  );
}