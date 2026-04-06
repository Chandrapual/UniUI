import {
  createContext,
  useContext,
  useMemo,
  type CSSProperties,
  type HTMLAttributes,
  type PropsWithChildren
} from "react";

import { deepMerge } from "@uniui/utils";

import type {
  PresetThemeRadius,
  ThemeRadius,
  UniUITheme,
  UniUIThemeInput
} from "./types";

const radiusScale: Record<PresetThemeRadius, string> = {
  none: "0px",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px"
};

export const defaultTheme: UniUITheme = {
  colors: {
    border: "#d1d5db",
    foreground: "#111827",
    muted: "#f3f4f6",
    primary: "#6366f1",
    primaryForeground: "#ffffff",
    secondary: "#10b981",
    secondaryForeground: "#052e16",
    surface: "#ffffff"
  },
  radius: "md"
};

type ThemeStyle = CSSProperties &
  Record<`--uniui-color-${string}` | "--uniui-radius", string>;

export interface ThemeProviderProps
  extends PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, "color">> {
  theme?: UniUIThemeInput;
}

const ThemeContext = createContext<UniUITheme>(defaultTheme);

function resolveRadiusValue(radius: ThemeRadius) {
  return radiusScale[radius as PresetThemeRadius] ?? radius;
}

function toKebabCase(value: string) {
  return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function createTheme(theme?: UniUIThemeInput, baseTheme: UniUITheme = defaultTheme) {
  return deepMerge<UniUITheme>(baseTheme, theme);
}

export function themeToCssVariables(theme: UniUITheme): ThemeStyle {
  const colorVariables = Object.fromEntries(
    Object.entries(theme.colors).map(([token, value]) => [
      `--uniui-color-${toKebabCase(token)}`,
      value
    ])
  ) as Record<`--uniui-color-${string}`, string>;

  return {
    ...colorVariables,
    "--uniui-radius": resolveRadiusValue(theme.radius)
  };
}

export function ThemeProvider({
  children,
  style,
  theme,
  ...props
}: ThemeProviderProps) {
  const parentTheme = useContext(ThemeContext);
  const mergedTheme = useMemo(() => createTheme(theme, parentTheme), [parentTheme, theme]);
  const cssVariables = useMemo(() => themeToCssVariables(mergedTheme), [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <div
        data-uniui-theme=""
        style={{
          ...cssVariables,
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
