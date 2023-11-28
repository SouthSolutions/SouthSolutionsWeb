import Image from "next/image";
import Link from "next/link";
import SouthSolutions5 from "../../../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../../../public/SouthSolutionstext.jpg";

const Nav = () => {
  return (
    <section className="flex justify-between" style={{ backgroundColor: "#edf5f7" }}>
    <div className="flex p-5">
      <Image
        className="mr-4 -ml-6 rounded-[3em]"
        src={SouthSolutions5}
        alt="SouthSolutionsLogo"
        width={90}
        height={50}
      />
      <Link href="/"> 
      <Image
        className="ml-5 rounded-[3em]"
        src={SouthSolutionstext}
        alt="SouthSolutionsName"
        height={100}
        width={300}
      />
      </Link>
     
    </div>
  
    <div className="flex flex-row items-start" style={{ marginTop: "10px" }}> 
      <Link className="text-center mx-5 text-1xl p-2  hover:bg-[#2babae] hover:border rounded-[3em] hover:transition-all duration-300 ease-in-out" href="/projects">
        Nuestros Proyectos
      </Link>
      <Link className="text-center mx-5 text-1xl p-2 hover:bg-[#2babae] hover:transition-all duration-300 ease-in-out hover:border rounded-[3em]" href="/contact">
        Contactanos
      </Link>
    </div>
  </section>

  
  );
};

export default Nav;
