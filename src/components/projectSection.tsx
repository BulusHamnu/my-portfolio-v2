import ProjectCard from "./projectCard";

/* Projects Section */
function ProjectsSection() {
  return (
    <section id="projects-section" className="p-3 mt-7 mb-4">
      <h2 className="section-heading text-left">Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-row-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default ProjectsSection;
