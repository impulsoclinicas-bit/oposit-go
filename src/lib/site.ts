export const siteConfig = {
  name: "Oposit&go",
  legalName: "Oposit&go",
  tagline: "Prepara la oposición a Policía Nacional desde el móvil",
  description:
    "Oposit&go es la plataforma de preparación online para la oposición a Policía Nacional (Escala Básica): baterías de preguntas por tema, simulacros tipo test y esquemas y resúmenes actualizados cada convocatoria, por suscripción mensual.",
  url: "https://www.oposit-go.es",
  // TODO: sustituir por una bandeja real que controléis antes de publicar
  // (este dominio de ejemplo no recibe correo).
  email: "contacto@oposit-go.es",
  locale: "es_ES",
  country: "España",
  areaServed: "España",
  sameAs: [] as string[],
  precioMensualEur: 9.99,
};

// `gated: true` marca las secciones que solo puede usar un alumno con
// suscripción activa; el resto es accesible para cualquier visitante.
export const mainNav = [
  { href: "/", label: "Inicio", gated: false },
  { href: "/convocatoria", label: "Convocatoria", gated: false },
  { href: "/recursos", label: "Recursos gratis", gated: false },
  { href: "/temario", label: "Temario", gated: true },
  { href: "/psicotecnicos", label: "Psicotécnicos", gated: true },
  { href: "/simulacros", label: "Simulacros", gated: true },
  { href: "/precios", label: "Precios", gated: false },
  { href: "/contacto", label: "Contacto", gated: false },
];
