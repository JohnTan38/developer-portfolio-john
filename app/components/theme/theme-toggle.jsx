"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./theme-provider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = theme === "light";
  const iconClass =
    "text-lg transition-transform duration-300 group-hover:scale-110";

  return (
    <button
      type="button"
      aria-label={`Activate ${isLight ? "dark" : "light"} mode`}
      className="group rounded-full border border-[#353a52] bg-transparent p-2 text-theme-primary transition hover:border-[#16f2b3] hover:text-theme-accent"
      onClick={toggleTheme}
    >
      {mounted ? (
        isLight ? <FiMoon className={iconClass} /> : <FiSun className={iconClass} />
      ) : (
        <FiMoon className={`${iconClass} opacity-0`} />
      )}
    </button>
  );
}

export default ThemeToggle;
