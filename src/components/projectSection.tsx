import ProjectCard from "./projectCard";
import projects from "../data/projects";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Projects Section */
function ProjectsSection() {
  return (
    <motion.section
      variants={onViewVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="projects"
      className="p-3 mt-13 mb-20"
    >
      <h2 className="section-heading text-left">Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-row-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex flex-row flex-nowrap justify-between items-center mt-4">
        <motion.button
          whileHover={{
            color: "#f59e0b",
            transition: { duration: 0.3 },
          }}
          disabled
          className="text-[#919090] text-xs p-3 cursor-pointer disabled:cursor-not-allowed flex flex-row flex-nowrap gap-0.5 items-center"
        >
          <ChevronLeft size={17} />
          PREV
        </motion.button>
        <motion.button className="text-white text-xs p-3 cursor-pointer disabled:cursor-not-allowed flex flex-row flex-nowrap gap-0.5 items-center">
          NEXT
          <ChevronRight size={17} />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
