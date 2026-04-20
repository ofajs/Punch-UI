import { getColors } from "../../packages/common/mcu-ts/index.js";

const points = [100, 98, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 6, 0];

const baseColors = [
  { name: "primary", color: "#1a7bd1" },
  { name: "success", color: "#6b9e52" },
  { name: "error", color: "#fb4747" },
  { name: "neutral", color: "#808080" },
];

const themeNames = [
  {
    name: "Primary",
    cssVar: "--md-sys-color-primary",
    num: 40,
    reverseNum: 100,
  },
  {
    name: "On Primary",
    cssVar: "--md-sys-color-on-primary",
    num: 100,
    reverseNum: 40,
  },
  {
    name: "Primary Container",
    cssVar: "--md-sys-color-primary-container",
    num: 90,
    reverseNum: 10,
  },
  {
    name: "On Primary Container",
    cssVar: "--md-sys-color-on-primary-container",
    num: 10,
    reverseNum: 90,
  },
];

export function generatePalette() {
  let paletteContent = "";

  const colorMaps = {};

  baseColors.forEach((baseColor) => {
    const generatedColors = getColors(baseColor.color, points);
    const colorMap = {};
    generatedColors.forEach((color, index) => {
      const cssVar = `--md-ref-palette-${baseColor.name}${points[index]}`;
      paletteContent += `${cssVar}: ${color};\n`;
      colorMap[points[index]] = cssVar;
    });
    colorMaps[baseColor.name] = colorMap;
  });

  paletteContent = `:root{${paletteContent}}`;

  const colors = baseColors.map((baseColor) => {
    const generatedColors = getColors(baseColor.color, points);
    return {
      name: baseColor.name,
      pick: baseColor.color,
      colors: generatedColors.map((color, index) => ({
        cssVar: `--md-ref-palette-${baseColor.name}${points[index]}`,
        color,
        point: points[index],
      })),
    };
  });

  return {
    paletteContent,
    colors,
    colorMaps,
  };
}

export function generateTheme(colorMaps) {
  let themeContent = "";
  let publicContent = "";

  const lightThemeVars = [];
  const darkThemeVars = [];

  baseColors.forEach((baseColor) => {
    const colorMap = colorMaps[baseColor.name];
    const baseName = baseColor.name;

    if (baseName === "neutral") {
      lightThemeVars.push(
        `--md-sys-color-surface: var(--md-ref-palette-${baseName}98);`,
      );
      lightThemeVars.push(
        `--md-sys-color-on-surface: var(--md-ref-palette-${baseName}10);`,
      );
      darkThemeVars.push(
        `--md-sys-color-surface: var(--md-ref-palette-${baseName}6);`,
      );
      darkThemeVars.push(
        `--md-sys-color-on-surface: var(--md-ref-palette-${baseName}90);`,
      );
    } else {
      lightThemeVars.push(`--md-sys-color-${baseName}: var(${colorMap[40]});`);
      lightThemeVars.push(
        `--md-sys-color-on-${baseName}: var(${colorMap[100]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-${baseName}-container: var(${colorMap[90]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-on-${baseName}-container: var(${colorMap[10]});`,
      );

      darkThemeVars.push(`--md-sys-color-${baseName}: var(${colorMap[80]});`);
      darkThemeVars.push(
        `--md-sys-color-on-${baseName}: var(${colorMap[20]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-${baseName}-container: var(${colorMap[30]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-on-${baseName}-container: var(${colorMap[90]});`,
      );
    }
  });

  themeContent = `.theme-light-mode {
  --pui-theme: light;
  color-scheme: light;
  ${lightThemeVars.join("\n  ")}
}

.theme-dark-mode {
  --pui-theme: dark;
  color-scheme: dark;
  ${darkThemeVars.join("\n  ")}
}`;

  publicContent = `html {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
}
  
@media (prefers-color-scheme: light) {
  html {
    --pui-theme: auto;
    --pui-real-theme: light;
    ${lightThemeVars.join("\n    ")}
  }
}

@media (prefers-color-scheme: dark) {
  html {
    --pui-theme: auto;
    --pui-real-theme: dark;
    ${darkThemeVars.join("\n    ")}
  }
}`;

  const themes = [
    {
      theme: "Light Mode",
      class: "theme-light-mode",
      surface: {
        cssVar: "--md-sys-color-surface",
        point: 98,
      },
      onSurface: {
        cssVar: "--md-sys-color-on-surface",
        point: 10,
      },
      groups: baseColors
        .filter((c) => c.name !== "neutral")
        .map((baseColor) => {
          const colorMap = colorMaps[baseColor.name];
          return {
            name: baseColor.name,
            class: "theme-color-group",
            blocks: [
              {
                name: baseColor.name,
                cssVar: `--md-sys-color-${baseColor.name}`,
                point: 40,
              },
              {
                name: `On ${baseColor.name}`,
                cssVar: `--md-sys-color-on-${baseColor.name}`,
                point: 100,
              },
              {
                name: `${baseColor.name} Container`,
                cssVar: `--md-sys-color-${baseColor.name}-container`,
                point: 90,
              },
              {
                name: `On ${baseColor.name} Container`,
                cssVar: `--md-sys-color-on-${baseColor.name}-container`,
                point: 10,
              },
            ],
          };
        }),
    },
    {
      theme: "Dark Mode",
      class: "theme-dark-mode",
      surface: {
        cssVar: "--md-sys-color-surface",
        point: 6,
      },
      onSurface: {
        cssVar: "--md-sys-color-on-surface",
        point: 90,
      },
      groups: baseColors
        .filter((c) => c.name !== "neutral")
        .map((baseColor) => {
          return {
            name: baseColor.name,
            blocks: [
              {
                name: baseColor.name,
                cssVar: `--md-sys-color-${baseColor.name}`,
                point: 80,
              },
              {
                name: `On ${baseColor.name}`,
                cssVar: `--md-sys-color-on-${baseColor.name}`,
                point: 20,
              },
              {
                name: `${baseColor.name} Container`,
                cssVar: `--md-sys-color-${baseColor.name}-container`,
                point: 30,
              },
              {
                name: `On ${baseColor.name} Container`,
                cssVar: `--md-sys-color-on-${baseColor.name}-container`,
                point: 90,
              },
            ],
          };
        }),
    },
  ];

  return {
    themeContent,
    publicContent,
    themes,
  };
}
