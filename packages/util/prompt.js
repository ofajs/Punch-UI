import { escapeHtml, createDialog, loadInput } from "./dialog.js";

export default async function prompt(options) {
  let message = "";
  let title = "";
  let yesText = "Yes";
  let cancelText = "Cancel";
  let placeholder = "";
  let defaultValue = "";
  let label = "";

  if (typeof options === "string") {
    message = options;
  } else if (typeof options === "object") {
    title = options.title || "";
    message = options.message || options.content || "";
    yesText = options.yes || "Yes";
    cancelText = options.cancel || "Cancel";
    placeholder = options.placeholder || "";
    defaultValue = options.value || "";
    label = options.label || "";
  }

  message = escapeHtml(message);
  title = escapeHtml(title);
  placeholder = escapeHtml(placeholder);
  defaultValue = escapeHtml(defaultValue);
  label = escapeHtml(label);

  loadInput();

  return createDialog(
    `
    <span slot="title">${title}</span>
    <div style="padding: 8px 0">
      <p style="margin: 0 0 16px 0;">${message}</p>
      <p-input
        class="dialog-input"
        placeholder="${placeholder}"
        default-value="${defaultValue}"
        style="display: block;margin: 8px;"
      >
        ${label ? `<span slot="label">${label}</span>` : ""}
      </p-input>
    </div>
    <p-button slot="bottom" class="dialog-yes-btn" color="primary">${yesText}</p-button>
    <p-button slot="bottom" class="dialog-cancel-btn" variant="text">${cancelText}</p-button>
  `,
    {
      onYes: ({ dialog, resolve, closeDialog }) => {
        const input = dialog.$(".dialog-input");
        resolve(input.value);
        closeDialog();
      },
      onOpened: ({ dialog }) => {
        const input = dialog.$(".dialog-input");
        input.focus();
        input.on("keydown", (e) => {
          if (e.code === "Enter") {
            dialog.$(".dialog-yes-btn").click();
          }
        });
      },
    },
  );
}

export { prompt };
