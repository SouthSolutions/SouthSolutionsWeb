import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <main style={{ backgroundColor: "#1b2040" }}>
      <section className="flex justify-between">
        <div className="text-white flex-start p-3">
          <h4>SouthSolutions</h4>
          <p>contacto</p>
          <p>blog</p>
          <p>trabaja con nosotros</p>
        </div>
        <div className="text-white flex-end p-3">
          <Link href={"https://www.instagram.com/southsolutions.tech/"} >
            <div className="text-center justify-center items-center" >
            <Image
              src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-icon-4.png"
              width={30}
              height={30}
              alt="Instagram"
             
            />
            <p>instagram</p>
            
            </div>
            
          </Link>
          <a href="mailto:southsolutions.tech@gmail.com">
            <Image
              src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-icon-1.png"
              alt="email"
              width={30}
              height={30}
            />
            E-mail
          </a>
        </div>
      </section>
    </main>
  );
};

export default Footer;
