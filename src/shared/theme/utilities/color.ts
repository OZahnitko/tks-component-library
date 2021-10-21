export const hexToRgba = (hexColor: string, alpha: number): string =>
  `rgba(${parseInt(hexColor.slice(0, 2), 16)}, ${parseInt(
    hexColor.slice(2, 4),
    16
  )}, ${parseInt(hexColor.slice(4, 6), 16)}, ${alpha})`;
