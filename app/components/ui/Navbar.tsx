// logic: on mobile screen it must have burger button to show sidebar with navigation buttons
"use client";
import { useState, useCallback, useEffect } from "react";

import SideBar from "./Sidebar";
import MenuBurgerButton from "./input/BurgerButton";
import clsx from "clsx";
import Link from "next/link";
import Logo from "../icons/Logo";

const tabs = [
  {
    text: "Stats",
    link: "/stats",
  },
];

// on large screens it will be only Navbar with buttons
function Navbar() {
  const [showContent, setShowContent] = useState<boolean>(false);

  const toggleContentShown = useCallback(
    () => setShowContent(!showContent),
    [showContent],
  );

  return (
    <div className="flex flex-row-reverse md:flex-row justify-between items-center px-10 w-full h-16">
      <Link href="/">
        <Logo />
      </Link>
      <MenuBurgerButton
        positionStyles="absolute top-0 left-0 max-h-max max-w-max"
        toggleShowContent={toggleContentShown}
        className="md:hidden"
      >
        <SideBar
          tabs={tabs}
          className={clsx(
            "transition-transform origin-left duration-500 border-2 border-black",
            showContent ? "scale-x-100" : "scale-x-0",
          )}
        />
      </MenuBurgerButton>
    </div>
  );
}

export default Navbar;
