import { SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import ProfileCard from "./ProfileCard";
import { FaGithub } from "react-icons/fa6";
import { myData } from "@/data/mydata";
import SectionTitle from "../SectionTitle";

const Profiles = () => {
  return (
    <section
      id="profiles"
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-10 sm:pb-20 flex flex-col gap-6 scroll-mt-16"
    >
      <SectionTitle tag="Profiles" title="Find me elsewhere" />
      <div className="mt-5 grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
        <ProfileCard
          label="GitHub"
          Icon={FaGithub}
          href={myData.github}
          line="Where the code lives, breaks, and gets fixed."
        />
        <ProfileCard
          label="LeetCode"
          Icon={SiLeetcode}
          href={myData.leetcode}
          line="Turning coffee into accepted submissions."
        />
        <ProfileCard
          label="GFG"
          Icon={SiGeeksforgeeks}
          href={myData.geeksforgeeks}
          line="DSA practice with a side of technical deep dives."
        />
        <ProfileCard
          label="CodeForces"
          Icon={SiCodeforces}
          href={myData.codeforces}
          line="Where algorithms meet the pressure of a timer."
        />
      </div>
    </section>
  );
};

export default Profiles;
