import type { DeepPartial } from "@uniui/utils";

export type PresetThemeRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type ThemeRadius = PresetThemeRadius | (string & {});

export interface ThemeColors {
  border: string;
  foreground: string;
  muted: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  surface: string;
  [token: string]: string;
}

export interface UniUITheme {
  colors: ThemeColors;
  radius: ThemeRadius;
}

export type UniUIThemeInput = DeepPartial<UniUITheme>;
