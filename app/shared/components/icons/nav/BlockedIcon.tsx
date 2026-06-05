import { $theme } from "@/app/shared/store/themeStore";
import { useUnit } from "effector-react";

export default function BlockedIcon() {
  const theme = useUnit($theme);

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M18 0.486481C8.3325 0.486481 0.48645 8.33253 0.48645 18C0.48645 27.6675 8.3325 35.5135 18 35.5135C27.6674 35.5135 35.5135 27.6675 35.5135 18C35.5135 8.33253 27.6674 0.486481 18 0.486481ZM3.98915 18C3.98915 10.259 10.259 3.98918 18 3.98918C21.24 3.98918 24.2173 5.09253 26.5816 6.94897L6.94894 26.5816C5.0253 24.1353 3.98255 21.112 3.98915 18ZM18 32.0108C14.76 32.0108 11.7827 30.9075 9.41834 29.051L29.051 9.41837C30.9746 11.8646 32.0174 14.888 32.0108 18C32.0108 25.741 25.7409 32.0108 18 32.0108Z"
          fill={theme === "light" ? "rgba(195, 0, 0, 0.6)" : "rgb(195, 0, 0)"}
          stroke={
            theme === "light" ? "rgba(195, 0, 0, 0.6)" : "rgba(195, 0, 0)"
          }
          strokeWidth="0.972973"
        />
      </g>
    </svg>
  );
}
