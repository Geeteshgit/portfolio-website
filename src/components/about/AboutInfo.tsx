import CurrentlyFocused from "./CurrentlyFocused";
import ContactDetails from "./ContactDetails";
import ProfileLinks from "./ProfileLinks";
import { myData } from "@/data/mydata";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const AboutInfo = () => {
  return (
    <div className="shrink-0 w-xs md:w-sm lg:w-xs flex flex-col md:flex-row lg:flex-col md:items-start gap-2">
      <CurrentlyFocused />
      {/* Contact Information */}
      <div className="w-full flex flex-col gap-1 mt-1 md:mt-0 lg:mt-1 font-body text-sm">
        <div className="w-full flex flex-col gap-1">
          <ContactDetails Icon={FiMail} value={myData.email} />
          <ContactDetails Icon={FiPhone} value={myData.phone} />
        </div>
        <ProfileLinks
          href={myData.linkedin}
          Icon={FaLinkedinIn}
          label="LinkedIn"
        />
        <div className="w-full grid grid-cols-2 gap-1">
          <ProfileLinks href={myData.github} Icon={FaGithub} label="GitHub" />
          <ProfileLinks
            href={myData.leetcode}
            Icon={SiLeetcode}
            label="LeetCode"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
