import ProjectCard from "../components/Projectcard"

function Projects() {

  return (

    <section className="projects" id="projects">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">

        <ProjectCard
          title="Curtain World Website"
          desc="Live business website deployed using custom domain."
          github="https://github.com/shahana133/curtainwebsite"
          live="https://curtainworldptkra.in"
        />

        <ProjectCard
          title="Organic Fruits & Vegetables System"
          desc="Full stack Django application connecting farmers and customers."
          github="https://github.com/shahana133/organic-webapp"
          live="https://shahana133.github.io/organic-webapp"
        />

        <ProjectCard
          title="Hydraulics React Website"
          desc="React based spare parts website."
          github="https://github.com/shahana133/metric-mechanical"
          live="https://shahana133.github.io/metric-mechanical/"
        />

        <ProjectCard
          title="Restaurant Menu System"
          desc="Python based menu management and billing system."
          github="https://github.com/shahana133/entri-mini-project-git"
        />

       

      </div>

    </section>

  )
}

export default Projects