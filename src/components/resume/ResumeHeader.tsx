import React from "react";

const ResumeHeader = () => {
  return (
    <>
      <h1 className="text-6xl tracking-tight sm:text-7xl">Resume</h1>
      <div className="flex gap-8 text-sm mt-5">
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
    </>
  );
};

export default ResumeHeader;
