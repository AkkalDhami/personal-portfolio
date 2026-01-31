export interface Technology {
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  description?: string;
  technologies: Technology[];
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "TailwindCSS" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Real-time analytics",
      "Inventory management",
      "Sales tracking",
      "Customer insights"
    ]
  },
  {
    slug: "servercn",
    title: "ServerCN",
    description:
      "ServerCN is a component registry for building Node.js backends by composition.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "TailwindCSS" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Real-time analytics",
      "Inventory management",
      "Sales tracking",
      "Customer insights"
    ]
  },
  {
    slug: "jobify",
    title: "Jobify",
    description:
      "Jobify is a job board for developers. It is a platform where developers can find jobs and companies can find developers.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "TailwindCSS" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Real-time analytics",
      "Inventory management",
      "Sales tracking",
      "Customer insights"
    ]
  }
];
