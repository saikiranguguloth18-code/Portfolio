"use client";
import { useEffect, PropsWithChildren } from "react";

export default function ScrollSections({ children }: PropsWithChildren) {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
