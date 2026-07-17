"use client";

import Image from "next/image";
import { useState } from "react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type PhotographerAvatarProps = {
  name: string;
  portrait: string;
};

export default function PhotographerAvatar({
  name,
  portrait,
}: PhotographerAvatarProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="mb-[10px] flex h-[200px] w-[200px] items-center justify-center rounded-full bg-secondary/15 text-4xl text-secondary"
        aria-hidden="true"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={`/photographers/${portrait}`}
      alt={`${name}`}
      width={200}
      height={200}
      className="mb-[10px] h-[200px] w-[200px] rounded-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}
