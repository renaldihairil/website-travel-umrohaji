"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Arah masuk: "up" (default), "left", "right", "zoom" */
  variant?: "up" | "left" | "right" | "zoom";
  as?: ElementType;
};

/**
 * Reveal-on-scroll: elemen muncul saat masuk viewport.
 * Menghormati prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    // Cek langsung: elemen yang sudah berada di viewport saat mount langsung tampil
    const isInView = () => {
      const rect = node.getBoundingClientRect();
      const viewport =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewport - 40 && rect.bottom > 0;
    };

    if (isInView()) {
      setVisible(true);
      return;
    }

    let timer: ReturnType<typeof setInterval> | null = null;

    const cleanup = () => {
      observer.disconnect();
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const onScroll = () => {
      if (isInView()) {
        setVisible(true);
        cleanup();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            cleanup();
            return;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Jaring pengaman bila event rendering tertunda
    timer = setInterval(onScroll, 400);

    return cleanup;
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "zoom"
          ? "reveal-zoom"
          : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
