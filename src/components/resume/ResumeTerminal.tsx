import React from "react";

const ResumeTerminal = () => {
  return (
    <div className="mt-5 sm:mt-10 w-full">
      <div className="w-full overflow-hidden rounded-sm border border-border bg-black">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />

          <span className="ml-3 text-xs text-white/50">geetesh — -zsh</span>
        </div>

        {/* Terminal Command */}
        <div className="px-4 py-3 text-xs">
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
            src="/resume.pdf#zoom=100"
            title="Geetesh's Resume"
            className="h-[900px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeTerminal;
