/* Selected Project */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  links: {
    githubUrl: string;
    demoUrl: string | null;
  };
}

const projects: Project[] = [
  {
    title: "True Love App",
    description:
      "A web app for couples to book consultations, join a 6-week transformation program, access relationship courses, and upgrade to 1-on-1 coaching. Built with Node.js/Express, Stripe, Resend, and Lovable for front-end.",
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
      demoUrl: "https://true-love.app/",
    },
  },
  {
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
      demoUrl: null,
    },
  },
  {
    title: "Svg Projects Card",
    description:
      "An elegant API that queries GitHub repositories and generates beautiful SVG visualizations that you can embed anywhere - perfect for your README profiles.",
    techStack: ["HTML", "CSS", "JavaScript", "Flask", "FlaskRestful"],
    links: {
      githubUrl: "https://github.com/BulusHamnu/readme-svg-projects-card",
      demoUrl: "https://github.com/BulusHamnu/readme-svg-projects-card",
    },
  },
];

export default projects;
