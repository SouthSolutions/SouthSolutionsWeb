"use client";

import Image from "next/image";
import Link from "next/link";
import SouthSolutions5 from "../../../public/SouthSolutions5.jpg";
import SouthSolutionstext from "../../../public/SouthSolutionstext.jpg";
import HamburgerMenu from "../Menu/Menu";
import { useState } from "react";
//bg-[#2babae]

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const hanleToggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <section
      className="flex justify-between p-6"
      style={{ backgroundColor: "#edf5f7" }}>
      <div className="justify-between flex bg-[#edf5f7]">
        <Link href="/">
          <Image
            className="m-[.5] rounded-[50%] bg-[#edf5f7]  "
            src={SouthSolutions5}
            alt="SouthSolutionsLogo"
            width={100}
            height={70}
          />
        </Link>
        <Link href="/">
          <Image
            className="mx-2 rounded-[1em] p-2 w-full bg-[#edf5f7]  "
            src={SouthSolutionstext}
            alt="SouthSolutionsName"
            height={100}
            width={200}
          />
        </Link>
      </div>
      <div className="relative ml-3 pl-2 md:p-3 lg:p-4 cursor-pointer">
        <HamburgerMenu onClick={hanleToggle} />
        {isOpen && (
          <div className="flex flex-col absolute top-14 right-0 w-48 transition duration-300 ease-in-out p-2 rounded-b-[2rem] backdrop-blur-md bg-[linear-gradient(_#edf5f7_,_#2babae_)] ">
            <Link
              className="text-center text-[.7rem] md:text-[.8rem] lg:text-[1rem] p-1 m-2 hover:bg-[#edf5f7] hover:border rounded-[3em] hover:transition-all duration-300 ease-in-out"
              href="/">
              Inicio
            </Link>
            <Link
              className="text-center text-[.7rem] md:text-[.8rem] lg:text-[1rem] p-1 m-2 hover:bg-[#edf5f7] hover:border rounded-[3em] hover:transition-all duration-300 ease-in-out"
              href="/projects">
              Nuestros Proyectos
            </Link>

            <Link
              className="text-center text-[.7rem] md:text-[.8rem] lg:text-[1rem] p-1 m-2 hover:bg-[#edf5f7] hover:transition-all duration-300 ease-in-out hover:border rounded-[3em]"
              href="/services">
              Servicios
            </Link>

            <Link
              className="text-center text-[.7rem] md:text-[.8rem] lg:text-[1rem] p-1 m-2 hover:bg-[#edf5f7] hover:transition-all duration-300 ease-in-out hover:border rounded-[3em]"
              href="/contact">
              Contacto
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nav;
