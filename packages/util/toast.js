const load = lm(import.meta);

const snackbarPath = "../snackbar/snackbar.html";
const buttonPath = "../button/button.html";

let container = null;
let styleAdded = false;

const addStyles = () => {
  if (styleAdded) return;
  styleAdded = true;

  const style = $(`<style>
    .toast-container {
      position: fixed;
      left: 20px;
      bottom: 20px;
      max-width: 600px;
      z-index: 20000;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
    .toast-snackbar {
      animation: toast-slide-in ease 0.3s;
      margin-top: 8px;
    }
    .toast-snackbar:first-child {
      margin-top: 0;
    }
    .toast-snackbar.fadeout {
      animation: toast-fade-out ease 0.3s forwards;
    }
    @keyframes toast-slide-in {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes toast-fade-out {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  </style>`);
  $("head").push(style);
};

const initContainer = () => {
  if (container) return;

  container = $(`<div class="toast-container"></div>`);
  $("body").push(container);
};

const escapeHtml = (str) => {
  if (typeof str !== "string") return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export default async function toast(options) {
  let message = "";
  let duration = 3000;
  let color = "primary";

  if (typeof options === "string") {
    message = options;
  } else if (typeof options === "object") {
    message = options.message || options.content || "";
    duration = options.duration || options.time || 3000;
    color = options.color || "primary";
  }

  message = escapeHtml(message);

  load(snackbarPath);
  load(buttonPath);

  initContainer();
  addStyles();

  const snackbarEl = $(`<p-snackbar color="${color}"></p-snackbar>`);
  snackbarEl.push(message);

  const closeBtn = $(`<p-button slot="action" size="small" variant="text" icon color="${color}"><span style="color: var(--main-color-container);">✕</span></p-button>`);
  closeBtn.on("click", () => {
    closeSnackbar();
  });
  snackbarEl.push(closeBtn);

  container.push(snackbarEl);

  snackbarEl.classList.add("toast-snackbar");

  const closeSnackbar = () => {
    snackbarEl.classList.add("fadeout");
    setTimeout(() => {
      snackbarEl.remove();
    }, 300);
  };

  if (duration > 0) {
    setTimeout(() => {
      closeSnackbar();
    }, duration);
  }

  return {
    close: closeSnackbar,
    el: snackbarEl,
  };
}

export { toast };