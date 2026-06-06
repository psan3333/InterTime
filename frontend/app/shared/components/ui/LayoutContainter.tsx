import { ReactNode } from "react";

interface LayoutContainerProps {
  children: ReactNode;
}

function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <div className="w-full h-full flex flex-row overflow-y-auto">
      {children}
    </div>
  );
}

export default LayoutContainer;
