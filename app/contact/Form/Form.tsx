"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    nameLastname: "",
    email: "",
    subjet: "",
    bodyMail: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="flex m-3">
      <form className="" action="">
        <section className="flex flex-col flex-column">
          <label htmlFor="nameLastname" className="p-3">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="nameLastname"
            name="nameLastname"
            className="p-1 border-warm-gray-500 border-[1.5px]"
            value={formState.nameLastname}
            onChange={handleChange}
          />
          <label htmlFor="email" className="p-3">
            Correo Electrónico
          </label>
          <input
            className="P-1 border-warm-gray-500 border-[1.5px]"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="subjet" className="p-3">
            Asunto
          </label>
          <input
            className="P-1 border-warm-gray-500 border-[1.5px]"
            type="text"
            name="subjet"
            id="subjet"
            value={formState.subjet}
            onChange={handleChange}
          />

          <label
            htmlFor="bodyMail"
            placeholder="Tu Mensaje aquí"
            className="p-3">
            Tu mensaje
          </label>
          <input
            className="P-1 border-warm-gray-500 border-[1.5px] h-[10rem] w-[20rem]"
            type="textarea"
            name="bodyMail"
            value={formState.bodyMail}
            id="bodyMail"
            onChange={handleChange}
          />
        </section>
      </form>
    </div>
  );
};

export default ContactForm;
