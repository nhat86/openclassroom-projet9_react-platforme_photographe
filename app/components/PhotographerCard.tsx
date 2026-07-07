import Link from "next/link";
import PhotographerAvatar from "./PhotographerAvatar";

export type Photographer = {
  id: number;
  name: string;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

export default function PhotographerCard({
  photographer,
}: {
  photographer: Photographer;
}) {
  return (
    <article className="flex flex-col items-center text-center">
      <Link
        href={`/photographer/${photographer.id}`}
        className="group flex flex-col items-center transition-opacity hover:opacity-90"
        aria-label={`Voir le profil de ${photographer.name}`}
      >
        <PhotographerAvatar
          name={photographer.name}
          portrait={photographer.portrait}
        />
        <h2 className="font-sans text-[36px] leading-none text-secondary lg:text-[36px]">
          {photographer.name}
        </h2>
        <p className="mt-[5px] text-[13px] font-bold text-primary">
          {photographer.city}, {photographer.country}
        </p>
        <p className="mt-[3px] text-[10px] text-quaternary">
          {photographer.tagline}
        </p>
        <p className="mt-[3px] text-[9px] text-tertiary">
          {photographer.price}€/jour
        </p>
      </Link>
    </article>
  );
}
