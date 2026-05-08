import { getColors } from "../../packages/common/mcu-ts/index.js";

const points = [100, 98, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 6, 0];

const neutralSurfacePoints = {
  light: {
    surface: 98,
    onSurface: 10,
    surfaceVariant: 90,
    onSurfaceVariant: 30,
    inverseSurface: 20,
    inverseOnSurface: 95,
  },
  dark: {
    surface: 6,
    onSurface: 90,
    surfaceVariant: 30,
    onSurfaceVariant: 80,
    inverseSurface: 90,
    inverseOnSurface: 20,
  },
};

const colorRolePoints = [
  { key: "main", point: 40 },
  { key: "on", point: 100 },
  { key: "container", point: 90 },
  { key: "onContainer", point: 10 },
];
const colorRolePointsDark = [
  { key: "main", point: 80 },
  { key: "on", point: 20 },
  { key: "container", point: 30 },
  { key: "onContainer", point: 90 },
];

function buildColorRoleBlocks(baseName, roles) {
  return roles.map(({ key, point }) => {
    let cssVar;
    if (key === "main") {
      cssVar = `--md-sys-color-${baseName}`;
    } else if (key === "on") {
      cssVar = `--md-sys-color-on-${baseName}`;
    } else if (key === "container") {
      cssVar = `--md-sys-color-${baseName}-container`;
    } else if (key === "onContainer") {
      cssVar = `--md-sys-color-on-${baseName}-container`;
    }
    return {
      name:
        key === "main"
          ? baseName
          : key === "on"
            ? `On ${baseName}`
            : key === "container"
              ? `${baseName} Container`
              : `On ${baseName} Container`,
      cssVar,
      point,
    };
  });
}

export function generatePalette(baseColors) {
  const colorMaps = {};
  const colorVars = [];
  const colors = baseColors.map((baseColor) => {
    const generatedColors = getColors(baseColor.color, points);
    const colorMap = {};
    generatedColors.forEach((color, index) => {
      const cssVar = `--md-ref-palette-${baseColor.name}${points[index]}`;
      colorVars.push(`  ${cssVar}: ${color};`);
      colorMap[points[index]] = cssVar;
    });
    colorMaps[baseColor.name] = colorMap;
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

  const paletteContent = `:root{\n${colorVars.join("\n")}\n}`;

  return {
    paletteContent,
    colors,
    colorMaps,
  };
}

export function generateTheme(colorMaps, baseColors) {
  const lightThemeVars = [];
  const darkThemeVars = [];

  baseColors.forEach((baseColor) => {
    const colorMap = colorMaps[baseColor.name];
    if (!colorMap) {
      return;
    }
    const baseName = baseColor.name;

    if (baseName === "neutral") {
      lightThemeVars.push(
        `--md-sys-color-surface: var(${colorMap[neutralSurfacePoints.light.surface]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-on-surface: var(${colorMap[neutralSurfacePoints.light.onSurface]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-surface-variant: var(${colorMap[neutralSurfacePoints.light.surfaceVariant]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-on-surface-variant: var(${colorMap[neutralSurfacePoints.light.onSurfaceVariant]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-inverse-surface: var(${colorMap[neutralSurfacePoints.light.inverseSurface]});`,
      );
      lightThemeVars.push(
        `--md-sys-color-inverse-on-surface: var(${colorMap[neutralSurfacePoints.light.inverseOnSurface]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-surface: var(${colorMap[neutralSurfacePoints.dark.surface]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-on-surface: var(${colorMap[neutralSurfacePoints.dark.onSurface]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-surface-variant: var(${colorMap[neutralSurfacePoints.dark.surfaceVariant]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-on-surface-variant: var(${colorMap[neutralSurfacePoints.dark.onSurfaceVariant]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-inverse-surface: var(${colorMap[neutralSurfacePoints.dark.inverseSurface]});`,
      );
      darkThemeVars.push(
        `--md-sys-color-inverse-on-surface: var(${colorMap[neutralSurfacePoints.dark.inverseOnSurface]});`,
      );
    }

    colorRolePoints.forEach(({ key, point }) => {
      let cssVar;
      if (key === "main") {
        cssVar = `--md-sys-color-${baseName}`;
      } else if (key === "on") {
        cssVar = `--md-sys-color-on-${baseName}`;
      } else if (key === "container") {
        cssVar = `--md-sys-color-${baseName}-container`;
      } else if (key === "onContainer") {
        cssVar = `--md-sys-color-on-${baseName}-container`;
      }
      lightThemeVars.push(`${cssVar}: var(${colorMap[point]});`);
    });

    colorRolePointsDark.forEach(({ key, point }) => {
      let cssVar;
      if (key === "main") {
        cssVar = `--md-sys-color-${baseName}`;
      } else if (key === "on") {
        cssVar = `--md-sys-color-on-${baseName}`;
      } else if (key === "container") {
        cssVar = `--md-sys-color-${baseName}-container`;
      } else if (key === "onContainer") {
        cssVar = `--md-sys-color-on-${baseName}-container`;
      }
      darkThemeVars.push(`${cssVar}: var(${colorMap[point]});`);
    });
  });

  const themeContent = `.theme-light-mode {
  --pui-theme: light;
  color-scheme: light;
  ${lightThemeVars.join("\n  ")}
}

.theme-dark-mode {
  --pui-theme: dark;
  color-scheme: dark;
  ${darkThemeVars.join("\n  ")}
}`;

  const globalContent = `html {
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
        point: neutralSurfacePoints.light.surface,
      },
      onSurface: {
        cssVar: "--md-sys-color-on-surface",
        point: neutralSurfacePoints.light.onSurface,
      },
      surfaceVariant: {
        cssVar: "--md-sys-color-surface-variant",
        point: neutralSurfacePoints.light.surfaceVariant,
      },
      onSurfaceVariant: {
        cssVar: "--md-sys-color-on-surface-variant",
        point: neutralSurfacePoints.light.onSurfaceVariant,
      },
      inverseSurface: {
        cssVar: "--md-sys-color-inverse-surface",
        point: neutralSurfacePoints.light.inverseSurface,
      },
      inverseOnSurface: {
        cssVar: "--md-sys-color-inverse-on-surface",
        point: neutralSurfacePoints.light.inverseOnSurface,
      },
      groups: baseColors.map((baseColor) => ({
        name: baseColor.name,
        class: "theme-color-group",
        blocks: buildColorRoleBlocks(baseColor.name, colorRolePoints),
      })),
    },
    {
      theme: "Dark Mode",
      class: "theme-dark-mode",
      surface: {
        cssVar: "--md-sys-color-surface",
        point: neutralSurfacePoints.dark.surface,
      },
      onSurface: {
        cssVar: "--md-sys-color-on-surface",
        point: neutralSurfacePoints.dark.onSurface,
      },
      surfaceVariant: {
        cssVar: "--md-sys-color-surface-variant",
        point: neutralSurfacePoints.dark.surfaceVariant,
      },
      onSurfaceVariant: {
        cssVar: "--md-sys-color-on-surface-variant",
        point: neutralSurfacePoints.dark.onSurfaceVariant,
      },
      inverseSurface: {
        cssVar: "--md-sys-color-inverse-surface",
        point: neutralSurfacePoints.dark.inverseSurface,
      },
      inverseOnSurface: {
        cssVar: "--md-sys-color-inverse-on-surface",
        point: neutralSurfacePoints.dark.inverseOnSurface,
      },
      groups: baseColors.map((baseColor) => ({
        name: baseColor.name,
        blocks: buildColorRoleBlocks(baseColor.name, colorRolePointsDark),
      })),
    },
  ];

  return {
    themeContent,
    globalContent,
    themes,
  };
}
