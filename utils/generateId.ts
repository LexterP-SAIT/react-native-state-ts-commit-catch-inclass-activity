let counter: number = 0;

export function generateId(): string {
  counter += 1;
  return `${Date.now()}-${counter}`;
}
