import { PointerEventHandler, ReactNode } from "react";
import Clickable from "@/app/shared/components/ui/input/Clickable";
import MenuBurgerIcon from "@/app/shared/components/icons/MenuBurgerIcon";

interface MenuBurgerButtonProps {
  children: ReactNode;
  toggleShowContent: PointerEventHandler<HTMLButtonElement>;
  positionStyles: string;
  className?: string;
}

function MenuBurgerButton({
  children,
  toggleShowContent,
  positionStyles,
  className,
}: MenuBurgerButtonProps) {
  return (
    <Clickable onPointerDown={toggleShowContent} className={className}>
      <MenuBurgerIcon size={36} className="fill-primary" />
      <div className={positionStyles}>{children}</div>
    </Clickable>
  );
}

export default MenuBurgerButton;
