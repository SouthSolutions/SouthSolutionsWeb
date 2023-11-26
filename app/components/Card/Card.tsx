'use client'

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
                <div>
                    <p>{description}</p>
                </div>
            )
        }
    }

  
  return (
    <main className="flex-between">
      <section className="flex flex-column w-[20em]">
        <article 
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
          className="border rounded-[3em] text-center flex-between group">
          <figure title={description} className="mx-auto self-center">
            <figcaption>{name}</figcaption>
            <Image
              className="rounded-[3em] mx-auto p-8 group-hover:p-[2.5em] transition-[1s]"
              src={image}
              alt={name}
              height={300}
              width={300}
            />
          </figure>
          <ul>
            <li className="group-hover:p-[2.5em] transition-[2s] ease-in-out text-[.7em]  ">
              {handleHover()}
            </li>
            <li>{platform}</li>
          </ul>
          <a href={url}>visita haciendo click</a>
        </article>
      </section>
    </main>
  );
};

export default Card;
