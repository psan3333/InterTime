import { Theme } from "@/app/shared/types";
import { createStore, createEvent } from "effector";

const $theme = createStore<Theme>("light");

const changeTheme = createEvent<Theme | undefined>();

$theme.on(changeTheme, (oldTheme: Theme, newTheme?: Theme) => {
  if (newTheme) return newTheme;
  if (oldTheme === "light") return "dark";
  if (oldTheme === "dark") return "light";
});

export { $theme, changeTheme };
