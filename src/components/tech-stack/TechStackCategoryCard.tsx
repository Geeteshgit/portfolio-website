import React from "react";

type TechStackCategoryCardProps = {
  category: {
    title: string;
    subtitle: string;
    technologies: string[];
  };
};

const TechStackCategoryCard = ({ category }: TechStackCategoryCardProps) => {
  return (
    <div
      key={category.title}
      className="rounded-xs border border-border bg-surface p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300 group"
    >
      <h3 className="tracking-widest uppercase">{category.title}</h3>

      <p className="mt-1 text-xs text-muted font-body">{category.subtitle}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-xs tracking-wider uppercase border border-border bg-background px-3 py-1.5 text-xs group-hover:border-primary/50 transition-all duration-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackCategoryCard;
