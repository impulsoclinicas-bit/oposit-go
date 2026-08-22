// Ilustración decorativa de un coche patrulla estilizado (silueta genérica,
// no un vehículo real de ningún cuerpo). Aporta el "toque policial" visual
// que pide la marca sin depender de fotografías de terceros.
export function PatrolCar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="110" cy="96" rx="95" ry="8" fill="#000" opacity="0.12" />

      <path
        d="M20 78 C20 60 30 58 42 56 L54 40 C58 34 66 30 74 30 H150 C160 30 168 34 172 42 L182 56 C196 58 202 64 202 78 V84 C202 88 198 90 194 90 H26 C22 90 20 88 20 84 Z"
        fill="#0f2140"
        stroke="#081326"
        strokeWidth="2"
      />
      <path
        d="M64 56 L74 40 H108 V56 Z"
        fill="#eef4fc"
        stroke="#081326"
        strokeWidth="1.5"
      />
      <path
        d="M112 40 H150 C155 40 160 42 163 46 L172 56 H112 Z"
        fill="#eef4fc"
        stroke="#081326"
        strokeWidth="1.5"
      />

      <rect x="20" y="66" width="182" height="10" fill="#fbbf24" opacity="0.9" />

      <rect x="88" y="18" width="44" height="14" rx="3" fill="#0f2140" stroke="#081326" strokeWidth="1.5" />
      <rect x="90" y="20" width="18" height="10" rx="2" fill="#2563eb" />
      <rect x="110" y="20" width="18" height="10" rx="2" fill="#dc2626" />

      <circle cx="56" cy="90" r="14" fill="#081326" />
      <circle cx="56" cy="90" r="6" fill="#b3cdef" />
      <circle cx="168" cy="90" r="14" fill="#081326" />
      <circle cx="168" cy="90" r="6" fill="#b3cdef" />
    </svg>
  );
}
