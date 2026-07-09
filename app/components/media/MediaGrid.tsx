"use client";

import { useState, useMemo } from "react";
import MediaCard from "./MediaCard";
import PhotographerStats from "../photographer/PhotographerStats";
import Lightbox from "./Lightbox";
import type { Media } from "@prisma/client";


type Props = {
  media: Media[];
  initialLikes: number;
  price: number;
  sortBy?: string;
};

export default function MediaGrid({
  media,
  initialLikes,
  price,
  sortBy = "Popularité",
}: Props) {
  const [totalLikes, setTotalLikes] = useState(initialLikes);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortedMedia = useMemo(() => {
    switch (sortBy) {
      case "Popularité":
        return [...media].sort((a, b) => b.likes - a.likes);// ... pour un copy
      case "Date":
        return [...media].sort((a, b) => {
          if (!a.date || !b.date) return 0;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      case "Titre":
        return [...media].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return media;
    }
  }, [media, sortBy]);

  const handleLikeChange = () => {
    setTotalLikes((prev) => prev + 1);
  };

  const handleMediaClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, sortedMedia.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <section className="mt-16 flex flex-wrap gap-x-24 gap-y-16">
        {sortedMedia.map((item, index) => (
          <div key={item.id ?? item.title} className="w-full max-w-[320px]">
            <MediaCard
              media={item}
              onLikeChange={handleLikeChange}
              onClick={() => handleMediaClick(index)}
            />
          </div>
        ))}
      </section>

      <PhotographerStats likes={totalLikes} price={price} />

      {lightboxOpen && (
        <Lightbox
          media={sortedMedia}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
}