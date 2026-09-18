import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";

interface ProfileCardProps {
  label: string;
  Icon: IconType;
  line: string;
  href: string;
}

const ProfileCard = ({ label, Icon, line, href }: ProfileCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-60 flex-col rounded-xs border border-border bg-surface p-5 hover:shadow-[0_0_25px_rgba(168,85,247,0.30)] hover:border-primary transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors duration-300">
          {label}
        </span>
        <FiArrowUpRight
          size={18}
          className="text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Icon
          size={64}
          className="text-foreground transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="self-end text-xs text-muted">{line}</p>
    </Link>
  );
};

export default ProfileCard;
