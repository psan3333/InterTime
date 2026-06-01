import { useTheme } from "@/app/hooks/useTheme";
import Clickable from "./Clickable";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Clickable
      className="text-foreground bg-surface-2"
      onPointerDown={() => toggleTheme()}
    >
      {theme}
    </Clickable>
  );
}

export default ThemeSwitch;
