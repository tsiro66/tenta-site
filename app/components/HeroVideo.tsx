"use client";

import { useEffect, useRef, useState } from "react";
import MagneticContactButton from "./MagneticContactButton";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced-motion preference — pause video, show first frame
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      video.pause();
      setIsLoaded(true);
      return;
    }

    const handleCanPlay = () => setIsLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    // Handle cached video (already buffered)
    if (video.readyState >= 3) {
      setIsLoaded(true);
    }

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <section
      className="sticky top-0 w-full overflow-hidden bg-black h-svh"
    >
      {/*
        h-[56.25vw]  = 16:9 ratio by default (9/16 = 0.5625) — prevents CLS
        min-h-[60vh] = never too short on portrait mobile
        max-h-svh    = never taller than viewport (svh = safe viewport, handles mobile browser chrome)
      */}

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/bg-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for contrast if content layered on top later */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* CTA — bottom right */}
      <div
        className={`absolute bottom-8 right-8 sm:bottom-12 sm:right-12 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <MagneticContactButton variant="cta" />
      </div>
    </section>
  );
}
