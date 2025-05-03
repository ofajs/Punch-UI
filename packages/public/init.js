if (!$.getRootProvider("pui")) {
  $("body").push(`
      <o-root-provider name="pui" theme="light"></o-root-provider>
    `);

  const puiRoot = $.getRootProvider("pui");

  puiRoot.watchTick(() => {
    const value = puiRoot.theme;

    const { documentElement } = document;

    if (value === "auto") {
      documentElement.removeAttribute("theme");
      documentElement.classList.remove("theme-dark-mode");
      documentElement.classList.remove("theme-light-mode");
    } else if (value === "dark") {
      documentElement.classList.add("theme-dark-mode");
      documentElement.classList.remove("theme-light-mode");
    } else if (value === "light") {
      documentElement.classList.add("theme-light-mode");
      documentElement.classList.remove("theme-dark-mode");
    }
  });
}
