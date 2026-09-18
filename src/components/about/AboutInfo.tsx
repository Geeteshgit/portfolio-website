import ContactnProfileContainer from "./ContactnProfileContainer";
import CurrentlyFocused from "./CurrentlyFocused";

const AboutInfo = () => {
  return (
    <div className="shrink-0 w-xs md:w-sm lg:w-xs flex flex-col md:flex-row lg:flex-col md:items-stretch gap-2">
      <CurrentlyFocused />
      <ContactnProfileContainer />
    </div>
  );
};

export default AboutInfo;
