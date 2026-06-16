export default function KuficOrnament({ className = '', opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 380 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Orange glow backdrop */}
      <ellipse cx="190" cy="130" rx="170" ry="110" fill="#C96A1B" opacity="0.06" />

      {/* Abstract Kufic-inspired angular letterforms */}
      {/* Large vertical stroke — Alef-like */}
      <rect x="48" y="20" width="14" height="180" rx="2" fill="#C96A1B" opacity="0.9" />
      <rect x="48" y="20" width="14" height="14" rx="0" fill="#E88A2E" />

      {/* Horizontal baseline stroke */}
      <rect x="48" y="190" width="120" height="8" rx="2" fill="#C96A1B" opacity="0.85" />

      {/* Vertical descending right stroke */}
      <rect x="160" y="80" width="12" height="120" rx="2" fill="#C96A1B" opacity="0.8" />

      {/* Cross-bar horizontal */}
      <rect x="48" y="95" width="90" height="7" rx="2" fill="#C96A1B" opacity="0.75" />

      {/* Second cluster — flowing strokes */}
      <rect x="210" y="30" width="12" height="160" rx="2" fill="#E88A2E" opacity="0.85" />
      <rect x="210" y="30" width="12" height="12" rx="0" fill="#E88A2E" />
      <rect x="210" y="186" width="95" height="8" rx="2" fill="#C96A1B" opacity="0.8" />

      {/* Short vertical strokes — Waw/Ra-like */}
      <rect x="265" y="90" width="10" height="105" rx="2" fill="#C96A1B" opacity="0.7" />
      <rect x="305" y="60" width="10" height="136" rx="2" fill="#C96A1B" opacity="0.65" />

      {/* Decorative dots — harakat style */}
      <circle cx="55" cy="12" r="5" fill="#E88A2E" opacity="0.9" />
      <circle cx="217" cy="22" r="4" fill="#E88A2E" opacity="0.85" />
      <circle cx="270" cy="82" r="3.5" fill="#C96A1B" opacity="0.7" />
      <circle cx="312" cy="52" r="3" fill="#C96A1B" opacity="0.6" />
      <circle cx="165" cy="72" r="3.5" fill="#E88A2E" opacity="0.75" />

      {/* Small diacritic marks floating */}
      <ellipse cx="78" cy="8" rx="3" ry="2" fill="#E88A2E" opacity="0.6" />
      <ellipse cx="100" cy="88" rx="4" ry="2.5" fill="#C96A1B" opacity="0.5" transform="rotate(-15 100 88)" />
      <ellipse cx="240" cy="170" rx="3.5" ry="2" fill="#E88A2E" opacity="0.55" transform="rotate(10 240 170)" />

      {/* Kufi angular ornament — geometric connector */}
      <path
        d="M 48 52 L 80 52 L 80 62 L 62 62 L 62 82 L 52 82 L 52 62 L 48 62 Z"
        fill="#C96A1B"
        opacity="0.7"
      />

      {/* Secondary ornament — step pattern */}
      <path
        d="M 210 120 L 250 120 L 250 128 L 228 128 L 228 148 L 220 148 L 220 128 L 210 128 Z"
        fill="#C96A1B"
        opacity="0.6"
      />

      {/* Thin connecting strokes */}
      <line x1="62" y1="95" x2="62" y2="195" stroke="#C96A1B" strokeWidth="2.5" opacity="0.5" />
      <line x1="138" y1="102" x2="138" y2="198" stroke="#C96A1B" strokeWidth="2" opacity="0.4" />
      <line x1="222" y1="128" x2="222" y2="194" stroke="#C96A1B" strokeWidth="2" opacity="0.45" />

      {/* Top right small calligraphic element */}
      <rect x="330" y="28" width="8" height="70" rx="2" fill="#C96A1B" opacity="0.5" />
      <rect x="320" y="94" width="30" height="5" rx="1.5" fill="#C96A1B" opacity="0.45" />
      <circle cx="334" cy="21" r="4" fill="#E88A2E" opacity="0.55" />

      {/* Shimmer accent on main strokes */}
      <rect x="50" y="20" width="4" height="60" rx="2" fill="#E88A2E" opacity="0.4" />
      <rect x="212" y="30" width="4" height="50" rx="2" fill="#E88A2E" opacity="0.35" />
    </svg>
  );
}
