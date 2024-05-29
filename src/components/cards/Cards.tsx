import React, { Key } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

//cards
import Fitness from "@/assets/img/cards/fitness.jpg";
import Swimming from "@/assets/img/cards/swimming.jpg";
import BabiesSwim from "@/assets/img/cards/babies.jpg";
import Wellness from "@/assets/img/cards/wellness.jpg";

export type Card = {
  id: Key;
  title: string;
  image: StaticImageData;
  link: string;
};

const LinkCard: Card[] = [
  {
    id: 1,
    title: "Fitness",
    image: Fitness,
    link: "/",
  },
  {
    id: 2,
    title: "Plivanje",
    image: Swimming,

    link: "/",
  },
  {
    id: 3,
    title: "Plivanje za bebe",
    image: BabiesSwim,

    link: "/",
  },
  {
    id: 4,
    title: "Wellness",
    image: Wellness,

    link: "/",
  },
];

const Cards = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center h-full justify-center">
        {LinkCard.map((item) => (
          <div
            key={item.id}
            className="w-full h-full text-4xl font-extralight md:font-light md:text-2xl md:hover:text-3xl xl:text-3xl xl:hover:text-4xl hover:scale-105 duration-300 ease-in-out relative"
          >
            <Link href={"/"}>
              <p className="p-10 flex items-end justify-center h-full w-full text-white z-10 absolute">
                {item.title}
              </p>
              <div>
                <Image src={item.image} alt={item.title} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
