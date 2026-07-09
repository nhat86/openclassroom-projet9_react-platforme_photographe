"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import type { Media } from "@prisma/client";


type Props = {
  media: Media[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function Lightbox({
  media,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: Props) {
  const currentMedia = media[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrevious();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious, onClose]);

  if (!currentMedia) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 px-20" aria-label="Image closeup view">
      <button
        onClick={onClose}
        className="absolute right-8 top-8 text-white hover:text-gray-300"
        aria-label="Close dialog"
      >
        <X size={32} className="text-primary" />
      </button>

      <div className="flex items-center gap-8 w-full max-w-[90vw]">
        <button
          onClick={onPrevious}
          className="text-white hover:text-gray-300 disabled:opacity-30 flex-shrink-0"
          disabled={currentIndex === 0}
          aria-label="Previous image"
        >
          <ChevronLeft size={48} className="text-primary"/>
        </button>

        <div className="flex-1 flex flex-col items-center">
          <div className="max-h-[70vh] max-w-full">
            {currentMedia.image ? (
              <Image
                src={`/media/${currentMedia.image}`}
                alt={currentMedia.title}
                width={1920}
                height={1080}
                className="max-h-[70vh] max-w-full object-contain"
                aria-label={`Lilac breasted roller`}
              />
            ) : (
              <video
                src={`/media/${currentMedia.video}`}
                controls
                className="max-h-[70vh] max-w-full"
              />
            )}
          </div>

          <div className="mt-4 text-left text-primary">
            <h2 className="text-xl font-semibold">{currentMedia.title}</h2>
          </div>
        </div>

        <button
          onClick={onNext}
          className="text-white hover:text-gray-300 disabled:opacity-30 flex-shrink-0"
          disabled={currentIndex === media.length - 1}
          aria-label="Next image"
        >
          <ChevronRight size={48} className="text-primary"/>
        </button>
      </div>
    </div>
  );
}
