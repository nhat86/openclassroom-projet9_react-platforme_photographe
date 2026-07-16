"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type Props = {
  mediaId?: number | string;
  likes: number;
  onLikeChange?: (delta: number) => void;
};

export default function LikeButton({
  mediaId,
  likes,
  onLikeChange,
}: Props) {
  const [count, setCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    const newIsLiked = !isLiked;
    const delta = newIsLiked ? 1 : -1;
    const newCount = count + delta;
    
    setCount(newCount);
    setIsLiked(newIsLiked);
    onLikeChange?.(delta);

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
      aria-label = {isLiked ? "Retirer le like" : "Ajouter un like"}
    >
      {count}

      <Heart
        size={18}
        fill={isLiked ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}