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

  return (
    <main>
      <section
        className="flex p-1 group transition-all ease-in-out duration-[1.3s] text-[.8rem] md:text-[.9rem] lg:text-[1rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={url} className="group-hover:p-[2rem] transition-all duration-[1s] ease-in-out">
          <article className="border rounded-[3em] text-center ease-in-out mx-auto w-[10rem] transition-all duration-[1s] md:w-[12rem] lg:w-[15rem]">
            <figure title={description} className="mx-auto">
              <figcaption className=" text-[.8rem] p-3 md:text-[.9rem] lg:text-lg">{name}</figcaption>
              <Image
                className="rounded-[3em] mx-auto p-1 group-hover:p-[1.5em] transition-all duration-[1s] ease-in-out md:p-3 lg:p-1"
                src={image}
                alt={name}
                height={160}
                width={160}
              />
            </figure>
            <ul>
              <li className="group-hover:p-[.5em] text-[.7em] transition-all duration-[1s] ease-in-out">
                {isHovered && <p>{description}</p>}
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
