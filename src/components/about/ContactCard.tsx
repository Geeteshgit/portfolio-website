import React from "react";
import CopyButton from "../CopyButton";
import { IconType } from "react-icons";

type ContactCardProps = {
  Icon: IconType;
  value: string;
  type: "email" | "phone";
};

const ContactCard = ({ Icon, value, type }: ContactCardProps) => {
  const href = type === "email" ? `mailto:${value}` : `tel:${value}`;

  return (
    <div className="flex items-center gap-3 rounded-xs border border-border bg-surface p-2.5">
      <Icon className="text-muted" size={18} />

      <a
        href={href}
        className="flex-1 transition-colors duration-300 hover:text-primary"
      >
        {value}
      </a>

      <CopyButton value={value} />
    </div>
  );
};

export default ContactCard;
