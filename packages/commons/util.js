export function convertToRGBA(colorString, opacity = 20) {
  if (colorString.startsWith("#")) {
    const hexColor = colorString.slice(1);
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
    return rgbaColor;
  } else if (colorString.startsWith("rgb")) {
    return colorString
      .replace("rgb", "rgba")
      .replace(")", `, ${opacity / 100})`);
  } else {
    return "";
  }
}

// const color1 = "#FF5733";
// const color2 = "rgb(120, 45, 200)";

// const rgbaColor1 = convertToRGBA(color1);
// const rgbaColor2 = convertToRGBA(color2);

// console.log(rgbaColor1); // 输出 "rgba(255, 87, 51, 0.2)"
// console.log(rgbaColor2); // 输出 "rgba(120, 45, 200, 0.2)"

export const setMainColor = (target, color) => {
  target.style.setProperty("--main-color", `var(--md-sys-color-${color})`);
  target.style.setProperty(
    "--on-main-color",
    `var(--md-sys-color-on-${color})`
  );

  target.style.setProperty(
    "--main-color-container",
    `var(--md-sys-color-${color}-container)`
  );
  target.style.setProperty(
    "--on-main-color-container",
    `var(--md-sys-color-on-${color}-container)`
  );
  target.style.setProperty(
    "--main-hover-color",
    `var(--md-ref-palette-translucent-${color}60)`
  );
  target.style.setProperty(
    "--wave-color",
    `var(--md-ref-palette-translucent-${color}50)`
  );
};
