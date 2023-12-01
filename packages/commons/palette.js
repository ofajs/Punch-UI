export function rgbToLCH(rgbColor) {
  const r = rgbColor[0] / 255;
  const g = rgbColor[1] / 255;
  const b = rgbColor[2] / 255;

  const x = 0.4124564 * r + 0.3575761 * g + 0.1804375 * b;
  const y = 0.2126729 * r + 0.7151522 * g + 0.072175 * b;
  const z = 0.0193339 * r + 0.119192 * g + 0.9503041 * b;

  const xDivXn = x / 0.95047;
  const yDivYn = y / 1.0;
  const zDivZn = z / 1.08883;

  const fX =
    xDivXn > 0.008856 ? Math.pow(xDivXn, 1 / 3) : (903.3 * xDivXn + 16) / 116;
  const fY =
    yDivYn > 0.008856 ? Math.pow(yDivYn, 1 / 3) : (903.3 * yDivYn + 16) / 116;
  const fZ =
    zDivZn > 0.008856 ? Math.pow(zDivZn, 1 / 3) : (903.3 * zDivZn + 16) / 116;

  const l = Math.max(0, 116 * fY - 16);
  const a = (fX - fY) * 500;
  const bValue = (fY - fZ) * 200;

  const c = Math.sqrt(a * a + bValue * bValue);
  let h = (Math.atan2(bValue, a) * 180) / Math.PI;
  h = h < 0 ? h + 360 : h;

  return { l: Math.round(l), c: Math.round(c), h: Math.round(h) };
}

// // 示例
// const rgbColor = [80, 119, 26];
// const lchColor = rgbToLCH(rgbColor);
// console.log(lchColor);

export function lchToRGB(lchColor) {
  const l = lchColor.l;
  const c = lchColor.c;
  const h = lchColor.h;

  // 将LCH转换为Lab
  const hRadians = (h * Math.PI) / 180;
  const a = c * Math.cos(hRadians);
  const bValue = c * Math.sin(hRadians);

  // 将Lab转换为XYZ
  const y = (l + 16) / 116;
  const x = a / 500 + y;
  const z = y - bValue / 200;

  const x3 = Math.pow(x, 3);
  const y3 = Math.pow(y, 3);
  const z3 = Math.pow(z, 3);

  const xDivXn = x3 > 0.008856 ? x3 : (x - 16 / 116) / 7.787;
  const yDivYn = y3 > 0.008856 ? y3 : (y - 16 / 116) / 7.787;
  const zDivZn = z3 > 0.008856 ? z3 : (z - 16 / 116) / 7.787;

  const xFinal = xDivXn * 0.95047;
  const yFinal = yDivYn * 1.0;
  const zFinal = zDivZn * 1.08883;

  // 将XYZ转换为RGB
  const r = 3.2404542 * xFinal - 1.5371385 * yFinal - 0.4985314 * zFinal;
  const g = -0.969266 * xFinal + 1.8760108 * yFinal + 0.041556 * zFinal;
  const b = 0.0556434 * xFinal - 0.2040259 * yFinal + 1.0572252 * zFinal;

  // 根据RGB值的范围[0, 1]，进行范围调整
  const adjust = (value) => Math.max(0, Math.min(1, value));
  const adjustedR = adjust(r);
  const adjustedG = adjust(g);
  const adjustedB = adjust(b);

  // 将RGB值映射回[0, 255]范围
  const to255 = (value) => Math.round(value * 255);
  return [to255(adjustedR), to255(adjustedG), to255(adjustedB)];
}

// // 示例
// const lchColor2 = { l: 70, c: 50, h: 120 }; // 示例的LCH颜色
// const rgbColor2 = lchToRGB(lchColor2);
// console.log(rgbColor2);
