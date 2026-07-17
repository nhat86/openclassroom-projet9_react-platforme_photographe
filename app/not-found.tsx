// app/photographer/[slug]/not-found.tsx
import Link from "next/link";
import { Camera } from "lucide-react";

export default function NotFound() {
  return (
    <div
      role="alert"
      className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-quinary/20">
        <Camera size={40} className="text-primary" aria-hidden="true" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-black">
          Photographe introuvable
        </h1>
        <p className="max-w-md text-gray-500">
          Le photographe que vous recherchez n'existe pas ou a été supprimé.
          Vérifiez le lien ou retournez à l'accueil pour découvrir nos autres
          talents.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-md bg-primary px-5 py-3 font-bold text-white transition hover:bg-[#4a2323]"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}