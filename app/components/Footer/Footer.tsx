import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1b2040" }}
      className="flex justify-between p-3">
      <ul className="text-white flex-start">
        <li className="p-2 ">
          <Link href="/"><h4>SouthSolutions</h4></Link>
        </li>
        <li className="text-sm p-2 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
          <Link href="/contact">Contacto</Link>
        </li>
        <li className="text-sm p-2 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
          <a href="#">Blog</a>
        </li>
        <li className="text-sm p-2 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
          <a href="#">Trabaja con nosotros</a>
        </li>
        <li className="text-sm p-2 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
          <Link href="/"> Inicio </Link>
        </li>
      </ul>
      <ul className="text-white flex-end">
        <li className="p-3">
          <figure>
            <Link
              href="https://www.instagram.com/southsolutions.tech/"
              className="flex justify-center p-1">
              <Image
                src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-icon-4.png"
                width={35}
                height={35}
                alt="Instagram"
                className="flex items-center"
              />
            </Link>
            <figcaption className="text-center">Instagram</figcaption>
          </figure>
        </li>
        <li className="p-3">
          <figure>
            <a
              className="flex justify-center p-1"
              href="mailto:southsolutions.tech@gmail.com">
              <Image
                src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-icon-1.png"
                alt="email"
                width={25}
                height={25}
              />
            </a>
            <figcaption className="text-center">E-mail</figcaption>
          </figure>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
