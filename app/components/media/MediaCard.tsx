import MediaImage from "./MediaImage";
import MediaVideo from "./MediaVideo";
import LikeButton from "./LikeButton";

type MediaItem = {
  id?: number | string;
  image?: string | null;
  video?: string | null;
  title: string;
  likes: number;
};

type Props = {
  media: MediaItem;
  onLikeChange?: () => void;
  onClick?: () => void;
};

export default function MediaCard({
  media,
  onLikeChange,
  onClick,
}: Props) {
  return (
    <article>
      {media.image ? (
        <MediaImage media={{ image: media.image, title: media.title }} onClick={onClick} />
      ) : (
        <MediaVideo media={{ video: media.video || "", title: media.title }} onClick={onClick} />
      )}

      <div className="mt-3 flex items-center justify-between">
        <h2 className="text-primary">{media.title}</h2>

        <LikeButton mediaId={media.id} likes={media.likes} onLikeChange={onLikeChange} />
      </div>
    </article>
  );
}