import CurrentlyFocused from "./CurrentlyFocused";
import ContactCard from "./ContactCard";
import { FiMail, FiPhone } from "react-icons/fi";
import { myData } from "@/data/mydata";

const AboutInfo = () => {
  return (
    <div className="shrink-0 w-xs md:w-sm lg:w-xs flex flex-col md:flex-row lg:flex-col md:items-stretch gap-2">
      <CurrentlyFocused />
      <div className="w-full flex flex-col gap-1 mt-1 md:mt-0 lg:mt-1 font-body text-sm">
        <ContactCard Icon={FiMail} value={myData.email} />
        <ContactCard Icon={FiPhone} value={myData.phone} />
      </div>
    </div>
  );
};

export default AboutInfo;
