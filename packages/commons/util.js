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

export const setMainColor = (target, color) => {
  if (!color) {
    target.style.setProperty("--pui-main-color", ``);
    target.style.setProperty("--pui-on-main-color", ``);
    target.style.setProperty("--pui-main-color-container", ``);
    target.style.setProperty("--pui-on-main-color-container", ``);
    target.style.setProperty("--pui-main-hover-color", ``);
    target.style.setProperty("--wave-color", ``);
    return;
  }

  target.style.setProperty("--pui-main-color", `var(--md-sys-color-${color})`);
  target.style.setProperty(
    "--pui-on-main-color",
    `var(--md-sys-color-on-${color})`
  );

  target.style.setProperty(
    "--pui-main-color-container",
    `var(--md-sys-color-${color}-container)`
  );
  target.style.setProperty(
    "--pui-on-main-color-container",
    `var(--md-sys-color-on-${color}-container)`
  );
  target.style.setProperty(
    "--pui-main-hover-color",
    `var(--md-ref-palette-translucent-${color}60)`
  );
  target.style.setProperty(
    "--wave-color",
    `var(--md-ref-palette-translucent-${color}50)`
  );
};
