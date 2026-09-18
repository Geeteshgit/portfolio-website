type TechStackCategory = {
  title: string;
  subtitle: string;
  technologies: string[];
};

export const techStack: TechStackCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "The building blocks I code with",
    technologies: ["C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    subtitle: "Where the core logic happens",
    technologies: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
  },
  {
    title: "Frontend",
    subtitle: "Where ideas become interactive",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    subtitle: "Where data finds its home",
    technologies: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Where code meets infrastructure",
    technologies: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    title: "Tools & Workflow",
    subtitle: "The tools behind the workflow",
    technologies: ["Postman", "VSCode"],
  },
];

export default techStack;
