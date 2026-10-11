"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the choice lasts for this visit only */
    }
    setTheme(next);
  }

  // Render a stable placeholder on the server so the label never mismatches.
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme ? `Switch to ${next} theme` : "Switch colour theme"}
      title={theme ? `Switch to ${next} theme` : "Switch colour theme"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/** Runs before paint so a stored choice never flashes the wrong theme. */
export const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
