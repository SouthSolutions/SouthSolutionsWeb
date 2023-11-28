import Image from "next/image";
import Link from "next/link";
import SouthSolutions5 from "../../../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../../../public/SouthSolutionstext.jpg";

const Nav = () => {
  return (
    <section className="flex justify-between" style={{ backgroundColor: "#edf5f7" }}>
    <div className="flex p-4">
      <Image
        className="mr-4 ml-8 rounded-[50%]"
        src={SouthSolutions5}
        alt="SouthSolutionsLogo"
        width={150}
        height={30}
      />
      <Link href="/"> 
      <Image
        className="ml-5 rounded-[3em] p-5"
        src={SouthSolutionstext}
        alt="SouthSolutionsName"
        height={200}
        width={400}
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
