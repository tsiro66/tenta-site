"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const sync = () => {
      document.documentElement.style.setProperty(
        "--footer-h",
        `${el.offsetHeight}px`,
      );
    };

    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();

    return () => ro.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="fixed bottom-0 left-0 right-0 z-[1] bg-orange-500"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {/* Top row — logo + tagline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Master <span className="text-blue-900">Tenta</span>
          </span>
          <p className="text-sm md:text-base text-white/70 tracking-wide uppercase">
            Τεντες &amp; Περγκολες απο το 1992
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/20" />

        {/* Info columns */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-1">
              Επικοινωνια
            </span>
            <a
              href="tel:+302101234567"
              className="text-sm text-white/80 transition-colors hover:text-blue-900"
            >
              +30 210 123 4567
            </a>
            <a
              href="mailto:info@mastertenta.gr"
              className="text-sm text-white/80 transition-colors hover:text-blue-900"
            >
              info@mastertenta.gr
            </a>
            <span className="text-sm text-white/80">
              Λεωφ. Αθηνών 42, Αθήνα
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-1">
              Ωρες Λειτουργιας
            </span>
            <span className="text-sm text-white/80">
              Δευ — Παρ: 08:00 — 17:00
            </span>
            <span className="text-sm text-white/80">
              Σαβ: 09:00 — 14:00
            </span>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-1">
              Social
            </span>
            <div className="flex justify-center gap-6 md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-blue-900"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-blue-900"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 h-px bg-white/20" />
        <div className="mt-6 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <span className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Master Tenta. All rights reserved.
          </span>
          <span className="text-xs text-white/40">
            Θεσσαλονικη, Ελλαδα
          </span>
        </div>
      </div>
    </footer>
  );
}
