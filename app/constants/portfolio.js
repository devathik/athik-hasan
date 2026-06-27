import { images } from "./images";

export const portfolioStats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Projects Completed",
  },
  {
    value: "10+",
    label: "Happy Clients",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
];

export const projects = [
  {
    id: "E-commerce",
    title: "Sunnah Store",
    description: "Online Store for halal businesses",
    category: "web",
    image: images.projects.halalJibika,
    technologies: ["Next.js", "Tailwind", "AuthJs"],
    liveUrl: "https://e-coomerce-project.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/e-coomerce-project",
  },
  {
    id: "Bangladesh Open University",
    title: "Institutional Website",
    description: "Information and services for students",
    category: "web",
    image: images.projects.eLearning,
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://bou-university-design.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/bou-university-design",
  },
];
