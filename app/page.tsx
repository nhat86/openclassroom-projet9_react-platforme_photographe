import { getAllPhotographers } from "./lib/prisma-db";
import Header from "./components/Header";
import PhotographerCard from "./components/PhotographerCard";

export default async function Home() {
  const photographers = await getAllPhotographers();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section
        aria-label="Liste des photographes"
        className="grid grid-cols-1 justify-items-center gap-y-[30px] px-5 pb-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[100px] lg:px-[100px] lg:pb-[100px]"
      >
        {photographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </section>
    </main>
  );
}
