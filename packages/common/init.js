export const init = () => {
  const globalStyleHref = new URL("../css/pui-global.css", import.meta.url)
    .href;

  // 检查是否已添加
  if (
    document.head.querySelector(`link[pui-theme]`) ||
    document.head.querySelector(`link[href*="/pui-global.css"]`)
  ) {
    return;
  }

  // 在 header 上添加 globalStyleHref
  const link = document.createElement("link");
  link.setAttribute("href", globalStyleHref);
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("pui-theme", "1");

  document.head.appendChild(link);
};

init();
