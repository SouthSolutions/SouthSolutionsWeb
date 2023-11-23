import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1b2040" }}
      className="flex justify-between p-3">
      <ul className="text-white flex-start">
        <li>
          <h4>SouthSolutions</h4>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Trabaja con nosotros</a>
        </li>
      </ul>
      <ul className="text-white flex-end">
        <li>
          <figure>
            <Link
              href="https://www.instagram.com/southsolutions.tech/"
              className="flex justify-center">
              <Image
                src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-icon-4.png"
                width={25}
                height={25}
                alt="Instagram"
                className="flex items-center"
              />
            </Link>
            <figcaption className="text-center">Instagram</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <a
              className="flex justify-center"
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
