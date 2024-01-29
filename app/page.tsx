import Image from "next/image";
import Link from "next/link";
import movil from "../public/movil.jpeg";
import pc from "../public/pc.jpeg";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";

export default function Home() {
  const back1 = "#d4f2fc";
  const back2 = "#edf5f7";

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <hr />
      <main>
        <hr />
        <Animation />
        <hr />

        <section>
          <h2 className="text-center mt-20 text-2xl underline md:text-3xl lg:text-3xl">
            ¿Quienes somos?
          </h2>

          <article className="text-center p-1 pt-3 md:p-2 lg:p-5">
            Somos un grupo de desarrolladores web y mobile enfocados en agregar
            valor a cada producto, con responsabilidad y dedicación para
            satisfacer las necesidades de nuestros clientes. creamos productos
            de calidad enfocado a los mercados digitales de toda Latinoamérica
          </article>
        </section>

        <section className=" mx-0 mt-20 md:mx-15 md:mt-15 lg:mx-20 lg:mt-20">
          <h2 className="text-center  text-2xl underline md:text-3xl lg:text-3xl">
            ¿Por qué tener tu propia app?
          </h2>
          <div className="flex justify-between p-1 pt-3 items-center flex-col md:flex-row">
            <article className="text-center p-1 md:p-3 lg:p-5 ">
              En un mundo cada vez más digital, tener una aplicación móvil para
              tu negocio es esencial. Una aplicación móvil te permite llegar a
              los usuarios dondequiera que estén, conectando con tu público de
              manera directa, a un simple <dfn>tap</dfn> de distancia. Imagina
              que tu negocio esté en el bolsillo de tus clientes, disponible
              24/7, ofreciendo una experiencia personalizada y optimizada para
              sus necesidades. Con nuestras aplicaciones, puedes expandir tu
              negocio, aumentar tu alcance y ofrecer un servicio excepcional,
              todo al alcance de la mano de tus clientes.
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

        <section className="mx-[0px] md:mx-15 lg:mx-20 my-20">
          <h2 className="text-center mt-10 text-2xl underline md:text-2xl lg:text-3xl">
            ¿Por qué tener tu propia web?
          </h2>
          <div className="flex justify-between p-1 pt-4 items-center flex-col md:flex-row">
            <Image
              src={pc}
              alt="web"
              width={250}
              height={100}
              style={{ borderRadius: 99999 }}
            />
            <article className="text-center p-1 md.p-3 lg:p-5">
              En la era digital, tener una página web es como tener una tarjeta
              de presentación para el mundo. Una página web bien diseñada puede
              ser la diferencia entre un cliente potencial y un cliente perdido.
              Tu página web es el primer punto de contacto para muchos de tus
              clientes, y queremos asegurarnos de que esa primera impresión sea
              la mejor. Con nuestras soluciones de desarrollo web, puedes tener
              una página web atractiva, fácil de usar y optimizada para motores
              de búsqueda. Así, tus clientes pueden encontrarte fácilmente,
              aprender más sobre tus servicios y contactarte con solo unos pocos
              clics.
            </article>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
