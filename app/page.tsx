import { getAllPhotographers } from "./lib/prisma-db";
import Header from "./components/Header";
import PhotographerCard from "./components/photographer/PhotographerCard";

export default async function Home() {
  const photographers = await getAllPhotographers();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="flex flex-wrap justify-center gap-y-[30px] px-5 pb-16 lg:gap-x-[100px] lg:px-[100px] lg:pb-[100px]">
        {photographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </section>
    </main>
  );
}
