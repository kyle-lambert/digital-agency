export const px = (num: number = 0): string => `${num}px`;

export const rem = (num: number = 0): string => `${num}rem`;

export const perc = (num: number = 0): string => `${num}%`;

export const base = (mx: number = 0, base: number = 4): string => px(base * mx);

export const rgba = (
  r: number = 0,
  g: number = 0,
  b: number = 0,
  a: number = 1
): string => `rgba(${r}, ${g}, ${b}, ${a})`;

export const shadow = (
  x: number = 0,
  y: number = 0,
  blur: number = 0,
  spread: number = 0,
  rgba: string
): string => `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${rgba}`;

export const letterSpacing = (size: number = 1): string => {
  const a = -0.0223;
  const b = 0.185;
  const c = -0.1745;
  return (a + b * Math.pow(Math.E, c * size)).toFixed(3);
};
