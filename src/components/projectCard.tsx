import { MoveUpRight } from "lucide-react";
import { type Project } from "../data/projects";
import { motion } from "motion/react";

/* Project Card */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{
        translateY: -6,
        boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.1 },
      }}
      // transition={{ duration: 0.3 }}
      className="project-card card h-full p-4 text-left grid grid-rows-[auto_1fr_auto] lg:grid-rows-[35%_1fr_auto] gap-2 overflow-hidden"
    >
      <div>
        <h3 className="text-center text-lg md:text-2xl font-bold mb-4">
          {project.title}
        </h3>
        <div className="project-tech-stack flex flex-row flex-wrap items-start gap-2 mt-3 mb-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="tech py-0.5 px-5 text-sm rounded-md border border-gray-800 text-stone-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p style={{ lineHeight: "28px" }}>{project.description}</p>
      <div className="flex flex-row w-full gap-3 mt-3">
        <a href={project.links.githubUrl} className="w-full">
          <button className="flex flex-row no-wrap gap-2 button-secondary border rounded-sm px-5 lg:px-4 py-2 w-full cursor-pointer items-center justify-center text-sm md:text-lg">
            <span>View Code</span>
            <MoveUpRight size={18} />
          </button>
        </a>
        {project.links.demoUrl ? (
          <a href={project.links.demoUrl} className="w-full">
            <button className="flex flex-row no-wrap gap-2 button-primary border rounded-sm px-5 lg:px-4 py-2 w-full cursor-pointer items-center justify-center text-sm md:text-lg">
              <span>Live Demo</span>
              <MoveUpRight size={18} />
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
