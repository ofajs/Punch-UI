(async () => {
  const packagesUrl = import.meta.url.replace(/(.+)\/.+/, "$1");

  // 初始化逻辑
  lm.config({
    alias: {
      "@pui": packagesUrl,
    },
  });

  // 初始化颜色
  const color = "primary";
  $("head").push(
    `<style>:root{
      --pui-main-color:var(--md-sys-color-${color});
      --pui-on-main-color:var(--md-sys-color-on-${color});
      --pui-main-color-container:var(--md-sys-color-${color}-container);
      --pui-on-main-color-container:var(--md-sys-color-on-${color}-container);
      --pui-main-hover-color:var(--md-ref-palette-translucent-${color}60);
}</style>`
  );
})();
