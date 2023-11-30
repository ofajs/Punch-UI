export function generateTonalPalette(mainColor) {
  // 将主色转换为HSL颜色表示
  const hslMainColor = hexToHsl(mainColor);

  // 定义生成调色板的步长
  const step = 10;

  // 生成调色板
  const tonalPalette = [];
  for (let i = 0; i <= 120; i += step) {
    // 明度逐步调整，生成较亮和较暗的变体
    const lightenedColor = adjustLightness(hslMainColor, i);
    const darkenedColor = adjustLightness(hslMainColor, -i);

    // 添加生成的颜色到调色板
    tonalPalette.push(hslToHex(lightenedColor));
    tonalPalette.push(hslToHex(darkenedColor));
  }

  return tonalPalette;
}

// 辅助函数：将十六进制颜色转换为HSL颜色
function hexToHsl(hex) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  const r = parseInt(match[1], 16);
  const g = parseInt(match[2], 16);
  const b = parseInt(match[3], 16);

  const hsl = rgbToHsl(r, g, b);
  return hsl;
}

// 辅助函数：将RGB颜色转换为HSL颜色
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

// 辅助函数：将HSL颜色转换为十六进制颜色
function hslToHex(hsl) {
  const [h, s, l] = hsl;
  const rgb = hslToRgb(h, s, l);
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  return hex;
}

// 辅助函数：将HSL颜色转换为RGB颜色
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// 辅助函数：将RGB颜色转换为十六进制颜色
function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

// 辅助函数：调整颜色的明度
function adjustLightness(hsl, amount) {
  const [h, s, l] = hsl;
  const adjustedL = Math.max(0, Math.min(1, l + amount / 100));
  return [h, s, adjustedL];
}

// 用法示例
const mainColor = "#3498db"; // 你的主色
const tonalPalette = generateTonalPalette(mainColor);
console.log(tonalPalette);
