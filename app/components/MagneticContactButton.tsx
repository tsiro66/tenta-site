"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import Link from "next/link";

type Variant = "contact" | "cta";

interface BaseProps {
  variant?: Variant;
  showArrow?: boolean;
}

interface LinkProps extends BaseProps {
  as?: "link";
  href?: string;
  disabled?: never;
  type?: never;
  children?: never;
}

interface ButtonProps extends BaseProps {
  as: "button";
  type?: "submit" | "button";
  disabled?: boolean;
  children?: ReactNode;
  href?: never;
}

type MagneticContactButtonProps = LinkProps | ButtonProps;

const config: Record<Variant, { label: string; href: string }> = {
  contact: { label: "Επικοινωνία", href: "/#contact" },
  cta: { label: "ΔΕΣ ΠΕΡΙΣΣΟΤΕΡΑ", href: "#" },
};

function ArrowIcon() {
  return (
    <span className="ml-2 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400 transition-transform duration-300 group-hover:-rotate-45"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function MagneticContactButton(props: MagneticContactButtonProps) {
  const { variant = "contact", showArrow } = props;
  const isButton = props.as === "button";
  const hasArrow = showArrow ?? variant === "cta";
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const STRENGTH = 0.35; // how much button follows cursor (0–1)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) * STRENGTH,
        y: (e.clientY - cy) * STRENGTH,
      });
    },
    [STRENGTH],
  );

  const handleMouseEnter = useCallback(() => setActive(true), []);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative z-50 flex items-center justify-center p-4 -m-4"
    >
      {(() => {
        const className = `group relative inline-flex items-center rounded-full font-medium text-white transition-all duration-300 ease-in-out hover:scale-110 bg-orange-400 hover:bg-orange-500 disabled:opacity-60 disabled:hover:scale-100 ${
          hasArrow
            ? "pl-5 pr-2 py-2.5 sm:pl-7 sm:pr-2.5 sm:py-3 text-sm sm:text-base tracking-[0.08em]"
            : "px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm tracking-[0.05em]"
        }`;
        const style = {
          translate: `${offset.x}px ${offset.y}px`,
          transition: active
            ? "translate 0.15s ease-out, background-color 0.3s, scale 0.3s"
            : "translate 0.4s ease-out, background-color 0.3s, scale 0.3s",
        };
        const inner = (
          <>
            {isButton && props.children ? props.children : config[variant].label}
            {hasArrow && <ArrowIcon />}
          </>
        );

        if (isButton) {
          return (
            <button
              type={props.type ?? "button"}
              disabled={props.disabled}
              className={className}
              style={style}
            >
              {inner}
            </button>
          );
        }

        return (
          <Link
            href={props.href ?? config[variant].href}
            className={className}
            style={style}
          >
            {inner}
          </Link>
        );
      })()}
    </div>
  );
}
