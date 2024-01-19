"use client";

import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Animation() {
  useEffect(() => {
    if (window) {
      const options = {
        strings: ["Tu Propia App", "Tu Propia Web"],
        typeSpeed: 200,
        backDelay: 500,
        backSpeed: 200,
        loop: true,
      };

      const typed = new Typed("#typed", options);
    }
  }, []);

  return (
    <section>
      <div
        className="py-[6.5rem] md:py-30 lg:p-40 flex-col justify-center flex-column m-3 bg-[linear-gradient(40deg,_#2babae_,_#edf5f7_,_#0f1026_,_#1b2040_,_#0f1026_,_#edf5f7_,_#2babae_)]"
        style={{ backgroundColor: "#edf5f7" }}>
        <h1 className="text-3xl md:text-4xl lg:text-4xl text-white text-center" >
          SouthSolutions Tech
          <hr />
        </h1>
        <br />
        <h2
          style={{ fontFamily: "monospace" }}
          className="text-2xl md:text-3xl lg:text-3xl text-white text-center transition-all duration-[1s]"
          id="typed"></h2>
      </div>
    </section>
  );
}
