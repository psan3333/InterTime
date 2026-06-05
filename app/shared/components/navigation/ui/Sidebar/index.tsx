import SideLink from "./SideLink";
import clsx from "clsx";

interface SideBarProps {
  tabs: { text: string; link: string }[];
  className: string;
}

function Index({ tabs, className }: SideBarProps) {
  return (
    <div
      className={clsx("flex flex-col gap-4 transition-transform", className)}
    >
      {tabs.map(({ text, link }) => (
        <SideLink key={link} text={text} link={link} />
      ))}
    </div>
  );
}

export default Index;
