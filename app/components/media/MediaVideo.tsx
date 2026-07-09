type Props = {
  media: {
    video: string;
    title: string;
  };
  onClick?: () => void;
};

export default function MediaVideo({
  media,
  onClick,
}: Props) {
  return (
    <video
      className="h-[300px] w-full rounded object-cover cursor-pointer hover:opacity-90 transition-opacity"
      preload="metadata"
      controls
      onClick={onClick}
      aria-label={`Lilac breasted roller, closeup view`}
    >
      <source
        src={`/media/${media.video}`}
        type="video/mp4"
      />
    </video>
  );
}