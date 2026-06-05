import clsx from "clsx";
import { useUnit } from "effector-react";
import { $theme } from "@/app/shared/store/themeStore";

export default function MenuBurgerIcon() {
  const theme = useUnit($theme);

  return (
    <svg
      width="41"
      height="32"
      viewBox="0 0 41 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 2.25H38.25"
        className={clsx(theme === "dark" ? "stroke-primary" : "stroke-black")}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 15.75H38.25"
        className={clsx(theme === "dark" ? "stroke-primary" : "stroke-black")}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 29.25H38.25"
        className={clsx(theme === "dark" ? "stroke-primary" : "stroke-black")}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
