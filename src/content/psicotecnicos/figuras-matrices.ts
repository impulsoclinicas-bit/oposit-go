import type { Pregunta } from "@/lib/preguntas";

// Razonamiento espacial mediante figuras que se transforman en serie y
// matrices 3x3 estilo Raven, representadas con símbolos Unicode en vez de
// imágenes (así se integran con el mismo QuizRunner de texto que el resto
// de categorías, sin necesidad de imágenes ni SVG).
export const preguntas: Pregunta[] = [
  {
    id: "fm-01",
    enunciado: "Continúa la serie: ▲ ▶ ▼ ◀ ▲ ▶ ¿?",
    opciones: ["▼", "◀", "▲", "▶"],
    correcta: 0,
    explicacion:
      "El triángulo rota 90° en sentido horario en cada término, en un ciclo de cuatro posiciones (▲→▶→▼→◀). Tras repetir ▲ y ▶ (posiciones 5 y 6), el ciclo continúa con ▼.",
  },
  {
    id: "fm-02",
    enunciado: "Continúa la serie: ↑ → ↓ ← ↑ → ¿?",
    opciones: ["↓", "←", "↑", "→"],
    correcta: 0,
    explicacion:
      "La flecha gira 90° en sentido horario en cada término, en un ciclo de cuatro posiciones (↑→→→↓→←). Tras repetir ↑ y →, el ciclo continúa con ↓.",
  },
  {
    id: "fm-03",
    enunciado: "Continúa la serie: ● ○ ● ○ ● ¿?",
    opciones: ["○", "●", "◐", "◯"],
    correcta: 0,
    explicacion: "Es una simple alternancia de dos figuras (●, ○); tras ●, siempre sigue ○.",
  },
  {
    id: "fm-04",
    enunciado: "Continúa la serie: ■ □ ■ □ ■ ¿?",
    opciones: ["□", "■", "▪", "▫"],
    correcta: 0,
    explicacion: "Alternancia simple entre ■ y □; tras ■, sigue □.",
  },
  {
    id: "fm-05",
    enunciado: "Continúa la serie: ▲ ▲▲ ▲▲▲ ▲▲▲▲ ¿?",
    opciones: ["▲▲▲▲▲", "▲▲▲", "▲▲▲▲", "△△△△△"],
    correcta: 0,
    explicacion: "El número de triángulos aumenta de uno en uno (1, 2, 3, 4); el siguiente término tiene 5.",
  },
  {
    id: "fm-06",
    enunciado: "Continúa la serie: ● ●● ●●● ●●●● ¿?",
    opciones: ["●●●●●", "●●●", "○○○○○", "●●●●"],
    correcta: 0,
    explicacion: "El número de círculos crece de uno en uno; tras 1, 2, 3 y 4, el siguiente término tiene 5.",
  },
  {
    id: "fm-07",
    enunciado: "Continúa la serie: ● ○ ●● ○○ ●●● ¿?",
    opciones: ["○○○", "●●●●", "○○", "●○●"],
    correcta: 0,
    explicacion:
      "Se alternan bloques de ● y ○ que crecen de tamaño: 1, 1, 2, 2, 3... Tras el bloque ●●● (tamaño 3), sigue un bloque de ○ del mismo tamaño: ○○○.",
  },
  {
    id: "fm-08",
    enunciado: "Continúa la serie: ■ □ ■■ □□ ■■■ □□□ ¿?",
    opciones: ["■■■■", "□□□□", "■■■", "■□■□"],
    correcta: 0,
    explicacion:
      "Igual que la serie anterior pero con cuadrados: bloques alternos de tamaño creciente 1, 1, 2, 2, 3, 3... Tras □□□, sigue un bloque de ■ de tamaño 4: ■■■■.",
  },
  {
    id: "fm-09",
    enunciado: "Continúa la serie: ↑ ↗ → ↘ ↓ ¿?",
    opciones: ["↙", "←", "↖", "↑"],
    correcta: 0,
    explicacion:
      "La flecha gira 45° en sentido horario en cada término, recorriendo las ocho direcciones (↑→↗→→→↘→↓→↙→←→↖). Tras ↓, sigue ↙.",
  },
  {
    id: "fm-10",
    enunciado: "Continúa la serie: ▲ ▲ ● ▲ ▲ ● ▲ ¿?",
    opciones: ["▲", "●", "▲▲", "●●"],
    correcta: 0,
    explicacion:
      "Se repite el bloque \"▲ ▲ ●\" cada tres términos. El séptimo término (▲) inicia un nuevo bloque, así que el siguiente es la segunda posición del bloque: otro ▲.",
  },
  {
    id: "fm-11",
    enunciado: "Continúa la serie: ■ ● ● ■ ● ● ■ ¿?",
    opciones: ["●", "■", "●●", "■■"],
    correcta: 0,
    explicacion:
      "Se repite el bloque \"■ ● ●\" cada tres términos. El séptimo término (■) inicia un nuevo bloque, así que el siguiente es la segunda posición del bloque: ●.",
  },
  {
    id: "fm-12",
    enunciado: "Continúa la serie: ◆ ◇◇ ◆◆◆ ◇◇◇◇ ¿?",
    opciones: ["◆◆◆◆◆", "◇◇◇◇◇", "◆◆◆◆", "◇◆◇◆◇"],
    correcta: 0,
    explicacion:
      "La figura alterna entre ◆ y ◇ en cada término, y el número de símbolos crece de uno en uno (1, 2, 3, 4). El quinto término toca ◆ con 5 símbolos: ◆◆◆◆◆.",
  },
  {
    id: "fm-13",
    enunciado: "Continúa la serie: ★ ☆ ☆ ★ ★ ★ ☆ ☆ ☆ ☆ ¿?",
    opciones: ["★★★★★", "☆☆☆☆☆", "★★★★", "☆★☆★☆"],
    correcta: 0,
    explicacion:
      "Bloques alternos de ★ y ☆ de tamaño creciente: 1, 2, 3, 4... Tras el bloque ☆☆☆☆ (tamaño 4), sigue un bloque de ★ de tamaño 5: ★★★★★.",
  },
  {
    id: "fm-14",
    enunciado: "Continúa la serie: ◀ ▶ ◀ ▶ ◀ ¿?",
    opciones: ["▶", "◀", "▲", "▼"],
    correcta: 0,
    explicacion: "Alternancia simple entre ◀ y ▶; tras ◀, sigue ▶.",
  },
  {
    id: "fm-15",
    enunciado: "Continúa la serie: ◆ ◇ ◇ ◆ ◇ ◇ ◆ ¿?",
    opciones: ["◇", "◆", "◇◇", "◆◆"],
    correcta: 0,
    explicacion:
      "Se repite el bloque \"◆ ◇ ◇\" cada tres términos. El séptimo término (◆) inicia un nuevo bloque, así que el siguiente es la segunda posición del bloque: ◇.",
  },
  {
    id: "fm-16",
    enunciado: "¿Qué figura completa la matriz?\n▲ ▲▲ ▲▲▲\n● ●● ●●●\n■ ■■ ¿?",
    opciones: ["■■■", "■■", "■■■■", "●●●"],
    correcta: 0,
    explicacion:
      "Cada fila mantiene su propia figura y el número de símbolos crece 1, 2, 3 de izquierda a derecha. La tercera fila (■) sigue el mismo patrón: la casilla que falta es ■■■.",
  },
  {
    id: "fm-17",
    enunciado: "¿Qué figura completa la matriz?\n▲ ▶ ▼\n▶ ▼ ◀\n▼ ◀ ¿?",
    opciones: ["▲", "▶", "▼", "◀"],
    correcta: 0,
    explicacion:
      "Cada fila continúa el ciclo de rotación ▲→▶→▼→◀→▲... La tercera fila empieza en ▼, sigue con ◀, y la casilla que falta retoma el ciclo con ▲.",
  },
  {
    id: "fm-18",
    enunciado: "¿Qué figura completa la matriz?\n● ○ ●\n○ ● ○\n● ○ ¿?",
    opciones: ["●", "○", "●●", "○○"],
    correcta: 0,
    explicacion:
      "La matriz forma un patrón de tablero de ajedrez, alternando ● y ○ tanto en filas como en columnas. La tercera fila sigue ●, ○, así que la casilla que falta es ●.",
  },
  {
    id: "fm-19",
    enunciado: "¿Qué figura completa la matriz?\n★ ★★ ★★★\n☆ ☆☆ ☆☆☆\n★ ★★ ¿?",
    opciones: ["★★★", "☆☆☆", "★★", "★★★★"],
    correcta: 0,
    explicacion:
      "Cada fila mantiene su figura (★ o ☆) y el número de símbolos crece 1, 2, 3. La tercera fila (★) sigue el mismo patrón: falta ★★★.",
  },
  {
    id: "fm-20",
    enunciado: "¿Qué figura completa la matriz?\n○ ● ●\n● ○ ●\n● ● ¿?",
    opciones: ["○", "●", "○○", "●●"],
    correcta: 0,
    explicacion:
      "En cada fila hay dos ● y un ○, y la posición del ○ se desplaza una casilla a la derecha en cada fila (columna 1, columna 2, columna 3). En la tercera fila, el ○ debe estar en la tercera columna.",
  },
  {
    id: "fm-21",
    enunciado: "¿Qué figura completa la matriz?\n↑ ↗ →\n↗ → ↘\n→ ↘ ¿?",
    opciones: ["↓", "↙", "←", "↑"],
    correcta: 0,
    explicacion:
      "Cada fila continúa el ciclo de rotación de 45° (↑→↗→→→↘→↓...). La tercera fila empieza en →, sigue con ↘, y la casilla que falta continúa el ciclo con ↓.",
  },
  {
    id: "fm-22",
    enunciado: "¿Qué figura completa la matriz?\n◆ ◇ ◆\n◆◆ ◇◇ ◆◆\n◆◆◆ ◇◇◇ ¿?",
    opciones: ["◆◆◆", "◇◇◇", "◆◆◆◆", "◇◇"],
    correcta: 0,
    explicacion:
      "Las columnas 1 y 3 son siempre ◆ y la columna 2 siempre ◇; el número de símbolos de cada casilla coincide con el número de fila (1, 2, 3). En la fila 3, la columna 3 debe tener 3 símbolos de ◆: ◆◆◆.",
  },
  {
    id: "fm-23",
    enunciado: "¿Qué figura completa la matriz?\n■ □ ■\n□ ■ □\n■ □ ¿?",
    opciones: ["■", "□", "■■", "□□"],
    correcta: 0,
    explicacion:
      "Patrón de tablero de ajedrez con cuadrados: alterna ■ y □ en filas y columnas. La tercera fila sigue ■, □, así que falta ■.",
  },
  {
    id: "fm-24",
    enunciado: "¿Qué figura completa la matriz?\n▲ ● ■\n● ■ ▲\n■ ▲ ¿?",
    opciones: ["●", "■", "▲", "○"],
    correcta: 0,
    explicacion:
      "Cada fila es la anterior desplazada una posición hacia la izquierda, pasando el primer elemento al final (▲,●,■ → ●,■,▲ → ■,▲,●). La tercera fila (■,▲,?) continúa ese desplazamiento: falta ●.",
  },
  {
    id: "fm-25",
    enunciado: "¿Qué figura completa la matriz?\n○ ○○ ○○○\n▲ ▲▲ ▲▲▲\n□ □□ ¿?",
    opciones: ["□□□", "□□", "○○○", "■■■"],
    correcta: 0,
    explicacion:
      "Cada fila mantiene su figura (○, ▲ o □) y el número de símbolos crece 1, 2, 3. La tercera fila (□) sigue el mismo patrón: falta □□□.",
  },
  {
    id: "fm-26",
    enunciado: "¿Qué figura completa la matriz?\n◇ ◆ ◇\n◆ ◇ ◆\n◇ ◆ ¿?",
    opciones: ["◇", "◆", "◇◇", "◆◆"],
    correcta: 0,
    explicacion:
      "Patrón de tablero de ajedrez con diamantes: alterna ◇ y ◆ en filas y columnas. La tercera fila sigue ◇, ◆, así que falta ◇.",
  },
  {
    id: "fm-27",
    enunciado: "¿Qué figura completa la matriz?\n↑ ↓ ↑\n↓ ↑ ↓\n↑ ↓ ¿?",
    opciones: ["↑", "↓", "→", "←"],
    correcta: 0,
    explicacion:
      "Patrón de tablero de ajedrez con flechas verticales: alterna ↑ y ↓ en filas y columnas. La tercera fila sigue ↑, ↓, así que falta ↑.",
  },
  {
    id: "fm-28",
    enunciado: "¿Qué figura completa la matriz?\n★ ○ ★\n★★ ○○ ★★\n★★★ ○○○ ¿?",
    opciones: ["★★★", "○○○", "★★★★", "○○"],
    correcta: 0,
    explicacion:
      "Las columnas 1 y 3 son siempre ★ y la columna 2 siempre ○; el número de símbolos coincide con el número de fila. En la fila 3, la columna 3 debe tener 3 símbolos de ★: ★★★.",
  },
  {
    id: "fm-29",
    enunciado: "¿Qué figura completa la matriz?\n↑ → ↓\n→ ↓ ↑\n↓ ↑ ¿?",
    opciones: ["→", "↑", "↓", "←"],
    correcta: 0,
    explicacion:
      "Cada fila es la anterior desplazada una posición a la izquierda, con el primer elemento pasando al final (↑,→,↓ → →,↓,↑ → ↓,↑,?). La casilla que falta continúa ese desplazamiento: →.",
  },
  {
    id: "fm-30",
    enunciado: "¿Qué figura completa la matriz?\n▪ ▪▪ ▪▪▪\n▫ ▫▫ ▫▫▫\n▪ ▪▪ ¿?",
    opciones: ["▪▪▪", "▫▫▫", "▪▪", "▪▪▪▪"],
    correcta: 0,
    explicacion:
      "Cada fila mantiene su figura (▪ o ▫) y el número de símbolos crece 1, 2, 3 de izquierda a derecha. La tercera fila (▪) sigue el mismo patrón: falta ▪▪▪.",
  },
];
