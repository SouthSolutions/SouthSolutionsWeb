import Card from "../components/Card/Card";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { fechProjects } from "../data/data";

const projects = fechProjects();

const Projects = () => {
  const projectsMap = projects.map((project) => {
    return (
      <main key={project.name}>
        <section>
          <Card
            name={project.name}
            url={project.url}
            description={project.description}
            image={project.image}
            platform={project.platform}
          />
        </section>
      </main>
    );
  });
  return (
    <section>
      <nav>
        <Nav />
      </nav>
      <hr />

      <div className="flex justify-center">
        <h1 className="text-2xl p-3 text-center md:p-5 lg:p-7">
          Conoce los proyectos en los que trabajan nuestros desarrolladores
        </h1>
      </div>
      <hr />
      <div className="flex justify-between p-3 m-3 flex-wrap md:flex-row md:p-6 md:m-7 ">
        {projectsMap}
      </div>

      <footer className="pt-[6rem]">
        <Footer />
      </footer>
    </section>
  );
};

export default Projects;
