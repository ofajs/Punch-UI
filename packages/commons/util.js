export function convertToRGBA(colorString, opacity = "0.1") {
  if (colorString.startsWith("#")) {
    const hexColor = colorString.slice(1);
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    return rgbaColor;
  } else if (colorString.startsWith("rgb")) {
    return colorString.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  } else {
    return "";
  }
}

// const color1 = "#FF5733";
// const color2 = "rgb(120, 45, 200)";

// const rgbaColor1 = convertToRGBA(color1);
// const rgbaColor2 = convertToRGBA(color2);

// console.log(rgbaColor1); // 输出 "rgba(255, 87, 51, 0.1)"
// console.log(rgbaColor2); // 输出 "rgba(120, 45, 200, 0.1)"

export function rgbToHsl(r, g, b) {
  // 将 RGB 值转为范围在 [0, 1] 之间的小数
  r /= 255;
  g /= 255;
  b /= 255;

  // 找出最大和最小的颜色分量
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // 计算亮度（L）
  let l = (max + min) / 2;

  // 如果最大和最小相等，则说明颜色是灰度的，色相和饱和度都为 0
  if (max === min) {
    return { h: 0, s: 0, l: l };
  }

  // 计算饱和度（S）
  let s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

  // 计算色相（H）
  let h;
  if (max === r) {
    h = ((g - b) / (max - min) + 6) % 6;
  } else if (max === g) {
    h = (b - r) / (max - min) + 2;
  } else {
    h = (r - g) / (max - min) + 4;
  }

  // 将色相、饱和度和亮度转为整数并返回
  h = Math.round(h * 60);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h: h, s: s, l: l };
}

// 例子：将 RGB 颜色 (255, 0, 0) 转为 HSL
// const hslColor = rgbToHsl(255, 0, 43);
// console.log(hslColor);

export function hslToRgb(h, s, l) {
  // 将色相、饱和度和亮度转为小数
  h /= 360;
  s /= 100;
  l /= 100;

  // 如果饱和度为 0，则颜色为灰度，直接计算亮度对应的 RGB 值
  if (s === 0) {
    const grayValue = Math.round(l * 255);
    return { r: grayValue, g: grayValue, b: grayValue };
  }

  // 计算调整过的饱和度和亮度
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  // 计算 RGB 的临时值
  const rgb = {
    r: hueToRgb(p, q, h + 1 / 3),
    g: hueToRgb(p, q, h),
    b: hueToRgb(p, q, h - 1 / 3),
  };

  // 将 RGB 值转为整数并返回
  rgb.r = Math.round(rgb.r * 255);
  rgb.g = Math.round(rgb.g * 255);
  rgb.b = Math.round(rgb.b * 255);

  return rgb;
}

// 辅助函数：处理色相对应的 RGB 值
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

// 例子：将 HSL 颜色 (0, 100, 50) 转为 RGB
// const rgbColor = hslToRgb(350, 100, 50);
// console.log(rgbColor);





