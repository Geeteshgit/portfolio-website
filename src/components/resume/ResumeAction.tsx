import React from "react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const ResumeAction = () => {
  return (
    <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-start gap-3 text-sm cursor-pointer">
      <a
        href="/resume.pdf"
        download="Geetesh_Resume.pdf"
        className="flex items-center gap-2 rounded-xs bg-primary px-5 py-2.5 text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-1"
      >
        <FiDownload size={18} />
        <span>DOWNLOAD PDF</span>
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xs border border-border p-2 transition-all duration-300 hover:border-primary/50 hover:text-primary px-5 py-2.5 hover:-translate-y-1"
      >
        <span>OPEN IN NEW TAB</span>
        <FiArrowUpRight size={18} />
      </a>
    </div>
  );
};

export default ResumeAction;
