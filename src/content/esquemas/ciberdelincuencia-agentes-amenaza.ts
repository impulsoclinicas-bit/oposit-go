import type { Esquema } from "@/lib/temaContenido";

export const esquema: Esquema = {
  secciones: [
    {
      titulo: "Concepto de ciberdelincuencia",
      puntos: [
        "Conductas delictivas cometidas utilizando sistemas informáticos o redes como instrumento, o que tienen dichos sistemas/información como objeto del ataque.",
        "Conexión con el Código Penal (ya visto): art. 197 (descubrimiento de secretos), art. 249.1.a (estafa informática), art. 264 (daños informáticos).",
      ],
    },
    {
      titulo: "Principales técnicas y modalidades de ataque",
      puntos: [
        "Ingeniería social: manipulación psicológica para obtener información confidencial o inducir acciones que comprometan la seguridad.",
        "Phishing: suplantación de identidad de una entidad legítima para obtener credenciales o datos financieros.",
        "Ransomware: malware que cifra archivos o bloquea el sistema exigiendo un rescate.",
        "Ataques de denegación de servicio distribuido (DDoS): saturación de un sistema con tráfico masivo desde múltiples fuentes (botnets) para dejarlo inaccesible.",
      ],
    },
    {
      titulo: "Agentes de la amenaza",
      puntos: [
        "Ciberdelincuentes con motivación económica: fraude, extorsión, robo de datos para su venta.",
        "Hacktivistas: motivación ideológica, política o social.",
        "Actores estatales y grupos patrocinados por Estados: ciberespionaje, sabotaje de infraestructuras.",
        "APT (Advanced Persistent Threats): ataques sofisticados, dirigidos y sostenidos en el tiempo, orientados a la infiltración prolongada sin ser detectados.",
      ],
    },
    {
      titulo: "Marco institucional de respuesta en España",
      puntos: [
        "Centro Criptológico Nacional (CCN), adscrito al CNI: ciberseguridad de las Administraciones Públicas y entidades de interés estratégico, a través de su equipo CCN-CERT.",
        "Estrategia Nacional de Ciberseguridad y CNPIC (Centro Nacional de Protección de Infraestructuras Críticas): coordinación de la protección frente a ciberamenazas sobre infraestructuras esenciales (contenido ya visto en el tema de protección de infraestructuras críticas).",
        "Delitos informáticos del Código Penal como marco de persecución penal de estas conductas (ya visto).",
      ],
    },
  ],
};
