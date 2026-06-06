import { useUnit } from "effector-react";
import { $theme, changeTheme } from "@/app/shared/store/themeStore";
import { useCallback, useEffect } from "react";
import { Theme } from "@/app/shared/types";

export function useTheme() {
  const [theme, onSetTheme] = useUnit([$theme, changeTheme]);

  const toggleTheme = useCallback(() => onSetTheme(undefined), [onSetTheme]);
  const setTheme = useCallback(
    (theme: Theme) => onSetTheme(theme),
    [onSetTheme],
  );

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    setTheme(
      !!savedTheme ? (savedTheme as Theme) : prefersDark ? "dark" : "light",
    );
  }, [setTheme]);

  useEffect(() => {
    // setup Tailwind CSS theming
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
