import Image from "next/image";

interface WebsiteCardProps {
  title: string;
  iconUrl: string;
}

function WebsiteCard({ title, iconUrl }: WebsiteCardProps) {
  return (
    <div className="min-w-25 max-w-37.5">
      <h5>{title}</h5>
      <Image src={iconUrl} width={24} height={24} alt={title} />
    </div>
  );
}

export default WebsiteCard;
