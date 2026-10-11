import type { Thumb as Kind } from "@/data/profile";

/**
 * Small line drawings that hint at what each project does.
 * Purely decorative: hidden from screen readers because the card text says it all.
 */
const L = { stroke: "var(--thumb-line)", strokeWidth: 2.2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;
const S = { fill: "var(--thumb-soft)" } as const;

function Art({ kind }: { kind: Kind }) {
  switch (kind) {
    case "gpu": // capacity dots on a map, with three highlighted data centres
      return (
        <>
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 12 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={20 + c * 11} cy={22 + r * 11} r={1.6} {...S} />
            )),
          )}
          <circle cx={42} cy={44} r={7} {...L} />
          <circle cx={97} cy={33} r={5} {...L} />
          <circle cx={119} cy={66} r={9} {...L} />
          <path d="M42 44 97 33 119 66" {...L} strokeDasharray="3 4" />
        </>
      );
    case "video": // film frames feeding a render bar
      return (
        <>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={18 + i * 42} y={20} width={36} height={28} rx={4} {...L} />
          ))}
          <path d="M33 30v8l7-4z" fill="var(--thumb-line)" />
          <rect x={18} y={64} width={120} height={8} rx={4} {...S} />
          <rect x={18} y={64} width={78} height={8} rx={4} fill="var(--thumb-line)" />
        </>
      );
    case "chat": // two speech bubbles from different models
      return (
        <>
          <rect x={18} y={16} width={84} height={26} rx={10} {...L} />
          <path d="M30 42l-4 9 12-9" {...L} />
          <rect x={58} y={52} width={84} height={30} rx={10} {...S} />
          <path d="M70 64h56M70 72h36" {...L} />
          <path d="M30 29h40" {...L} />
        </>
      );
    case "parts": // warehouse shelves with stock and a gap
      return (
        <>
          <path d="M20 30h120M20 56h120M20 82h120M24 18v68M136 18v68" {...L} />
          {[30, 48, 66, 102, 120].map((x) => (
            <rect key={x} x={x} y={18} width={12} height={10} rx={2} {...S} />
          ))}
          {[30, 48, 84].map((x) => (
            <rect key={x} x={x} y={44} width={12} height={10} rx={2} {...S} />
          ))}
          <rect x={102} y={42} width={14} height={12} rx={2} {...L} strokeDasharray="3 3" />
          {[30, 66, 84, 120].map((x) => (
            <rect key={x} x={x} y={70} width={12} height={10} rx={2} {...S} />
          ))}
        </>
      );
    case "mail": // envelope next to an editable template
      return (
        <>
          <rect x={18} y={26} width={58} height={42} rx={5} {...L} />
          <path d="m20 29 27 21 27-21" {...L} />
          <rect x={90} y={16} width={52} height={68} rx={5} {...L} />
          <rect x={98} y={24} width={36} height={14} rx={2} {...S} />
          <path d="M98 48h36M98 56h28M98 64h32" {...L} />
          <rect x={98} y={72} width={18} height={6} rx={3} fill="var(--thumb-line)" />
        </>
      );
    case "rooms": // a live room: host in the middle, listeners around
      return (
        <>
          <circle cx={80} cy={50} r={14} {...L} />
          <circle cx={80} cy={50} r={22} {...L} strokeDasharray="2 5" />
          {[
            [38, 26],
            [122, 26],
            [34, 74],
            [126, 74],
            [80, 88],
          ].map(([x, y]) => (
            <circle key={`${x}${y}`} cx={x} cy={y} r={7} {...S} />
          ))}
        </>
      );
    case "pulse": // a heart-rate line across a chart grid
      return (
        <>
          <path d="M18 80h124M18 20v60" {...L} strokeWidth={1.5} />
          {[40, 60].map((y) => (
            <path key={y} d={`M18 ${y}h124`} stroke="var(--thumb-soft)" strokeWidth={1} />
          ))}
          <path d="M20 58h30l7-22 10 40 9-30 6 12h56" {...L} />
        </>
      );
    case "graph": // a calculation graph: nodes wired into an output
      return (
        <>
          <rect x={16} y={18} width={30} height={18} rx={4} {...S} />
          <rect x={16} y={62} width={30} height={18} rx={4} {...S} />
          <rect x={66} y={40} width={30} height={18} rx={4} {...L} />
          <rect x={116} y={40} width={30} height={18} rx={4} fill="var(--thumb-line)" />
          <path d="M46 27c12 0 8 22 20 22M46 71c12 0 8-22 20-22M96 49h20" {...L} />
        </>
      );
    default: // a generic window
      return (
        <>
          <rect x={18} y={16} width={124} height={68} rx={6} {...L} />
          <path d="M18 30h124" {...L} />
          <rect x={28} y={40} width={44} height={34} rx={4} {...S} />
          <path d="M84 44h46M84 54h38M84 64h42" {...L} />
        </>
      );
  }
}

export function Thumb({ kind }: { kind: Kind }) {
  return (
    <svg className="thumb" viewBox="0 0 160 100" aria-hidden="true" focusable="false">
      <Art kind={kind} />
    </svg>
  );
}
