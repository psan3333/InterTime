import { useTheme } from "@/app/shared/hooks/useTheme";
import Clickable from "./Clickable";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Clickable
      className="text-foreground bg-surface-2"
      onPointerDown={() => toggleTheme()}
    >
      <svg
        fill={theme === "light" ? "black" : "white"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12z"></path>
      </svg>
    </Clickable>
  );
}

export default ThemeSwitch;
