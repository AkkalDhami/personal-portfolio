import { IPlaybook } from "@/types/app.types";

export const PLAYBOOK_DATA = [
  {
    slug: "rest-api-basic",
    title: "REST API Design Principles",
    description:
      "REST API design principles are guidelines used to build scalable, maintainable, and predictable APIs.",
    docs: "/docs/rest-api-basic"
  },
  {
    slug: "http-status-codes",
    title: "HTTP Methods and Status Codes",
    description:
      "HTTP methods define what action the client wants to perform on a resource, while HTTP status codes indicate the result of that action.",
    docs: "/docs/http-status-codes"
  },
  {
    slug: "backend-fundamentals-01",
    title: "Backend Fundamentals: 01",
    description:
      "Backend fundamentals encompass the core concepts and technologies that form the foundation of backend development, including server architecture, databases, APIs, and security.",
    docs: "/docs/backend-fundamentals-01"
  },
  {
    slug: "backend-fundamentals-02",
    title: "Backend Fundamentals: 02",
    description:
      "Backend fundamentals encompass the core concepts and technologies that form the foundation of backend development, including server architecture, databases, APIs, and security.",
    docs: "/docs/backend-fundamentals-02"
  },
  {
    slug: "github-oauth",
    title: "GitHub OAuth",
    description:
      "An end-to-end GitHub OAuth flow designed for scalable backend systems.",
    docs: "/docs/github-oauth"
  },
  {
    slug: "google-oauth",
    title: "Google OAuth",
    description:
      "An end-to-end Google OAuth flow designed for scalable backend systems.",
    docs: "/docs/google-oauth"
  }
] satisfies IPlaybook[];
