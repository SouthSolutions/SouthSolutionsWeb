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
        <div className="group transition-all duration-[1.3s] text-[.6rem] md:text-md lg:text-[1rem]">
          <p>{description}</p>
        </div>
      );
    }
  };

  return (
    <main>
      <section className="flex p-1">
        <Link
          href={url}
          className="  group group-hover:p-[2rem] transition-all duration-[1s] ease-in-out">
          <article className="border rounded-[3em] text-center  ease-in-out mx-auto w-[8rem] transition-all duration-[1s] md:w-[10rem] lg:w-[13rem]">
            <figure title={description} className="mx-auto">
              <figcaption className=" text-[.76rem] p-3 md:text-[.9rem] lg:text-lg">{name}</figcaption>
              <Image
                className="rounded-[3em] mx-auto p-1 group-hover:p-[1.5em] transition-all duration-[1s] ease-in-out md:p-3 lg:p-5"
                src={image}
                alt={name}
                height={160}
                width={160}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </figure>
            <ul>
              <li className="group-hover:p-[1em] text-[.7em] transition-all duration-[1s] ease-in-out ">
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
