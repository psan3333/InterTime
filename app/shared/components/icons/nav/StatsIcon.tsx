import { $theme } from "@/app/shared/store/themeStore";
import { useUnit } from "effector-react";

export default function StatsIcon() {
  const theme = useUnit($theme);

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.47368 5.14286L17.0526 5.14285V36L9.47368 36V5.14286Z"
        fill={theme === "light" ? "#DA1414" : "#C9C9C9"}
      />
      <path
        d="M18.9474 12.8571H26.5263V36L18.9474 36V12.8571Z"
        fill={theme === "light" ? "#65A21A" : "#A9B3EF"}
      />
      <path
        d="M0 15.4286H7.57895V36L0 36V15.4286Z"
        fill={theme === "light" ? "#0829FF" : "#CFFE95"}
      />
      <path
        d="M28.4211 0H36V36H28.4211V0Z"
        fill={theme === "light" ? "#80139E" : "#E8C9C9"}
      />
    </svg>
  );
}
