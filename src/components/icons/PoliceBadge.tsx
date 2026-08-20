// Insignia decorativa (no es el escudo oficial del CNP) usada como motivo
// visual de marca. Trazo simple en "currentColor" para heredar el color del
// contenedor y funcionar igual de bien sobre fondo claro u oscuro.
export function PoliceBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 4 L90 20 V48 C90 72 73 90 50 97 C27 90 10 72 10 48 V20 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 15 L79 27 V48 C79 66 67 79 50 85 C33 79 21 66 21 48 V27 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeLinejoin="round"
      />
      <path
        d="M50 30 L61 36 V50 L50 65 L39 50 V36 Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path
        d="M50 30 L61 36 V50 L50 65 L39 50 V36 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
