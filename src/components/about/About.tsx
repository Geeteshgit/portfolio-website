import React from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";

const AboutSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-10 sm:my-20 flex flex-col sm:flex-row sm:justify-between gap-12">
      <AboutImage />
      <AboutContent />
      <AboutInfo />
    </section>
  );
};

export default AboutSection;
