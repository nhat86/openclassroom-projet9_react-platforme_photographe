"use client";

import { useState } from "react";
import ContactButton from "./ContactButton";
import ContactModal from "./ContactModal";
import PhotographerAvatar from "./PhotographerAvatar";
import PhotographerInfo from "./PhotographerInfo";
import type { Photographer } from "@prisma/client";

export default function PhotographerHeader({
  photographer,
}: {
  photographer: Photographer;
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-between rounded-md bg-gray-100 px-12 py-14">
        <PhotographerInfo
          photographer={photographer}
        />

        <ContactButton onClick={() => setIsContactModalOpen(true)} />

        <PhotographerAvatar
          name={photographer.name}
          portrait={photographer.portrait}
        />
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        photographerName={photographer.name}
      />
    </>
  );
}