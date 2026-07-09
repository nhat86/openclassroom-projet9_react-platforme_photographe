import { notFound } from "next/navigation";

import Header from "../../components/Header";
import PhotographerHeader from "../../components/photographer/PhotographerHeader";
import MediaSection from "../../components/media/MediaSection";

import { getPhotographer, getAllMediasForPhotographer } from "../../lib/prisma-db";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PhotographerPage({ params }: PageProps) {
  const { slug } = await params;
  const id = Number(slug);

  if (Number.isNaN(id)) {
    notFound();
  }

  const photographer = await getPhotographer(id);

  if (!photographer) {
    notFound();
  }

  const photographerMedia = await getAllMediasForPhotographer(id);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1440px] px-[100px] pb-20">
        <PhotographerHeader photographer={photographer} />

        <MediaSection
          media={photographerMedia}
          initialLikes={photographerMedia.reduce(
            (total, item) => total + item.likes,
            0
          )}
          price={photographer.price}
        />
      </main>
    </>
  );
}