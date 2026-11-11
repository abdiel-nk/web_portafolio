export interface PortfolioProject {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  visual: string;
}

export const projects: PortfolioProject[] = [
  {
    number: "01",
    title: "Inventory Management",
    category: "Frontend · Product interface",
    description:
      "An inventory interface focused on clear data presentation, reusable UI patterns, and a practical management workflow.",
    stack: ["React", "Supabase", "TanStack Table", "React Query", "Vite"],
    href: "https://github.com/abdiel-nk/inventario-upeu",
    visual: "project-art-inventory",
  },
  {
    number: "02",
    title: "Event Website",
    category: "Web design · Interaction",
    description:
      "An event website exploring visual storytelling through layered backgrounds, a media carousel, and motion details.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    href: "https://github.com/abdiel-nk/website-1",
    visual: "project-art-event",
  },
];
