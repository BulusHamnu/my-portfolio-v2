import ProjectCard from "./projectCard";
import projects from "../data/projects";
import { motion, AnimatePresence } from "motion/react";
import { onViewVariants } from "../config/animations";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* Projects Section */
function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  const skip = (currentPage - 1) * limit;
  const totalPages = Math.ceil(projects.length / limit);
  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;
  const selectedProjects = projects.slice(skip, skip + limit);

  function showNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function showPrevPage() {
    setCurrentPage(currentPage - 1);
  }

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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
          className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-row-auto"
        >
          {selectedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -30 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-row flex-nowrap justify-between items-center mt-4">
        <motion.button
          onClick={() => showPrevPage()}
          disabled={!hasPrev}
          className={`${hasPrev ? "text-white hover:text-amber-500" : "text-[#919090]"} text-xs p-3 cursor-pointer disabled:cursor-not-allowed flex flex-row flex-nowrap gap-0.5 items-center  transition-colors duration-300`}
        >
          <ChevronLeft size={17} />
          PREV
        </motion.button>
        <span className="text-[#919090] text-sm">
          {currentPage} / {totalPages}
        </span>
        <motion.button
          onClick={() => showNextPage()}
          disabled={!hasNext}
          className={`${hasNext ? "text-white hover:text-amber-500" : "text-[#919090]"} text-xs p-3 cursor-pointer disabled:cursor-not-allowed flex flex-row flex-nowrap gap-0.5 items-center transition-colors duration-300`}
        >
          NEXT
          <ChevronRight size={17} />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
