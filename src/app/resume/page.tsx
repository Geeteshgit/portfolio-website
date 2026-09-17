import React from "react";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeAction from "@/components/resume/ResumeAction";
import ResumeTerminal from "@/components/resume/ResumeTerminal";

const ResumePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 my-10 sm:my-20">
      <ResumeHeader />
      <ResumeAction />
      <ResumeTerminal />

      <p className="mt-4 text-xs text-muted-foreground">
        The professionally formatted version of “here&apos;s what I&apos;ve been
        up to.”
      </p>
    </main>
  );
};

export default ResumePage;
