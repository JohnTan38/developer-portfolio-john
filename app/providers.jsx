"use client";

import { ThemeProvider } from "./components/theme/theme-provider";

function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
