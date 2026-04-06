/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/core/src/**/*.{ts,tsx,css}",
    "./playground/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--uniui-color-primary)",
        "primary-foreground": "var(--uniui-color-primary-foreground)",
        secondary: "var(--uniui-color-secondary)",
        "secondary-foreground": "var(--uniui-color-secondary-foreground)",
        surface: "var(--uniui-color-surface)",
        foreground: "var(--uniui-color-foreground)",
        muted: "var(--uniui-color-muted)",
        border: "var(--uniui-color-border)"
      },
      borderRadius: {
        uni: "var(--uniui-radius)"
      }
    }
  },
  plugins: []
};

