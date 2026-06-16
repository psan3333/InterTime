import { SiteType } from "@/app/shared/types";
import SiteCard from "./SiteCard";
import clsx from "clsx";

interface SiteCardContainerProps {
  className: string;
  category: SiteType;
}

export default function SiteCardContainer({
  category,
  className,
}: SiteCardContainerProps) {
  return (
    <div
      className={clsx(
        "p-10 flex flex-row flex-wrap overflow-y-auto gap-7.5",
        className,
      )}
    >
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
      <SiteCard />
    </div>
  );
}
