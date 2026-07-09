"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type Props = {
  mediaId?: number | string;
  likes: number;
  onLikeChange?: () => void;
};

export default function LikeButton({
  mediaId,
  likes,
  onLikeChange,
}: Props) {
  const [count, setCount] = useState(likes);

  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
    onLikeChange?.();

    if (mediaId) {
      try {
        await fetch('/api/media/like', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mediaId: Number(mediaId),
            likes: newCount,
          }),
        });
      } catch (error) {
        console.error('Error saving like:', error);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 font-semibold text-primary"
      aria-label = "likes"
    >
      {count}

      <Heart
        size={18}
        fill="currentColor"
        aria-hidden="true"
      />
    </button>
  );
}