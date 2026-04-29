/**
 * Futuristic, brand-neutral car illustration used in the mobile mockup
 * vehicle card. Pure SVG — no external assets, no real model/brand.
 *
 * Design: side-view sleek sport coupe silhouette set against a deep blue
 * gradient background with ground glow, headlight + taillight LED strips
 * and a subtle highlight on the body. Scales to fill any container.
 */
export default function CarIllustration({
  className = '',
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 480 220"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Futuristic car illustration"
    >
      <defs>
        {/* Background — night sky / showroom floor */}
        <linearGradient id="cr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="0.55" stopColor="#0a1426" />
          <stop offset="1" stopColor="#020617" />
        </linearGradient>
        {/* Body — slate metallic */}
        <linearGradient id="cr-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#475569" />
          <stop offset="0.5" stopColor="#1f2937" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        {/* Glass — tinted */}
        <linearGradient id="cr-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0f172a" stopOpacity="0.95" />
        </linearGradient>
        {/* Headlight LED */}
        <linearGradient id="cr-led" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        {/* Ground glow */}
        <radialGradient id="cr-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#3b82f6" stopOpacity="0.08" />
          <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        {/* Wheel rim */}
        <radialGradient id="cr-rim" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#475569" />
          <stop offset="0.7" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </radialGradient>
        {/* Subtle hood highlight */}
        <linearGradient id="cr-hood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* BG */}
      <rect width="480" height="220" fill="url(#cr-bg)" />

      {/* Subtle horizontal grid lines for futuristic floor */}
      <g stroke="#3b82f6" strokeWidth="0.4" opacity="0.12">
        <line x1="0" y1="170" x2="480" y2="170" />
        <line x1="0" y1="185" x2="480" y2="185" />
        <line x1="0" y1="200" x2="480" y2="200" />
      </g>

      {/* Ambient glow halo behind car */}
      <ellipse cx="240" cy="160" rx="220" ry="60" fill="url(#cr-ground)" />

      {/* ── Car body (side view, sleek coupe) ────────────────────────── */}
      {/* Lower chassis */}
      <path
        d="M 60 158
           Q 60 144 78 140
           L 110 132
           L 150 116
           Q 200 96 252 95
           Q 318 96 358 116
           L 396 132
           L 420 140
           Q 432 144 432 158
           L 432 168
           L 60 168 Z"
        fill="url(#cr-body)"
      />

      {/* Roof/cabin curve */}
      <path
        d="M 150 116
           Q 200 88 252 87
           Q 312 88 358 116
           L 340 122
           Q 296 100 252 99
           Q 200 100 168 122 Z"
        fill="#0f172a"
      />

      {/* Glass band (windshield + side windows) */}
      <path
        d="M 168 122
           Q 200 102 252 101
           Q 308 102 340 122
           L 326 128
           Q 286 110 252 109
           Q 210 110 182 128 Z"
        fill="url(#cr-glass)"
      />

      {/* Hood highlight reflection */}
      <path
        d="M 86 150
           L 124 138
           Q 200 112 304 114
           Q 388 122 410 144
           L 410 148
           Q 384 130 304 122
           Q 200 122 124 148
           L 86 154 Z"
        fill="url(#cr-hood)"
      />

      {/* Side body accent crease */}
      <path
        d="M 96 150 L 414 150"
        stroke="#60a5fa"
        strokeWidth="0.6"
        opacity="0.55"
      />

      {/* ── Lights ────────────────────────────────────────────────────── */}
      {/* Front headlight LED strip */}
      <rect x="60" y="142" width="32" height="3" rx="1.5" fill="url(#cr-led)" />
      <rect
        x="58"
        y="146"
        width="38"
        height="2"
        rx="1"
        fill="#3b82f6"
        opacity="0.55"
      />
      {/* Headlight glow */}
      <ellipse cx="60" cy="148" rx="22" ry="6" fill="#3b82f6" opacity="0.35" />

      {/* Rear taillight strip */}
      <rect x="396" y="142" width="32" height="3" rx="1.5" fill="#ef4444" />
      <rect
        x="392"
        y="146"
        width="38"
        height="2"
        rx="1"
        fill="#ef4444"
        opacity="0.55"
      />

      {/* ── Wheels ────────────────────────────────────────────────────── */}
      {[120, 360].map((cx) => (
        <g key={cx}>
          {/* Tire */}
          <circle
            cx={cx}
            cy="168"
            r="22"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          {/* Rim */}
          <circle cx={cx} cy="168" r="14" fill="url(#cr-rim)" />
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1={cx}
              y1="168"
              x2={cx + Math.cos((deg * Math.PI) / 180) * 12}
              y2={168 + Math.sin((deg * Math.PI) / 180) * 12}
              stroke="#475569"
              strokeWidth="1.1"
            />
          ))}
          {/* Hub */}
          <circle cx={cx} cy="168" r="3" fill="#0f172a" />
          {/* Brake glow (rear wheel only) */}
          {cx === 120 && (
            <circle
              cx={cx}
              cy="168"
              r="14"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.4"
            />
          )}
        </g>
      ))}

      {/* Reflection under car */}
      <ellipse
        cx="240"
        cy="195"
        rx="160"
        ry="6"
        fill="#020617"
        opacity="0.7"
      />
      <ellipse
        cx="240"
        cy="200"
        rx="200"
        ry="3"
        fill="#3b82f6"
        opacity="0.18"
      />
    </svg>
  )
}
