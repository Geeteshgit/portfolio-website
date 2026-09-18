import React from "react";
import About from "@/components/about/About";
import TechStack from "@/components/tech-stack/TechStack";
import Profiles from "@/components/profiles/Profiles";
import TechnologiesMarquee from "@/components/TechnologiesMarquee";

const HomePage = () => {
  return (
    <main>
      <About />
      <Profiles />
      <TechStack />
      <TechnologiesMarquee />
    </main>
  );
};

export default HomePage;
