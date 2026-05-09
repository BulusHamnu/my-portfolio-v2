import ProjectCard from "./projectCard";
import projects from "../data/projects";
import { motion } from "motion/react";
import { onViewVariants } from "../config/animations";

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
    </motion.section>
  );
}

export default ProjectsSection;
