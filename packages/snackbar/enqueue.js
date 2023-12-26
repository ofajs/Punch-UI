$("head").push(`<style>
#snackbar-container{
  position:fixed;
  left:calc(var(--pui-space-x) * 3);
  bottom:0;
  width:100%;
  height:100%;
  z-index:10;
  display:flex;
  box-sizing: border-box;
  flex-direction:column;
  pointer-events:none;
  justify-content:flex-end;
  align-items:flex-start;
}
#snackbar-container > *{

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
      Object.assign(defaults, defaults);
      break;
    case "string":
      defaults.content = opts;
      break;
  }

  const el = $(`<p-snackbar style="pointer-events:auto;">
  ${defaults.content}
  <div style="flex:1;"></div>
  <p-button size="small" variant="text" icon style="margin-left: 4px">✕</p-button>
</p-snackbar>`);

  snackbarContainer.push(el);
}
