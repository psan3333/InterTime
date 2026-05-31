import { PointerEventHandler, ReactNode } from "react";
import clsx from "clsx";

interface ClickableProps {
  onPointerDown: PointerEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
}

function Clickable({ onPointerDown, className, children }: ClickableProps) {
  return (
    <button
      onPointerDown={onPointerDown}
      className={clsx("rounded-full", className)}
    >
      {children}
    </button>
  );
}

export default Clickable;
