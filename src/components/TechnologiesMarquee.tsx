"use client";

import React from "react";
import { technologies } from "@/data/technologies";
import Marquee from "react-fast-marquee";

const TechnologiesMarquee = () => {
  return (
    <div className="border-t border-foreground/15 bg-transparent mt-10 lg:mt-20">
      <Marquee
        autoFill
        speed={30}
        direction="left"
        pauseOnHover
        className="text-xs sm:text-sm tracking-[0.22em] uppercase text-foreground py-7 overflow-y-hidden"
      >
        {technologies.map((tech) => (
          <span key={tech} className="mx-8">
            {tech}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TechnologiesMarquee;
