// Franja a cuadros estilo "sillitoe tartan" (el damero blanco y negro que
// usan muchos cuerpos de policía) reinterpretada en los colores de marca,
// como remate decorativo de sección.
export function PoliceStripe({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-conic-gradient(var(--color-brand-950) 0% 25%, var(--color-accent-400) 0% 50%)",
        backgroundSize: "12px 12px",
      }}
    />
  );
}
