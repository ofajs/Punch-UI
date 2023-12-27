$("head").push(`<style>
#snackbar-container{
  position:fixed;
  left:20px;
  bottom:20px;
  width:calc(100% - 20px);
  height:calc(100% - 20px);
  max-width:600px;
  z-index:10;
  display:flex;
  box-sizing: border-box;
  flex-direction:column;
  pointer-events:none;
  justify-content:flex-end;
  align-items:flex-start;
}
#snackbar-container > *{
  margin-bottom:8px;
  animation: snackbar-anime-in ease .3s;
}
#snackbar-container > *.fadeout{
  animation: snackbar-anime-out ease .3s;
}
@keyframes snackbar-anime-in{
  0%{
    opacity:0;
    transform:translate(-100px,0);
  }
  100%{
    opacity:1;
    transform:translate(0,0);
  }
}
@keyframes snackbar-anime-out{
  0%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
}

</style>`);
let snackbarContainer = $(`<div id="snackbar-container"></div>`);
$("body").push(snackbarContainer);

export default async function enqueue(opts) {
  const defaults = {
    content: "",
    buttons: [],
    time: 3000,
    click: () => {},
    close: () => {},
  };

  switch (typeof opts) {
    case "object":
      Object.assign(defaults, opts);
      break;
    case "string":
      defaults.content = opts;
      break;
  }

  const el = $(`<p-snackbar style="pointer-events:auto;">
  ${defaults.content}
  <div style="flex:1;" class="snackbar-holder"></div>
  <p-button class="snackbar-close" size="small" variant="text" icon style="margin-left: 4px">✕
  </p-button>
</p-snackbar>`);

  let closeTimer;

  const close = () => {
    clearTimeout(closeTimer);
    return new Promise((res) => {
      el.classList.add("fadeout");
      el.on("animationend", () => {
        el.remove();
        res();
      });
    });
  };

  if (defaults.close === null) {
    el.$(".snackbar-close").remove();
  } else {
    el.$(".snackbar-close").on("click", async (e) => {
      e.stopPropagation();
      el.$(".snackbar-close").attr("disabled", "");
      const result = await defaults.close({ target: el, event: e });
      if (result === false) {
        el.$(".snackbar-close").attr("disabled", null);
        return;
      }
      close();
    });
  }

  if (defaults.buttons.length) {
    defaults.buttons.forEach((e) => {
      const btn = $(
        `<p-button color="${
          e.color || "primary"
        }" size="small" variant="text">${e.content}</p-button>`
      );

      e.click &&
        btn.on("click", (event) => {
          e.click({ event, target: btn, close });
        });

      el.$(".snackbar-holder").after(btn);
    });
  }

  el.on("click", (event) => {
    defaults.click({ target: el, event, close });
  });

  closeTimer = setTimeout(() => {
    close();
  }, defaults.time);

  snackbarContainer.push(el);
}
