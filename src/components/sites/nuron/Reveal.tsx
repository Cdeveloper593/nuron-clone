"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper replicating the source's SAL (scroll animation library)
 * behaviour: elements start hidden/translated and animate in when they enter
 * the viewport, honouring data-sal-* delay/duration values.
 */
export function Reveal({
  children,
  sal = "slide-up",
  delay = 0,
  duration = 700,
  className = "",
}: {
  children: ReactNode;
  sal?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom-in" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("sal-animate");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-sal={sal}
      className={className}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
