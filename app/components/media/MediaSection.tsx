"use client";

import { useState } from "react";
import MediaGrid from "./MediaGrid";
import SortSelect from "../filters/SortSelect";
import type { Media } from "@prisma/client";

type Props = {
  media: Media[];
  initialLikes: number;
  price: number;
};

export default function MediaSection({
  media,
  initialLikes,
  price,
}: Props) {
  const [sortBy, setSortBy] = useState("Popularité");

  return (
    <>
      <section className="mt-12">
        <SortSelect onSortChange={setSortBy} />
      </section>

      <section className="mt-14">
        <MediaGrid
          media={media}
          initialLikes={initialLikes}
          price={price}
          sortBy={sortBy}
        />
      </section>
    </>
  );
}
