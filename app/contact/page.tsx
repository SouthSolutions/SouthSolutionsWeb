"use client";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Contact = () => {
  const [selected, setSelected] = useState("");

  const handleOnClick = (platform: string) => {
    setSelected(platform);
  };

  // -------------------------------- price's page ------------------------- //

  const landingUsd = 200;

  const smallUsd = 500;

  const eCommerce = 1500;

  // ------------------------------- change types -------------------------- //
 

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="m-5"></div>
      <main className="flex justify-between ">
        <section className="flex">
          <aside className="p-2 bg-[linear-gradient(-120deg,white,_#edf5f7_,_#edf5f7_,_#2babae_,_#0f1026_)] h-auto flex">
            <div className="p-5">
              <ul>
                <li
                  onClick={() => handleOnClick("app")}
                  className="px-4 py-3 my-3 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
                  {" "}
                  <button>Quiero mi App</button>
                </li>
                <li
                  onClick={() => handleOnClick("web")}
                  className="px-4 py-3 my-3 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
                  {" "}
                  <button>Quiero mi Web</button>
                </li>
                <li className="px-4 py-3 my-3 rounded-[3em] hover:rounded-[3em] hover:bg-[#2babae] transition duration-200">
                  <a href="mailto:southsolutions.tech@gmail.com">
                    Quiero hacer una consulta
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </section>
        <section className="flex p-2 mx-auto ">
          <div className="flex flex-col">
            <h3 className="text-center text-2xl p-3 underline">
              Contactanos y elije tus servicios y productos
            </h3>
            <h4 className="text-center text-2xl p-3">precios y servicios</h4>
            <div>
              {selected === "app" && (
                <div className="bg-[#0f1026] text-white p-3 ">
                  <h3 className="text-center">Elije tu App</h3>
                  <div>
                    <ul>
                      <li className="py-3">
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                      <li className="py-3">
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                      <li className="py-3">
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "web" && (
                <div className="bg-[#0f1026] flex text-white p-3">
                  <h3 className="text-center">Elije tu Web</h3>
                  <div>
                    <ul>
                      <li className="p-sm flex justify-between">
                        <div className="w-[10em]">
                          <span>Landing Page</span>
                          <ul>
                            <li className="text-[.8em]">Página Simple</li>
                            <li className="text-[.67em]">Hosting + NIC</li>
                          </ul>
                        </div>
                        <p>..................................................................</p>

                        <div className="pl-[2em] w-[9em]">
                          <span>${landingUsd} USD</span>
                          <div>
                            <ul className="text-[.67em]">
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="p-3 flex justify-between">
                        <div className="w-[10em]">
                          <span>Small Page</span>
                          <ul>
                            <li className="text-[.8em]"> 2 - 5 rutas </li>
                            <li className="text-[.67em]"> Hosting + NIC </li>
                            <li className="text-[.67em]">server + base de datos</li>
                          </ul>
                        </div>
                        <p>..................................................................</p>

                        <div className="pl-[2em] w-[9em]">
                          <span>${smallUsd} USD</span>
                          <ul className="text-[.67em]">
                          </ul>
                        </div>
                      </li>
                      <li className="p-3 flex justify-between">
                        <div className="w-[10em]">
                          <span>E-Commerce</span>
                          <ul>
                            <li className="text-[.67em]">Hosting + NIC</li>
                            <li className="text-[.67em]">Server + Base de Datos</li>
                            <li className="text-[.67em]">Pasarela de Pagos</li>
                            <li className="text-[.67em]">Dashboard Administrador</li>
                          </ul>
                        </div>
                        <p>..................................................................</p>
                        <div className="pl-[2em] w-[9em]">
                          <span>${eCommerce} USD</span>
                          <ul className="text-[.67em]">
                          </ul>
                        </div>
                      </li>
                      <li className="p-3 flex justify-between">
                       <div className="w-[10em]">
                        <span>Custom</span>
                       </div>
                       <p>..................................................................</p>
                       <div className="pl-[2em] w-[9em]"> Personalizado</div>

                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "" && (
                <div className="bg-[#0f1026] text-white p-3">
                  <h3 className="text-center">Elije tu servicio</h3>
                  <p className="py-3">
                    {
                      "<------------------------------------------------------------------------------------"
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
        <div className="m-5"></div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
