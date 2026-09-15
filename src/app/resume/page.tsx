import React from "react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const ResumePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-10 sm:my-20">
      {/* 1. Resume Heading */}
      <h1 className="text-6xl tracking-tight sm:text-7xl">Resume</h1>

      {/* 2. Resume Info */}
      <div className="mt-5">
        <div className="flex gap-8 text-sm">
          <div className="flex flex-col gap-1 text-primary">
            <span>status</span>
            <span>format</span>
            <span>last_updated</span>
          </div>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <span>actively building</span>
            <span>PDF</span>
            <span>September 2026</span>
          </div>
        </div>
      </div>

      {/* 3. Action Buttons */}
      <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-start gap-3">
        <a
          href="/resume.pdf"
          download="Geetesh_Resume.pdf"
          className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-1 cursor-pointer"
        >
          <FiDownload size={18} />
          <span>DOWNLOAD PDF</span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-border p-2 transition-all duration-200 hover:border-primary/50 hover:text-primary px-5 py-2.5 text-sm hover:-translate-y-1 cursor-pointer"
        >
          <span>OPEN IN NEW TAB</span>
          <FiArrowUpRight size={18} />
        </a>
      </div>

      {/* 4. Resume */}
      <div className="mt-5 sm:mt-10 w-full">
        <div className="w-full overflow-hidden rounded-xl border border-border bg-black">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />

            <span className="ml-3 text-xs text-white/50">geetesh — -zsh</span>
          </div>

          {/* Terminal Command */}
          <div className="px-4 py-3 text-sm">
            <p>
              <span className="text-green-400">geetesh@portfolio</span>
              <span className="text-white/50">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white/50">$</span>{" "}
              <span className="text-white">cat resume.pdf</span>
            </p>
          </div>

          {/* PDF */}
          <div className="w-full bg-white">
            <iframe
              src="/resume.pdf#zoom=125"
              title="Geetesh's Resume"
              className="h-[900px] w-full"
            />
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        The professionally formatted version of “here&apos;s what I&apos;ve been
        up to.”
      </p>
    </main>
  );
};

export default ResumePage;
