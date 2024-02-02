"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    nameLastname: "",
    mail: "",
    subjet: "",
    bodyMail: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return;
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
          />
          <label htmlFor="email" className="p-3">
            Correo Electrónico
          </label>
          <input
            className="P-1 border-warm-gray-500 border-[1.5px]"
            type="mail"
            id="mail"
            name="name"
            value={formState.mail}
            onChange={handleChange}
          />
        </section>
      </form>
    </div>
  );
};

export default ContactForm;
