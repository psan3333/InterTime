import Link from "next/link";

interface SideLinkProps {
  text: string;
  link: string;
}

function SideLink({ text, link }: SideLinkProps) {
  return (
    <Link
      href={link}
      className="flex flex-row gap-6 items-center px-6 text-center"
    >
      {text}
    </Link>
  );
}

export default SideLink;
