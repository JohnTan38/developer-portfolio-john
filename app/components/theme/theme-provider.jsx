"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "portfolio-theme";

function applyThemeClass(theme) {
  if (typeof document === "undefined") return;
  const body = document.body;
  body.classList.remove("theme-light", "theme-dark");
  body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      applyThemeClass(storedTheme);
      return;
    }

    const initialTheme = "dark";
    setTheme(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    applyThemeClass(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
