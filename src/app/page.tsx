import React from "react";
import About from "@/components/about/About";
import TechStack from "@/components/tech-stack/TechStack";
import Profiles from "@/components/profiles/Profiles";

const HomePage = () => {
  return (
    <main>
      <About />
      <Profiles />
      <TechStack />
    </main>
  );
};

export default HomePage;
