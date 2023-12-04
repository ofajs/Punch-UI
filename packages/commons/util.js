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
