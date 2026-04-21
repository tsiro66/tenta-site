"use client";

import { useState, type FormEvent } from "react";
import MagneticContactButton from "./MagneticContactButton";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up actual submission
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <section id="contact" className="relative z-10 bg-blue-800 -mb-px pb-px scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase leading-tight text-center">
          Επικοινωνια
        </h2>
        <p className="mt-4 text-blue-200 text-center text-base md:text-lg">
          Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας άμεσα.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                Ονοματεπώνυμο
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-blue-600 bg-blue-800/50 px-4 py-3 text-white placeholder-blue-400 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                placeholder="π.χ. Γιάννης Παπαδόπουλος"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                Τηλέφωνο
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-blue-600 bg-blue-800/50 px-4 py-3 text-white placeholder-blue-400 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                placeholder="69x xxx xxxx"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border border-blue-600 bg-blue-800/50 px-4 py-3 text-white placeholder-blue-400 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
              Μήνυμα
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-blue-600 bg-blue-800/50 px-4 py-3 text-white placeholder-blue-400 outline-none transition-colors focus:border-orange-400 focus:ring-1 focus:ring-orange-400 resize-none"
              placeholder="Περιγράψτε τι χρειάζεστε..."
            />
          </div>

          <div className="flex justify-center pt-2">
            <MagneticContactButton
              as="button"
              type="submit"
              variant="cta"
              showArrow={status === "idle"}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "idle" && "ΑΠΟΣΤΟΛΗ"}
              {status === "sending" && "ΑΠΟΣΤΟΛΗ..."}
              {status === "sent" && "ΣΤΑΛΘΗΚΕ ✓"}
              {status === "error" && "ΣΦΑΛΜΑ — ΔΟΚΙΜΑΣΤΕ ΞΑΝΑ"}
            </MagneticContactButton>
          </div>
        </form>
      </div>
    </section>
  );
}
