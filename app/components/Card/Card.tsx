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
    <>
      <section className="flex p-1">
        <Link href={url} className="">
          <article className="border rounded-[2em] text-center w-[10rem] md:w-[12rem] lg:w-[20rem]">
            <h3 className="borded rounded-[2rem]">{name}</h3>
            <hr />
            <figure title={description} className="mx-auto">
              <Image
                className="rounded-[2em] mx-auto p-1 "
                src={image}
                alt={name}
                height={200}
                width={200}
              />
              <figcaption className=" text-[.8rem] p-1 md:text-[.9rem] lg:text-lg">
                {description}
              </figcaption>
            </figure>

            {/* <li className="group-hover:p-[.5em] text-[.7em] transition-all duration-[1s] ease-in-out">
                {isHovered && <p>{description}</p>}
              </li> */}
            <div>{platform}</div>
          </article>
        </Link>
      </section>
    </>
  );
};

export default Card;
