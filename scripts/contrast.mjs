// Checks every colour pairing the site uses against WCAG 2.2 AA.
// Run: npm run check:contrast
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const block = (sel) => {
  const i = css.indexOf(sel + " {");
  const body = css.slice(i, css.indexOf("}", i));
  return Object.fromEntries([...body.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [m[1], m[2]]));
};
const themes = { light: block(":root"), dark: block(':root[data-theme="dark"]') };

const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// [foreground, background, minimum, what it's used for]
const pairs = [
  ["text", "bg", 4.5, "headings and body on page"],
  ["text", "surface", 4.5, "text on hovered cards"],
  ["text", "surface-hover", 4.5, "text on hover states"],
  ["muted", "bg", 4.5, "body copy"],
  ["muted", "surface", 4.5, "body copy on cards"],
  ["accent-text", "bg", 4.5, "link hover"],
  ["accent-text", "surface", 4.5, "link hover on cards"],
  ["chip-text", "chip-bg", 4.5, "technology chips"],
  ["bg", "accent", 4.5, "primary button label"],
  ["bg", "accent-text", 4.5, "primary button label, hover"],
  ["accent", "bg", 3, "nav indicator, list markers"],
  ["border-strong", "bg", 3, "theme toggle border, table rules"],
  ["focus", "bg", 3, "focus ring"],
  ["focus", "surface", 3, "focus ring on cards"],
];

let failed = 0;
for (const [name, t] of Object.entries(themes)) {
  console.log(`\n${name} theme`);
  for (const [fg, bg, min, use] of pairs) {
    const r = ratio(t[fg], t[bg]);
    const ok = r >= min;
    if (!ok) failed++;
    console.log(`${ok ? "pass" : "FAIL"}  ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${fg} on ${bg}  — ${use}`);
  }
}
if (failed) {
  console.error(`\n${failed} pairing(s) below WCAG AA.`);
  process.exit(1);
}
console.log("\nAll pairings meet WCAG AA.");
