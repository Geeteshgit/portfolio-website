import { myData } from "@/data/mydata";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="uppercase flex flex-col py-4 text-[0.65rem] text-foreground/75 border-b border-foreground/15 tracking-wider">
          <span>Daily Driver — MacBook Air M5</span>
          <span>Git — Frequently</span>
          <span>Coffee — Probably</span>
          <span>Music — Always</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-sm text-muted">
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted font-body">&copy;</span>
            <span className="text-sm text-muted">
              {new Date().getFullYear()} Geetesh Dalal.
            </span>
          </div>
          <a
            href={`mailto:${myData.email}`}
            className="flex items-center gap-2 group"
          >
            <FiMail
              size={18}
              className="group-hover:text-primary transition-colors duration-300"
            />
            <span className="font-body group-hover:text-primary transition-colors duration-300">
              {myData.email}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
