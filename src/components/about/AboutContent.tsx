import React from "react";
import { myData } from "@/data/mydata";
import { SlLocationPin } from "react-icons/sl";
import EducationDetails from "./EducationDetails";

const AboutContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="tracking-wide">FULL STACK DEVELOPER</span>
      <h1 className="font-body text-6xl lg:text-7xl tracking-tight text-shadow-[0_0_30px_rgba(255,255,255,0.6)]">
        Geetesh Dalal
      </h1>
      <span className="flex items-center gap-2 text-sm uppercase tracking-wide">
        <SlLocationPin />
        {myData.location}
      </span>
      <div className="flex flex-col gap-2 text-md sm:text-lg font-body mt-4">
        <p>
          I&apos;m usually somewhere between building something and wondering
          how it could work better.
        </p>
        <p>
          Currently specialising in{" "}
          <span className="text-primary">backend</span> engineering, while going
          deeper into cloud infrastructure with{" "}
          <span className="text-primary">AWS</span>.
        </p>
      </div>
      <EducationDetails />
    </div>
  );
};

export default AboutContent;
