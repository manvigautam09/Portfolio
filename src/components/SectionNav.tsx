"use client";

import { useEffect, useState } from "react";

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Tech stack" },
  { id: "contact", label: "Contact" },
] as const;

/** Desktop table of contents that marks the section currently in view. */
export function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="toc" aria-label="Sections">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
