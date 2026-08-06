/* Selected Project */
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  links: {
    githubUrl: string;
    liveUrls: {
      type: "docs" | "demo";
      demoUrl?: string;
      docsUrl?: string;
    } | null;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "True Love App",
    description:
      "Built the original Node.js/Express backend for a relationship coaching platform featuring authentication, Stripe payments, email workflows, and background jobs. The production application later migrated to a different backend, but this repository preserves my original implementation.",
    techStack: [
      "Node.js",
      "Stripe",
      "Resend",
      "JavaScript",
      "MongoDB",
      "BullMQ",
    ],
    links: {
      githubUrl: "https://github.com/BulusHamnu/true-love-backend-nodejs",
      liveUrls: {
        type: "docs",
        docsUrl: "https://github.com/BulusHamnu/true-love-backend-nodejs",
      },
    },
  },
  {
    id: 2,
    title: "Siwel Beats App",
    description:
      "A web application for a music producer to upload, stream, and sell beats. Includes user authentication, audio streaming (preview vs full), cart and order system, and file storage handling. Built with Node.js/Express, MongoDB, Supabase, and BullMQ. Frontend in progress.",
    techStack: [
      "Node.js",
      "MongoDB",
      "Supabase",
      "BullMQ",
      "TypeScript",
      "ReactJS",
    ],
    links: {
      githubUrl: "https://github.com/BulusHamnu/siwel-beats-app",
      liveUrls: {
        type: "demo",
        demoUrl: "https://siwel-beats.vercel.app/",
      },
    },
  },
  {
    id: 3,
    title: "Svg Projects Card",
    description:
      "An elegant API that queries GitHub repositories and generates beautiful SVG visualizations that you can embed anywhere - perfect for your README profiles.",
    techStack: ["HTML", "CSS", "JavaScript", "Flask", "FlaskRestful"],
    links: {
      githubUrl: "https://github.com/BulusHamnu/readme-svg-projects-card",
      liveUrls: {
        type: "docs",
        docsUrl: "https://github.com/BulusHamnu/readme-svg-projects-card",
      },
    },
  },
];

export default projects;
