const load = lm(import.meta);

const dialogPath = "../dialog/dialog.html";
const buttonPath = "../button/button.html";
const inputPath = "../input/input.html";

load(dialogPath);
load(buttonPath);

const escapeHtml = (str) => {
  if (typeof str !== "string") return str;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const createDialog = async (content, options = {}) => {
  return new Promise((resolve) => {
    const dialog = $(
      `<p-dialog style="--dialog-width: 320px">${content}</p-dialog>`,
    );

    const closeDialog = () => {
      dialog.open = false;
      setTimeout(() => {
        dialog.remove();
      }, 400);
    };

    const yesBtn = dialog.$(".dialog-yes-btn");
    if (yesBtn) {
      yesBtn.on("click", () => {
        if (options.onYes) {
          options.onYes({ dialog, resolve, closeDialog });
        } else {
          resolve(true);
          closeDialog();
        }
      });
    }

    const cancelBtn = dialog.$(".dialog-cancel-btn");
    if (cancelBtn) {
      cancelBtn.on("click", () => {
        resolve(false);
        closeDialog();
      });
    }

    dialog.on("click-mask", () => {
      resolve(null);
      closeDialog();
    });

    dialog.on("click-close", () => {
      resolve(null);
      closeDialog();
    });

    $("body").push(dialog);

    requestAnimationFrame(() => {
      setTimeout(() => {
        dialog.open = true;
        if (options.onOpened) {
          options.onOpened({ dialog });
        }
      }, 10);
    });
  });
};

const loadInput = () => {
  load(inputPath);
};

export { escapeHtml, createDialog, loadInput };
