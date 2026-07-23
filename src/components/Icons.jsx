// Lightweight inline SVG icons (stroke-based, 24x24). Kept dependency-free.
const base = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round',
}

export const Icon = ({ name, ...props }) => {
  const paths = {
    sparkles: <><path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5 10.1 7.6z" /><path d="M18.5 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" /></>,
    brain: <><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 4 2.8" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-4 2.8" /><path d="M9 4a2 2 0 0 1 3 1.7V19" /><path d="M15 4a2 2 0 0 0-3 1.7" /></>,
    bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10H12z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" /></>,
    shield: <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />,
    apps: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4" /></>,
    check: <path d="M4 12l5 5L20 6" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
    caret: <path d="M6 9l6 6 6-6" />,
    play: <path d="M8 5v14l11-7z" />,
    windows: <><path d="M4 6l7-1v6H4z" /><path d="M13 4.7 20 4v7h-7z" /><path d="M4 12h7v6l-7-1z" /><path d="M13 12h7v7l-7-1z" /></>,
    android: <><path d="M6 13a6 6 0 0 1 12 0" /><path d="M4 13v5" /><path d="M20 13v5" /><path d="M8 8 6.5 6M16 8l1.5-2" /><circle cx="9.5" cy="11" r=".6" fill="currentColor" /><circle cx="14.5" cy="11" r=".6" fill="currentColor" /></>,
    fingerprint: <><path d="M12 4a7 7 0 0 1 7 7v2" /><path d="M5 13v-2a7 7 0 0 1 3-5.7" /><path d="M12 8a3 3 0 0 1 3 3v3a4 4 0 0 0 .5 2" /><path d="M9 11a3 3 0 0 1 3-3" /><path d="M9 12v2a5 5 0 0 0 1 3" /><path d="M12 12v3a6 6 0 0 0 .6 2.6" /></>,
  }
  return <svg {...base} {...props}>{paths[name]}</svg>
}

// Filled marks (own fill, no stroke)
export const AppleLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 384 512" width="15" height="17" fill="currentColor" aria-hidden>
    <path d="M318.7 268c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.6zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
)

// Leesha's Kitchen mark — dark disc with a serif "L" in mint.
export const BrandLogo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
    <circle cx="16" cy="16" r="15" fill="#151310" />
    <text
      x="16"
      y="22"
      textAnchor="middle"
      fontFamily="Fraunces, Georgia, serif"
      fontWeight="500"
      fontSize="18"
      fill="#7ee0b0"
    >L</text>
  </svg>
)
