if (!$.getRootProvider("pui")) {
  $("body").push(`
      <o-root-provider name="pui" theme="auto"></o-root-provider>
    `);

  const puiRoot = $.getRootProvider("pui");

  if (localStorage.getItem("pui-theme")) {
    puiRoot.theme = localStorage.getItem("pui-theme");
  } else {
    puiRoot.theme = "auto";
  }

  const refreshTheme = () => {
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
  };

  puiRoot.watchTick(() => {
    const value = puiRoot.theme;

    refreshTheme();

    localStorage.setItem("pui-theme", value);
  });

  refreshTheme();
}

{
  // 查看是否已经有 public css
  let targetLink = $("link[pui-theme]");
  if (!targetLink) {
    targetLink = $(
      `<link pui-theme rel="stylesheet" href="${import.meta.resolve(
        "../css/public.css"
      )}" />`
    );

    const colorLink = $("head link[pui-colors]");
    if (colorLink) {
      targetLink.before(colorLink);
    } else {
      $("head").push(targetLink);
    }
  }
}
