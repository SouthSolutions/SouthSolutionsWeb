"use client";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Contact = () => {
  const [selected, setSelected] = useState("");

  const handleOnClick = (platform: string) => {
    setSelected(platform);
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="flex justify-between ">
        <section className="flex">
          <aside className="p-2 my-5 bg-[linear-gradient(-120deg,white,_#edf5f7_,_#edf5f7_,_#2babae_,_#0f1026_)] h-[30em]">
            <div className="p-5">
              <ul>
                <li onClick={() => handleOnClick("app")} className="px-4 py-8">
                  {" "}
                  <button>Quiero mi App</button>
                </li>
                <li onClick={() => handleOnClick("web")} className="px-4 py-8">
                  {" "}
                  <button>Quiero mi Web</button>
                </li>
                <li className="px-4 py-8">
                  <a href="href=mailto:southsolutions.tech@gmail.com">
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
                <div className="bg-[#0f1026] text-white p-2">
                  <h3 className="text-center">Elije tu app</h3>
                  <div>
                    <ul>
                      <li>
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de app]
                        .................................................................................................
                        precio
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "web" && (
                <div className="bg-[#0f1026] text-white p-2">
                  <h3 className="text-center">Elije tu app</h3>
                  <div>
                    <ul>
                      <li>
                        [tipo de web]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de web]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de web]
                        .................................................................................................
                        precio
                      </li>
                      <li>
                        [tipo de web]
                        .................................................................................................
                        precio
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {selected === "" && (
                <div className="bg-[#0f1026] text-white p-2">
                  <h3 className="text-center">Elije tu servicio</h3>
                  <p>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
