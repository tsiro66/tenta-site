"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MagneticContactButton from "./MagneticContactButton";

const menuLinks = [
  { label: "ΑΡΧΙΚΗ", href: "/", num: "01" },
  { label: "ΤΕΝΤΟΠΕΡΓΚΟΛΕΣ", href: "/tentopergoles", num: "02" },
  { label: "ΣΥΣΤΗΜΑ ΚΑΣΕΤΙΝΑΣ", href: "/systima-kasetinas", num: "03" },
  { label: "ΣΥΣΤΗΜΑ ΜΠΑΡΑΣ", href: "/systima-mparas", num: "04" },
  { label: "ΤΕΝΤΕΣ", href: "/tentes", num: "05" },
  { label: "ΖΕΛΑΤΙΝΕΣ", href: "/zelatines", num: "06" },
  { label: "ΥΦΑΣΜΑΤΑ", href: "/yfasmata", num: "07" },
  { label: "ΑΥΤΟΜΑΤΙΣΜΟΙ", href: "/automatismoi", num: "08" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Frosted glass on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-10 transition-all duration-300 ${scrolled && !open ? "bg-black/20 backdrop-blur-lg shadow-lg" : ""}`}>
        {/* Left — Contact */}
        <div className="flex justify-start">
          <MagneticContactButton />
        </div>

        {/* Center — Logo (absolute = always true-center) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 z-50 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white"
        >
          Master <span className="text-orange-400">Tenta</span>
        </Link>

        {/* Right — Hamburger */}
        <div className="flex justify-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-white cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-[2px] w-9 bg-white transition-all duration-300 ease-in-out ${
                open ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-9 bg-white transition-all duration-300 ease-in-out ${
                open ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-blue-800 transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Links — vertically centered, scrollable on short screens */}
        <div className="flex flex-1 items-center overflow-y-auto overscroll-contain pt-20 sm:pt-24 px-6 sm:px-8 md:px-16 lg:px-24">
          <nav aria-label="Main menu" className="w-full max-w-7xl my-auto">
            <div className="flex flex-col md:grid md:grid-cols-[3fr_1px_2fr]">
              {/* Left column */}
              <ul className="flex flex-col gap-3 sm:gap-5 md:gap-8 md:pr-12">
                {menuLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-baseline gap-2 sm:gap-3 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] sm:tracking-[0.1em] text-white/80 transition-all duration-300 hover:text-orange-400 hover:translate-x-2 ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs md:text-sm font-mono text-white/30 group-hover:text-orange-400/60 transition-colors duration-300">
                        {link.num}
                      </span>
                      <span className="hidden sm:inline-block h-px w-4 md:w-6 bg-white/20 group-hover:bg-orange-400/50 transition-all duration-300 self-center" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Vertical divider */}
              <div className="my-4 sm:my-6 h-px w-full bg-white/20 md:my-0 md:h-auto md:w-px" />

              {/* Right column */}
              <ul className="flex flex-col gap-3 sm:gap-5 md:gap-8 md:pl-12">
                {menuLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-baseline gap-2 sm:gap-3 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] sm:tracking-[0.1em] text-white/80 transition-all duration-300 hover:text-orange-400 hover:translate-x-2 ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs md:text-sm font-mono text-white/30 group-hover:text-orange-400/60 transition-colors duration-300">
                        {link.num}
                      </span>
                      <span className="hidden sm:inline-block h-px w-4 md:w-6 bg-white/20 group-hover:bg-orange-400/50 transition-all duration-300 self-center" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Footer — contact & socials */}
        <div
          className={`shrink-0 border-t border-white/10 px-6 sm:px-8 py-5 sm:py-8 transition-all duration-500 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: open ? "550ms" : "0ms" }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            {/* Contact */}
            <div className="flex flex-col gap-1 text-xs sm:text-sm text-white/60">
              <a
                href="tel:+302101234567"
                className="transition-colors hover:text-orange-400"
              >
                +30 210 123 4567
              </a>
              <a
                href="mailto:info@mastertenta.gr"
                className="transition-colors hover:text-orange-400"
              >
                info@mastertenta.gr
              </a>
              <span>Λεωφ. Αθηνών 42, Αθήνα</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-1 text-xs sm:text-sm text-white/60">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Ωρες Λειτουργιας
              </span>
              <span>Δευ — Παρ: 08:00 — 17:00</span>
              <span>Σαβ: 09:00 — 14:00</span>
            </div>

            {/* Social */}
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-[0.1em] text-white/60">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-400"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
