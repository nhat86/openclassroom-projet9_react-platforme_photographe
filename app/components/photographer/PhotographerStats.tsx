import { Heart } from "lucide-react";

type Props = {
  likes: number;
  price: number;
};

export default function PhotographerStats({
  likes,
  price,
}: Props) {
  return (
    <aside className="fixed bottom-0 right-10 flex items-center gap-8 rounded-t-md bg-quinary px-8 py-3">
      <div className="flex items-center gap-2 font-bold">
        {likes}
        <Heart size={18} fill="currentColor" />
      </div>

      <div className="font-bold">{price}€ / jour</div>
    </aside>
  );
}