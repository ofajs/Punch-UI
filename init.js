const packagesUrl = import.meta.url.replace(/(.+)\/.+/, "$1");

// 初始化逻辑
lm.config({
  alias: {
    "@puiroot": `${packagesUrl}`,
    "@pui": `${packagesUrl}/packages`,
  },
});
