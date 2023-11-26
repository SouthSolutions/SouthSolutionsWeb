import Card from "../components/Card/Card";
import Nav from "../components/Nav/Nav";

const Projects = () => {
  const projects = [
    {
      name: "CraftBeer",
      url: "https://craftbeer-team.netlify.app/",
      image:
        "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",
      description:
        "CraftBeer es una plataforma de e-commerce especializada en la comercialización de cervezas artesanales, crea tu propia cuenta de usuario, o de vendedor, compra o vende tus productos a traves de una plataforma cencilla, moderna e intuitiva, valora tus productos favoritos y filtra por índice de amargor, precio, grado de alcohol y más",
      platform: "web",
    },
    {
      name: "BarberApp",
      url: "",
      image: "",
      description: "",
      platform: "",
    },
    {
      name: "",
      url: "",
      image: "",
      description: "",
      platform: "",
    },
    {
      name: "",
      url: "",
      image: "",
      description: "",
      platform: "",
    },
  ];

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
      <Nav />
      <div className="flex justify-center">
        <h1 className="text-2xl">
          conoce los proyectos en los que trabajan nuestros desarrolladores
        </h1>
      </div>
        <hr />
      <div className="p-3"> {projectsMap}</div>
    </section>
  );
};

export default Projects;
