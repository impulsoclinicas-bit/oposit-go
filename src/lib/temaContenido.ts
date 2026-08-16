// Tipos de contenido de repaso (esquema y resumen) para cada tema. Ambos son
// opcionales: si un tema no tiene entrada en el registro, la página de tema
// muestra el aviso de "próximamente disponible".

export type SeccionEsquema = {
  titulo: string;
  puntos: string[];
};

export type Esquema = {
  secciones: SeccionEsquema[];
};

export type Resumen = {
  parrafos: string[];
};
