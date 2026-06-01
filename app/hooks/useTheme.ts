import { useUnit } from "effector-react";
import { $theme, changeTheme } from "@/app/store/themeStore";
import { Theme } from "@/types";

export function useTheme() {
  const [theme, onSetTheme] = useUnit([$theme, changeTheme]);

  const toggleTheme = () => onSetTheme(undefined);
  const setTheme = (theme: Theme) => onSetTheme(theme);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
