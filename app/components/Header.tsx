import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-6 lg:px-[100px] lg:py-11">
      <Link href="/" aria-label="FishEye, retour à l&apos;accueil">
        <Image
          src="/logo.png"
          alt="FishEye"
          width={128}
          height={30}
          priority
        />
      </Link>
      <h1 className="font-sans text-primary text-lg lg:text-[36px]">
        Nos photographes
      </h1>
    </header>
  );
}
