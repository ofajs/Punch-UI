(async () => {
  lm.config({
    alias: {
      "@pui": "/packages",
    },
  });

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/packages/css/public.css";
  document.head.append(link);
})();
