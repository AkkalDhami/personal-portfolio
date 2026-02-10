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
    slug: "servercn",
    title: "ServerCN",
    description:
      "ServerCN is a component registry for building Node.js backends by composition.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Tailwind" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://servercn.vercel.app/",
    githubUrl: "https://github.com/akkaldhami/servercn",
    features: [
      "Component-First Backend",
      "CLI-First Workflow",
      "Architecture-Aware",
      "Production-Ready by Default",
      "Database-Aware Setup",
      "Transparent & Documented",
      "Dependency-Safe Installs"
    ]
  },
  {
    slug: "evanstore",
    title: "EvanStore Groccery",
    description:
      "EvanStore is a e-commerce platform for grocery shopping. It is a full-stack application built with React, Node.js, and MongoDB.",
    technologies: [
      { name: "React" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Tailwind" }
    ],
    thumbnail: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    liveUrl: "https://evanstore.onrender.com/",
    githubUrl: "https://github.com/AkkalDhami/EVANSTORE-GROCCERY",
    features: [
      "Real-time analytics",
      "Inventory management",
      "Sales tracking",
      "Customer insights",
      "User authentication",
      "Order management",
      "Product management",
      "Payment processing",
      "Shipping integration"
    ]
  }
];
