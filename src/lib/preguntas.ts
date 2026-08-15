export type Pregunta = {
  id: string;
  enunciado: string;
  opciones: [string, string, string, string];
  correcta: 0 | 1 | 2 | 3;
  explicacion: string;
};
