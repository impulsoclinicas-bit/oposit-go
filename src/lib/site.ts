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

export const mainNav = [
  { href: "/", label: "Inicio" },
  { href: "/convocatoria", label: "Convocatoria" },
  { href: "/recursos", label: "Pruébanos" },
  { href: "/temario", label: "Temario" },
  { href: "/psicotecnicos", label: "Psicotécnicos" },
  { href: "/simulacros", label: "Simulacros" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
];
