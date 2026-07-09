"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="w-full max-w-[1300px] mx-auto flex items-center justify-between px-5 py-6 lg:py-11">
      <Link href="/" aria-label="FishEye, home page">
        <Image
          src="/logo.png"
          alt="Fisheye Home page"
          width={128}
          height={30}
          priority
        />
      </Link>
      {isHomePage && (
        <h1 className="text-primary text-lg lg:text-[36px]">
          Nos photographes
        </h1>
      )}
    </header>
  );
}
