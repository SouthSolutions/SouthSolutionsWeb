import Image from "next/image";
import Link from "next/link";
import movil from "../public/movil.jpeg";
import pc from "../public/pc.jpeg";
import SouthSolutions4 from "../public/SouthSolutions4.jpg";
import SouthSolutions5 from "../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../public/SouthSolutionstext.jpg";
import Projects from "./projects/page";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";


export default function Home() {
  const back1 = "#d4f2fc";
  const back2 = "#edf5f7";

  const prueba1 = () => {
    return (
      <div>
        <div className="flex justify-center" style={{ backgroundColor: back1 }}>
          <Image
            src={SouthSolutions4}
            alt="SouthSolutions"
            width={150}
            height={150}
          />
          <h1 className="text-center text-7xl p-6 justify-center items-center m-9">
            SouthSolutions
            <h2 className="font-mono text-center text-4xl mt-5">
              tu propia app, tu propia web
            </h2>
          </h1>
        </div>
        <hr />
      </div>
    );
  };

  const prueba2 = () => {
    return (
      <div>
        <div className="flex p-9" style={{ backgroundColor: back2 }}>
          <Image
            className="mr-5 -ml-6"
            src={SouthSolutions5}
            alt="SouthSolutionsLogo"
            width={250}
            height={50}
          />
          <Image
            className="ml-3"
            src={SouthSolutionstext}
            alt="SouthSolutionsName"
            height={1}
            width={700}
          />
        </div>
        <hr />
      </div>
    );
  };

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
          <Projects />
        </section>
      </main>
    );
  });
  return (
    <main>
      <nav>
        <Nav />
      </nav>
      <hr />
      <Animation/>
      <hr />

      <section>
        <h3 className="text-center mt-10 text-3xl underline">
          ¿Quienes somos?
        </h3>

        <article className="text-center p-5">
          Somos un grupo de desarrolladores web y mobile enfocados en agregar
          valor a cada producto, con responsabilidad y dedicación para
          satisfacer las necesidades de nuestros clientes. creamos productos de
          calidad enfocado a los mercados digitales de toda Latinoamérica
        </article>
      </section>

      <section className="mx-20 mt-20">
        <h3 className="text-center  text-3xl underline ">
          ¿Por qué tener tu propia app?
        </h3>
        <div className="flex justify-between p-4 items-center">
          <article className="text-center p-6 ">
            En un mundo cada vez más digital, tener una aplicación móvil para tu
            negocio es esencial. Una aplicación móvil te permite llegar a los
            usuarios dondequiera que estén, conectando con tu público de manera
            directa, a un simple <dfn>tap</dfn> de distancia. Imagina que tu
            negocio esté en el bolsillo de tus clientes, disponible 24/7,
            ofreciendo una experiencia personalizada y optimizada para sus
            necesidades. Con nuestras aplicaciones, puedes expandir tu negocio,
            aumentar tu alcance y ofrecer un servicio excepcional, todo al
            alcance de la mano de tus clientes.
          </article>

          <Image
            src={movil}
            alt="movil"
            width={250}
            height={100}
            style={{ borderRadius: 99999 }}
          />
        </div>
      </section>

      <section className="mx-20">
        <h3 className="text-center mt-10 text-3xl underline">
          ¿Por qué tener tu propia web?
        </h3>
        <div className="flex justify-between p-4 mx-5 items-center w-4/5">
          <Image
            src={pc}
            alt="web"
            width={200}
            height={100}
            style={{ borderRadius: 99999 }}
          />
          <article className="text-center p-6">
            En la era digital, tener una página web es como tener una tarjeta de
            presentación para el mundo. Una página web bien diseñada puede ser
            la diferencia entre un cliente potencial y un cliente perdido. Tu
            página web es el primer punto de contacto para muchos de tus
            clientes, y queremos asegurarnos de que esa primera impresión sea la
            mejor. Con nuestras soluciones de desarrollo web, puedes tener una
            página web atractiva, fácil de usar y optimizada para motores de
            búsqueda. Así, tus clientes pueden encontrarte fácilmente, aprender
            más sobre tus servicios y contactarte con solo unos pocos clics.
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
