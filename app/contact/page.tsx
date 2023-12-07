import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  const wppImage =
    "https://imgs.search.brave.com/vS-RdpcMQRcQmJCv4fGc0Trzu7rcgCdsm8O8cB-GyBk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA0L1doYXRzYXBw/LWxvZ28tdmV0b3Iu/cG5n";

  const mailImage =
    "https://imgs.search.brave.com/mhN-S07jvkEOKmZZMOrLM8XKISmHuuH1nz3GoT8pSiM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzAzL2dtYWlsLWxv/Z28tMTYucG5n";

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <nav>
          <Nav />
        </nav>
        <h1 className="text-center text-3xl p-6">Contactanos!</h1>
        <div className="flex justify-between items-center w-[40rem] m-auto p-5">
          <Link href="https://wa.me/+5688575861?text=Hola!,%20vi%20su%20web,%20SouthSolutions%20y%20tengo%20una%20consulta">
            <figure>
              <Image
                src={wppImage}
                width={150}
                height={150}
                alt="Whatsapp Franco"
              />

              <figcaption className="text-center">Franco</figcaption>
            </figure>
          </Link>
          <Link href="https://wa.me/+541135655412?text=Hola!,%20vi%20su%20web,%20SouthSolutions%20y%20tengo%20una%20consulta">
            <figure>
              <Image
                src={wppImage}
                width={150}
                height={150}
                alt="Whatsapp Alexis"
              />
              <figcaption className="text-center">Alexis</figcaption>
            </figure>
          </Link>
          <Link href="https://wa.me/+573156226982?text=Hola!,%20vi%20su%20web,%20SouthSolutions%20y%20tengo%20una%20consulta">
            <figure>
              <Image
                src={wppImage}
                alt="Whatsapp Wilson"
                width={150}
                height={150}
              />
              <figcaption className="text-center">Wilson</figcaption>
            </figure>
          </Link>
          <Link href="mailto:southsolutions@gmail.com?subject=Consulta-contacto&body=Hola">
            <figure>
              <Image src={mailImage} alt="E-mail" width={150} height={150} className="p-4" />

              <figcaption className="text-center">SouthSolutions.tech</figcaption>
            </figure>
          </Link>
        </div>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
