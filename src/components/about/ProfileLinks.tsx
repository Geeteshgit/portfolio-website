import React from "react";
import { ArrowUpRight } from "lucide-react";
import { IconType } from "react-icons";

type ProfileLinksProps = {
  href: string;
  Icon: IconType;
  label: string;
};

const ProfileLinks = ({ href, Icon, label }: ProfileLinksProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xs border border-border hover:border-primary transition-all bg-surface p-2.5"
    >
      <Icon className="shrink-0 text-muted" size={18} />
      <span className="flex-1">{label}</span>
      <ArrowUpRight size={18} className="shrink-0 text-muted" />
    </a>
  );
};

export default ProfileLinks;
