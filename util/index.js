export function reduceLightness(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  const l = ((min + max) / 2) * 0.9;

  if (min === max) {
    return {
      h: 0,
      s: 0,
      l: l,
    };
  }

  let h, s;
  const d = max - min;

  if (max === r) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (max === g) {
    h = (b - r) / d + 2;
  } else {
    h = (r - g) / d + 4;
  }

  h /= 6;
  s = d / (1 - Math.abs(2 * l - 1));

  const darkenColor = `hsl(${Math.round(h * 360)},${Math.round(
    s * 100
  )}%,${Math.round(l * 100)}%)`;

  return darkenColor;
}
