// Fisher–Yates. No usar para nada sensible a criptografía: es solo para
// variar el orden de preguntas/opciones en los tests.
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function sample<T>(items: T[], count: number): T[] {
  if (items.length <= count) return shuffle(items);
  return shuffle(items).slice(0, count);
}
