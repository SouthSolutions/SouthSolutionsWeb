"use client";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [selected, setSelected] = useState("");

  const handleOnClick = (platform: string) => {
    setSelected(platform);
  };

  // -------------------------------- price's page ------------------------- //

  const landingUsd = 200;

  const smallUsd = 400;

  const SeCommerce = 800;

  const FeCommerce = 2000;

  // ------------------------------- change types -------------------------- //

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="m-5"></div>
      <main className="flex justify-between ">
        <section className="flex">
          <aside className=" p-1 bg-[linear-gradient(-120deg,white,_#edf5f7_,_#edf5f7_,_#2babae_,_#0f1026_)] h-auto  grid items-center">
            <div className="p-2 grid items-auto justify-center lg:p-4">
              <ul>
                <li
                  onClick={() => handleOnClick("app")}
                  className="px-.5 py-3 my-5 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200 text-center">
                  <button className="text-[.7rem] md:text-md lg:text-lg">
                    Quiero mi App
                  </button>
                </li>
                <li
                  onClick={() => handleOnClick("web")}
                  className="px-.5 py-3 my-5 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200 text-center">
                  <button className="text-[.7rem] md:text-md lg:text-lg">
                    Quiero mi Web
                  </button>
                </li>
                <li className="px-.5 py-3 my-5 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200 text-center">
                  <a
                    className="text-[.6rem] md:text-md lg:text-lg lg:p-2 "
                    href="mailto:southsolutions.tech@gmail.com">
                    Quiero hacer una consulta
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </section>
        <section className="flex p-2 mx-auto ">
          <div className="flex flex-col">
            <h3 className="text-center  underline text-sm md:text-xl lg:text-2xl p-3">
              Contactanos y elije tus servicios y productos
            </h3>
            <h4 className="text-center text-sm md:text-xl lg:text-2xl p-3">
              precios y servicios
            </h4>
            <div>
              {selected === "app" && (
                <div className="bg-[#0f1026] text-white p-3 sm: py-[6.4rem]">
                  <h3 className="text-center">Elije tu App</h3>
                  <div>
                    <ul>
                      <li className="py-3">
                        <div className="flex justify-between">
                          <div>
                            <span>Turnos</span>
                            <ul>
                              <li className="text-sm">Ejepmlo:</li>
                              <Link
                                className="text-sm"
                                href="https://play.google.com/store/apps/details?id=com.barber18273.barberApp">
                                BarberApp
                              </Link>
                            </ul>
                          </div>

                          <p className="text-[.5rem]">
                            .........................
                          </p>
                          <span className="text-[.8rem] md:text-md lgtext-lg">
                            $ 350 USD
                          </span>
                        </div>
                      </li>
                      <li className="py-3">
                        <div className="flex justify-between">
                          <span>custom</span>
                          <p className="text-[.5rem]">
                            .........................
                          </p>
                          <span className="text-[.8rem] md:text-md lgtext-lg">
                            Personalizado
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "web" && (
                <div className="bg-[#0f1026] text-white p-1 wrap">
                  <div>
                    <h3 className="text-center">Elije tu Web</h3>
                  </div>
                  <div>
                    <ul>
                      <li className=" p-1 md:p-3 lg:p-4 flex justify-between">
                        <div className="w-[5.5em] md:w-[8rem]">
                          <span className="text-[.7rem] md:tex-md lg:text-lg">
                            Landing Page
                          </span>
                          <ul>
                            <li className="text-[.6em] md:text-[.7rem] lg:text-[.8rem]">
                              Página Simple
                            </li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">
                              Hosting + NIC
                            </li>
                          </ul>
                        </div>
                        <p className="text-[.5rem]">
                          .................................
                        </p>

                        <div className="pl-[.1rem] w-[4.4rem] text-[.7rem] md:text-md md:w-[6rem] lg:text-lg lg:w-[8rem]">
                          <span>${landingUsd} USD</span>
                        </div>
                      </li>
                      <li className="p-1 md:p-3 lg:p-4 flex justify-between">
                        <div className="w-[5.5em] md:w-[8rem]">
                          <span className="text-[.7rem] md:tex-md lg:text-lg">Small Page</span>
                          <ul>
                            <li className="text-[.6em] md:text-[.7rem] lg:text-[.8rem]">2 - 5 rutas
                            </li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Hosting + NIC</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">server + base de datos</li>
                          </ul>
                        </div>
                        <p className="text-[.5rem]">
                          .................................
                        </p>

                        <div className="pl-[.1rem] w-[4.4rem] text-[.7rem] md:text-md md:w-[6rem] lg:text-lg lg:w-[8rem]">
                          <span>${smallUsd} USD</span>
                          <ul className="text-[.67em]"></ul>
                        </div>
                      </li>
                      <li className="p-1 md:p-3 lg:p-4 flex justify-between">
                        <div className="w-[5.5em] md:w-[8rem]">
                          <span className="text-[.7rem] md:tex-md lg:text-lg">Sm E-Commerce</span>
                          <ul> 
                            <li className="text-[.6em] md:text-[.7rem] lg:text-[.8rem]">SPA</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Hosting + NIC</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Pasarela de Pagos</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Server + Base de Datos</li>
                          </ul>
                        </div>
                        <p className="text-[.5rem]">
                          .................................
                        </p>
                        <div className="pl-[.1rem] w-[4.4rem] text-[.7rem] md:text-md md:w-[6rem] lg:text-lg lg:w-[8rem]">
                          <span>${SeCommerce} USD</span>
                        </div>
                      </li>
                      <li className="p-1 md:p-3 lg:p-4 flex justify-between">
                        <div className="w-[5.5em] md:w-[8rem]">
                          <span className="text-[.7rem] md:tex-md lg:text-lg">Lg E-Commerce</span>
                          <ul>
                            <li className="text-[.6em] md:text-[.7rem] lg:text-[.8rem]">Full</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Hosting + NIC</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Server + Base de Datos</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Pasarela de Pagos</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Notificaciones</li>
                            <li className="text-[.5em] md:text-[.6rem] lg:text-[.7rem]">Dashboard Admin</li>
                          </ul>
                        </div>
                        <p className="text-[.5rem]">
                          .................................
                        </p>
                        <div className="pl-[.1rem] w-[4.4rem] text-[.7rem] md:text-md md:w-[6rem] lg:text-lg lg:w-[8rem]">
                          <span>${FeCommerce} USD</span>
                        </div>
                      </li>

                      <li className="p-1 md:p-3 lg:p-4 flex justify-between">
                        <div className="w-[5.5em] md:w-[8rem]">
                          <span className="text-[.7rem] md:tex-md lg:text-lg">Custom</span>
                        </div>
                        <p className="text-[.5rem]">
                          .................................
                        </p>
                        <div className="pl-[.1rem] w-[4.4rem] text-[.7rem] md:text-md md:w-[6rem] lg:text-lg lg:w-[8rem]">
                          <span>Personalizado</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "" && (
                <div className="bg-[#0f1026] text-white text-center">
                  <h3>Elije tu servicio</h3>
                  <p className="sm: py-[10rem] md:py-30 lg:py-10">
                    {"<----------------------------------"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <div className="sm: m-[2rem] md:m-[6rem] lg:m-8"></div>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
