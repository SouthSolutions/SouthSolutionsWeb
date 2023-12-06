import Image from "next/image";
import Link from "next/link";
import SouthSolutions5 from "../../../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../../../public/SouthSolutionstext.jpg";

const Nav = () => {
  return (
    <section
      className="flex justify-between p-3"
      style={{ backgroundColor: "#edf5f7" }}>
      <div className="justify-between flex bg-[#edf5f7]">
        <Link href="/">
          <Image
            className="m-1 rounded-[50%] bg-[#edf5f7]  "
            src={SouthSolutions5}
            alt="SouthSolutionsLogo"
            width={45}
            height={10}
          />
        </Link>
        <Link href="/">
          <Image
            className="mx-2 rounded-[1em] p-2 w-full bg-[#edf5f7]  "
            src={SouthSolutionstext}
            alt="SouthSolutionsName"
            height={90}
            width={200}
          />
        </Link>
      </div>

      <div className="flex flex-row items-start" style={{ marginTop: "10px" }}>
        <Link
          className="text-center ml-[1rem] lg:mx-2 text-[.7rem] md:text-[.9rem] lg:text-[1.1rem] p-2  hover:bg-[#2babae] hover:border rounded-[3em] hover:transition-all duration-300 ease-in-out"
          href="/projects">
          Nuestros Proyectos
        </Link>
        <Link
          className="text-center mx-.6 lg:mx-2 text-[.7rem] md:text-[.9rem] lg:text-[1.1rem] p-2 hover:bg-[#2babae] hover:transition-all duration-300 ease-in-out hover:border rounded-[3em]"
          href="/contact">
          Contactanos
        </Link>
      </div>
    </section>
  );
};

export default Nav;
