// Emblema de marca (no es el escudo oficial del CNP): escudo con estrella
// de cinco puntas y una rama de laurel a cada lado, en los dos colores de
// marca. Es un logotipo con colores fijos (no "currentColor") pensado para
// funcionar igual sobre fondo claro u oscuro gracias al propio contraste
// del escudo.
export function PoliceBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M28 70 Q18 66 15 56 Q22 60 27 58" />
        <path d="M24 60 Q15 55 13 45 Q20 50 25 48" />
        <path d="M21 49 Q13 43 12 33 Q19 39 23 38" />
      </g>
      <g stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" fill="none">
        <path d="M72 70 Q82 66 85 56 Q78 60 73 58" />
        <path d="M76 60 Q85 55 87 45 Q80 50 75 48" />
        <path d="M79 49 Q87 43 88 33 Q81 39 77 38" />
      </g>

      <path
        d="M50 6 L88 21 V47 C88 70 72 87 50 94 C28 87 12 70 12 47 V21 Z"
        fill="#0f2140"
        stroke="#fbbf24"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <path
        d="M50 14 L79 25.5 V47 C79 65 66 79 50 85 C34 79 21 65 21 47 V25.5 Z"
        fill="none"
        stroke="#f59e0b"
        strokeOpacity="0.55"
        strokeWidth="1"
      />

      <polygon
        points="50,32 53.82,42.74 65.22,43.06 56.18,50.01 59.40,60.94 50,54.5 40.60,60.94 43.82,50.01 34.78,43.06 46.18,42.74"
        fill="#fbbf24"
        stroke="#b45309"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
