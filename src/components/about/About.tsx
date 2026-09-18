import React from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-20 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-12 scroll-mt-16"
    >
      <AboutImage />
      <AboutContent />
      <AboutInfo />
    </section>
  );
};

export default AboutSection;
