"use client";

import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  photographerName?: string;
};

export default function ContactModal({ isOpen, onClose, photographerName }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== Formulaire de contact ===");
    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("==========================");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-quinary p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-200"
          aria-label="Close Contact form"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6 text-[44px] font-bold text-black" id="2">
          Contactez-moi <br/> 
          {photographerName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="2">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium text-black">
              Prénom
            </label>
            <input
              type="text"
              id="3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              aria-label="First Name"
              className="bg-white w-full rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium text-black">
              Nom
            </label>
            <input
              type="text"
              id="5"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              aria-label="Last Name"
              className="bg-white w-full rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="7"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
              className="bg-white w-full rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-black">
              Votre message
            </label>
            <textarea
              id="9"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              aria-label="Your message"
              className="bg-white w-full rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <button
            type="submit"
            aria-label="Send"
            className=" rounded-md bg-primary px-5 py-3 font-bold text-white transition hover:bg-[#4a2323]"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
