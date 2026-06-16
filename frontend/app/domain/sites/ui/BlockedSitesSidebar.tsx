import clsx from "clsx";

interface BlockedSitesSidebarProps {
  className?: string;
}

export default function BlockedSitesSidebar({
  className,
}: BlockedSitesSidebarProps) {
  return (
    <div
      className={clsx(
        "w-90 h-[calc(100vh-64px)] bg-surface-1 border-r-2 border-surface-4",
        className,
      )}
    ></div>
  );
}
