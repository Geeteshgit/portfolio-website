import techStack from "@/data/tech-stack";
import TechStackCategoryCard from "./TechStackCategoryCard";

const TechStack = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 flex flex-col gap-6">
      <div>
        <p className="text-primary">Tech Stack</p>

        <h2 className="mt-2 text-3xl tracking-tight md:text-4xl">
          What I work with
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2">
        {techStack.map((category) => (
          <TechStackCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
