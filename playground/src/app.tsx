import { Button, ThemeProvider, createTheme, useTheme } from "@uniui/core";

const demoTheme = createTheme({
  colors: {
    border: "#334155",
    foreground: "#e2e8f0",
    muted: "#1e293b",
    primary: "#6366f1",
    primaryForeground: "#eef2ff",
    secondary: "#14b8a6",
    secondaryForeground: "#062925",
    surface: "#0f172a"
  },
  radius: "lg"
});

function ThemeSnapshot() {
  const theme = useTheme();

  return (
    <div className="theme-card">
      <div className="theme-card__header">
        <span className="theme-card__eyebrow">Theme</span>
        <h2>Runtime Tokens</h2>
      </div>
      <div className="theme-grid">
        <div className="theme-token">
          <span>Primary</span>
          <strong>{theme.colors.primary}</strong>
        </div>
        <div className="theme-token">
          <span>Secondary</span>
          <strong>{theme.colors.secondary}</strong>
        </div>
        <div className="theme-token">
          <span>Surface</span>
          <strong>{theme.colors.surface}</strong>
        </div>
        <div className="theme-token">
          <span>Radius</span>
          <strong>{theme.radius}</strong>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider className="playground-shell" theme={demoTheme}>
      <main className="playground-layout">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="hero-badge">UniUI Playground</span>
            <h1>Build once. Ship everywhere.</h1>
            <p>
              Production-ready React primitives backed by a themeable token layer
              and internal Tailwind styling.
            </p>
          </div>

          <div className="button-showcase">
            <Button size="lg" variant="primary">
              Primary Action
            </Button>
            <Button size="lg" variant="secondary">
              Secondary Action
            </Button>
            <Button size="lg" variant="outline">
              Outline Action
            </Button>
            <Button size="lg" variant="ghost">
              Ghost Action
            </Button>
            <Button loading size="md" variant="primary">
              Saving
            </Button>
            <Button disabled size="md" variant="secondary">
              Disabled
            </Button>
          </div>
        </section>

        <ThemeSnapshot />
      </main>
    </ThemeProvider>
  );
}

