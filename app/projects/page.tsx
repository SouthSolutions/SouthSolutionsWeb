import Card from "../components/Card/Card";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

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
      name: "BarberApp Admin",
      url: "https://play.google.com/store/apps/details?id=com.barber18273.barbercli",
      image:
        "https://play-lh.googleusercontent.com/65xtwAMIbshCBa7-Lmw5RAMeGTxcEkMO27n42bw8dGKpM4xGC6xZw517RHmosRY-V7I=w240-h480-rw",
      description:
        "Barber admin es la aplicación movil destinada al la administración de turnos mediante la app de usuario BarberApp, donde el administrador podra aceptar o rechazar los turnos pendientes, agregar, editar o eliinar datos de la misma, como ser días y horarios, estilistas disponibles, etc. admás podrá ver las métricas de su clientela para monitorear su estrategia de crecimiento",
      platform: "App",
    },
    {
      name: "BarberApp",
      url: "https://play.google.com/store/apps/details?id=com.barber18273.barberApp",
      image:
        "https://play-lh.googleusercontent.com/55Os7RKOtKfX8iuYjowtZZ807taXF1rCJEN52wRdnzGlBo35qszFaRpeLDxbYBDp4U6Q=w240-h480-rw",
      description:
        "BarberApp es una aplicación de gestion de turnos para  barberías, peluquerías y/o salones de estilismo en el cual el usuario cliente podra ver la disponibilidad de de días y horarios, los estilistas disponibles en dicho turno ver la informacion del local agendar un turno y confirmarlo, de esta manera se simplifica y dinamiza el trabajo tanto de la reserva como de la gestión",
      platform: "app",
    },
    {
      name: "World of Dogs",
      url: "https://world-of-dogs.netlify.app/",
      image: "https://world-of-dogs.netlify.app/assets/WoD-211776fb.png",
      description:
        "WoD es una web donde el usuario podrá consultar la información detallada de diferentes razas de perros (imagen, temperamento, altura, peso, etc). además el usuario tendrá la posibilidad de cear su propio ejemplar si es que el mismo no se encuentra en la base de datos",
      platform: "web",
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
      <nav>
        <Nav />
      </nav>
      <hr />

      <div className="flex justify-center">
        <h1 className="text-2xl p-3">
          Conoce los proyectos en los que trabajan nuestros desarrolladores
        </h1>
      </div>
      <hr />
      <div className="flex justify-between p-5 m-6 flex-wrap md:flex-row">
        {projectsMap}
      </div>
      <Footer />
    </section>
  );
};

export default Projects;
