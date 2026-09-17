import React from "react";

const CurrentlyFocused = () => {
  return (
    <div className="relative w-full rounded-xs border border-white/10 bg-surface p-5">
      {/* Pulsing status dot */}
      <span className="absolute -left-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
      </span>

      <h3 className="mb-4 text-sm font-medium uppercase text-muted">
        Currently focused on
      </h3>

      <ul className="space-y-4 text-sm font-body">
        <li className="flex gap-2">
          <span className="text-primary">&gt;</span>
          <span>
            Strengthening my DSA and problem-solving skills through consistent
            practice.
          </span>
        </li>

        <li className="flex gap-2">
          <span className="text-primary">&gt;</span>
          <span>
            Building expertise in backend engineering and AWS cloud
            infrastructure.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentlyFocused;
