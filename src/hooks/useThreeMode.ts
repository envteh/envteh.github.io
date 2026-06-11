import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

export function useThreeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as ThemeMode) ?? "system";
  });

  // ✅ isDark bukan state, tapi derived langsung dari mode
  const getIsDark = (currentMode: ThemeMode): boolean => {
    if (currentMode === "dark") return true;
    if (currentMode === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // Apply class ke <html> setiap mode berubah
  useEffect(() => {
    const root = document.documentElement;
    const dark = getIsDark(mode);

    root.classList.toggle("dark", dark);

    if (mode === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", mode);
    }
  }, [mode]); // ✅ cukup depend ke mode aja

  // Listen system change — hanya aktif kalau mode === "system"
  useEffect(() => {
    if (mode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // ✅ langsung manipulasi DOM, gak perlu setState
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  const setTheme = (newMode: ThemeMode) => setMode(newMode);

  // ✅ isDark dihitung saat render, bukan disimpan di state
  const isDark = getIsDark(mode);

  return { isDark, mode, setTheme } as const;
}
