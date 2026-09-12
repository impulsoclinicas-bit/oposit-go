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
  // Datos del titular real (persona física / autónomo), obligatorios en el
  // aviso legal (art. 10 LSSICE) antes de operar comercialmente. Como
  // autónomo no hace falta CIF (eso es solo para sociedades): el NIF que
  // exige la ley es tu DNI. Rellena estos tres campos con tus datos reales
  // antes de lanzar — mientras estén vacíos, el aviso legal lo señala.
  titularNombre: "", // Nombre y apellidos completos, tal como figuran en el DNI
  titularNif: "", // Tu DNI (con letra), como NIF de persona física
  titularDomicilio: "", // Domicilio fiscal completo (calle, número, CP, localidad, provincia)
  precioMensualEur: 9.99,
  // Pago único del pase de simulacros ilimitados (sin suscripción), válido
  // hasta la fecha de la convocatoria vigente (ver FECHA_EXAMEN_OFICIAL).
  precioPaseSimulacrosEur: 79.99,
  // Precio por cada tema atrasado del pase de "ponerse al día" (ver
  // `getTemasAtrasados` en `desbloqueo.ts`): quien se apunta tarde puede
  // pagar esto por cada tema que el calendario compartido ya haya abierto
  // antes de su alta, para acceder también a esos temas.
  precioPorTemaAtrasadoEur: 1.5,
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
