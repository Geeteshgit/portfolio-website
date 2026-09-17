import React from "react";
import Image from "next/image";
import profilepic from "@/assets/profilepic.png";

const AboutImage = () => {
  return (
    <div className="shrink-0 relative h-40 w-40 sm:h-50 sm:w-50 overflow-hidden rounded-xs border-2 border-primary shadow-[0_0_25px_var(--color-primary)]">
      <Image
        src={profilepic}
        alt="Geetesh Dalal"
        className="object-cover"
        fill
      />
    </div>
  );
};

export default AboutImage;
