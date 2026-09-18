import React from "react";
import CopyButton from "../CopyButton";
import { IconType } from "react-icons";

type ContactCardProps = {
  Icon: IconType;
  value: string;
};
const ContactCard = ({ Icon, value }: ContactCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xs border border-border bg-surface p-2.5">
      <Icon className="text-muted" size={18} />
      <span className="flex-1">{value}</span>
      <CopyButton value={value} />
    </div>
  );
};
export default ContactCard;
