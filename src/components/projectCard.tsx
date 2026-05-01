import { MoveUpRight } from "lucide-react";

/* Project Card */
function ProjectCard() {
  const techStack = ["HTML", "CSS", "JavaScript", "Nodejs", "TypeScript"];

  return (
    <div className="project-card card h-fit p-4 text-left grid grid-rows-[auto_1fr_auto] gap-2 overflow-hidden">
      <div>
        <h3 className="text-center text-lg md:text-2xl font-bold mb-4">
          Task Management Application
        </h3>
        <div className="project-tech-stack flex flex-row flex-wrap items-start gap-2 mt-3 mb-2">
          {techStack.map((tech) => (
            <span className="tech py-0.5 px-5 text-sm rounded-md border border-gray-800 text-stone-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p style={{ lineHeight: "28px" }}>
        TaskFlow is a full-featured task management application designed for
        small teams and solo developers. Users can create multiple projects, add
        tasks with descriptions and due dates, assign priorities (Low, Medium,
        High), and track completion status. The app includes user
        authentication, real-time updates, and a dashboard showing overdue tasks
        and progress metrics. Built with React, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex flex-row w-full gap-3 mt-3">
        <a href="#" className="w-full">
          <button className="flex flex-row no-wrap gap-2 button-secondary border rounded-sm px-5 lg:px-4 py-2 w-full cursor-pointer items-center justify-center text-sm md:text-lg">
            <span>View Code</span>
            <MoveUpRight size={18} />
          </button>
        </a>
        <a href="#" className="w-full">
          <button className="flex flex-row no-wrap gap-2 button-primary border rounded-sm px-5 lg:px-4 py-2 w-full cursor-pointer items-center justify-center text-sm md:text-lg">
            <span>Live Demo</span>
            <MoveUpRight size={18} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
