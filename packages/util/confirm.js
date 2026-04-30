import { escapeHtml, createDialog } from "./dialog.js";

export default async function confirm(options) {
  let message = "";
  let title = "";
  let yesText = "Yes";
  let cancelText = "Cancel";

  if (typeof options === "string") {
    message = options;
  } else if (typeof options === "object") {
    title = options.title || "";
    message = options.message || options.content || "";
    yesText = options.yes || "Yes";
    cancelText = options.cancel || "Cancel";
  }

  message = escapeHtml(message);
  title = escapeHtml(title);

  return createDialog(`
    <span slot="title">${title}</span>
    <div>${message}</div>
    <p-button slot="bottom" class="dialog-yes-btn" color="primary">${yesText}</p-button>
    <p-button slot="bottom" class="dialog-cancel-btn" variant="text">${cancelText}</p-button>
  `);
}

export { confirm };