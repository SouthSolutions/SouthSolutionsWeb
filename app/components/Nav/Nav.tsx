import Image from "next/image";
import Link from "next/link";
import SouthSolutions5 from "../../../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../../../public/SouthSolutionstext.jpg";

const Nav = () => {
  return (
    <section className="flex justify-between" style={{ backgroundColor: "#edf5f7" }}>
    <div className="flex p-5">
      <Image
        className="mr-5 -ml-6"
        src={SouthSolutions5}
        alt="SouthSolutionsLogo"
        width={100}
        height={60}
      />
      <Image
        className="ml-5"
        src={SouthSolutionstext}
        alt="SouthSolutionsName"
        height={1}
        width={300}
      />
    </div>
  
    <div className="flex flex-row items-start" style={{ marginTop: "10px" }}>
      <Link className="text-center mx-5 text-1xl" href="/projects">
        Nuestros Proyectos
      </Link>
      <Link className="text-center mx-5 text-1xl" href="/contact">
        Contactanos
      </Link>
    </div>
  </section>

  
  );
};

export default Nav;
