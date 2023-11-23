## Description

We have built-in `10445` icons in the `material` style. For custom icons provided by the user, we have a separate component called `p-svg-icon`.

## Use

Built-in ICONS:

```html
<delete-icon></delete-icon>
<delete-icon size="small" color="danger"></delete-icon>
<delete-icon size="large" color="success"></delete-icon>
```

Custom style by `--icon-size` and `--icon-color`:

```html
<delete-icon style="--icon-size: 50px; --icon-color: hotpink"></delete-icon>
```

Custom Icon svg-icon:

```html
<p-svg-icon size="large" color="success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M6 15h1.5V9H5v1.5h1V15Zm3.5 0H12q.425 0 .713-.288T13 14v-4q0-.425-.288-.713T12 9H9.5q-.425 0-.713.288T8.5 10v4q0 .425.288.713T9.5 15Zm.5-1.5v-3h1.5v3H10Zm4 1.5h1.5v-2.25L17.25 15H19l-2.25-3L19 9h-1.75l-1.75 2.25V9H14v6Zm-9 6q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Z"
    />
  </svg>
</p-svg-icon>
```
