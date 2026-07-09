import Image from "next/image";

type Props = {
  media: {
    image: string;
    title: string;
  };
  onClick?: () => void;
};

export default function MediaImage({
  media,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[300px] w-full rounded cursor-pointer hover:opacity-90 transition-opacity"
      aria-label={`Lilac breasted roller, closeup view`}
    >
      <Image
        src={`/media/${media.image}`}
        alt={media.title}
        width={350}
        height={300}
        className="h-[300px] w-full rounded object-cover"
      />
    </button>
  );
}