import CurrentlyFocused from "./CurrentlyFocused";
import ContactCard from "./ContactCard";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { myData } from "@/data/mydata";
import { FaLinkedinIn } from "react-icons/fa6";

const AboutInfo = () => {
  return (
    <div className="w-full shrink-0 max-w-sm md:w-sm lg:w-xs flex flex-col lg:flex-col md:items-stretch gap-2">
      <CurrentlyFocused />
      <div className="flex flex-col gap-1">
        <div className="w-full flex flex-col gap-1 mt-1 font-body text-sm">
          <ContactCard Icon={FiMail} value={myData.email} type="email" />
          <ContactCard Icon={FiPhone} value={myData.phone} type="phone" />
        </div>
        <a
          href={myData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xs border border-border hover:border-primary transition-all bg-surface p-2.5 group"
        >
          <FaLinkedinIn className="shrink-0 text-muted" size={18} />
          <span className="flex-1 text-sm font-body">LinkedIn</span>
          <FiArrowUpRight
            size={18}
            className="shrink-0 text-muted group-hover:text-primary transition-colors duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutInfo;
