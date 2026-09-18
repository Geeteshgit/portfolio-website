import React from "react";

type SectionTitleProps = {
  tag: string;
  title: string;
};

const SectionTitle = ({ tag, title }: SectionTitleProps) => {
  return (
    <div>
      <span className="text-xs font-medium uppercase text-muted">{tag}</span>

      <h2 className="bg-linear-to-r bg-clip-text text-transparent from-primary to-foreground mt-2 text-3xl tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
