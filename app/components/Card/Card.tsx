"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FC } from "react";

interface CardProps {
  image: string;
  name: string;
  description: string;
  url: string;
  platform: string;
}

const Card: FC<CardProps> = ({ image, description, name, url, platform }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (isHovered) {
      return (
        <div className="group transition-all duration-[1s]">
          <p>{description}</p>
        </div>
      );
    }
  };

  return (
    <main>
      <section className="flex p-2">
        <Link
          href={url}
          className="  group group-hover:p-[2.5em] transition-all duration-[1s] ease-in-out">
          <article className="border rounded-[3em] text-center  ease-in-out mx-auto w-[15em] transition-all duration-[1s]">
            <figure title={description} className="mx-auto self-center">
              <figcaption>{name}</figcaption>
              <Image
                className="rounded-[3em] mx-auto p-4 group-hover:p-[2.5em] transition-all duration-[1s] ease-in-out"
                src={image}
                alt={name}
                height={300}
                width={300}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </figure>
            <ul>
              <li className="group-hover:p-[2.5em] text-[.7em] transition-all duration-[1s] ease-in-out ">
                {" "}
                {handleHover()}
              </li>
              <li>{platform}</li>
            </ul>
          </article>
        </Link>
      </section>
    </main>
  );
};

export default Card;
