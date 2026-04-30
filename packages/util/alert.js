import { escapeHtml, createDialog } from "./dialog.js";

export default async function alert(options) {
  let message = "";
  let title = "";
  let okText = "OK";

  if (typeof options === "string") {
    message = options;
  } else if (typeof options === "object") {
    title = options.title || "";
    message = options.message || options.content || "";
    okText = options.ok || options.yes || "OK";
  }

  message = escapeHtml(message);
  title = escapeHtml(title);

  return createDialog(`
    <span slot="title">${title}</span>
    <div>${message}</div>
    <p-button slot="bottom" class="dialog-yes-btn" color="primary">${okText}</p-button>
  `);
}

export { alert };