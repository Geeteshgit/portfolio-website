import React from "react";
import Image from "next/image";
import bennettLogo from "@/assets/bennett.png";

const EducationDetails = () => {
  return (
    <div className="flex items-center gap-4 mt-2 sm:mt-4">
      {/* Bennett Logo */}
      <div className="shrink-0">
        <Image
          src={bennettLogo}
          alt="Bennett University"
          width={45}
          height={45}
        />
      </div>

      {/* Education Details */}
      <div className="flex flex-col gap-px text-sm font-body">
        <span>Bennett University · 2023-2027</span>
        <span>B.Tech CSE</span>
        <span>8.88 CGPA</span>
      </div>
    </div>
  );
};

export default EducationDetails;
