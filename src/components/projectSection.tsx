import ProjectCard from "./projectCard";
import projects from "../data/projects";

/* Projects Section */
function ProjectsSection() {
  return (
    <section id="projects" className="p-3 mt-13 mb-20">
      <h2 className="section-heading text-left">Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-row-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
