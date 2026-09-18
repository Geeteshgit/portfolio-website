import React from "react";
import ContactCard from "./ContactCard";
import ProfileLinks from "./ProfileLinks";
import { myData } from "@/data/mydata";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const ContactnProfileContainer = () => {
  return (
    <div className="w-full flex flex-col gap-1 mt-1 md:mt-0 lg:mt-1 font-body text-sm">
      <div className="w-full flex flex-col gap-1">
        <ContactCard Icon={FiMail} value={myData.email} />
        <ContactCard Icon={FiPhone} value={myData.phone} />
      </div>
      <ProfileLinks
        href={myData.linkedin}
        Icon={FaLinkedinIn}
        label="LinkedIn"
      />
      <ProfileLinks href={myData.github} Icon={FaGithub} label="GitHub" />
      <div className="w-full grid grid-cols-2 gap-1">
        <ProfileLinks
          href={myData.leetcode}
          Icon={SiLeetcode}
          label="LeetCode"
        />
        <ProfileLinks
          href={myData.geeksforgeeks}
          Icon={SiGeeksforgeeks}
          label="GFG"
        />
      </div>
    </div>
  );
};

export default ContactnProfileContainer;
