"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import logo from "@/assets/img/logo.png";

import terminalRivier from "@/assets/img/sponsors/1.png";
import dawaHome from "@/assets/img/sponsors/2.png";
import elitNut from "@/assets/img/sponsors/3.png";
import kinderland from "@/assets/img/sponsors/5.png";
import teaHouse from "@/assets/img/sponsors/4.jpg";

const sponsors = [
  { src: terminalRivier, href: "https://terme-ilidza.ba/" },
  { src: dawaHome, href: "https://dawahome.ba/" },
  { src: elitNut, href: "https://elitnutrition.ba/" },
  { src: kinderland, href: "https://kinderland.ba/" },
  { src: teaHouse, href: "https://www.kucacaja.ba/" },
];

export default function AboutSponsors() {
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <>
      <div
        ref={thirdSectionRef}
        className="w-full  flex flex-col gap-[3vw] relative z-1 overflow-hidden bg-lightBlue"
      >
        <motion.div
          className="flex relative justify-center gap-[10vw] w-[100vw] -left-[10vw] py-20 "
          style={{ x: x1 }}
        >
          {sponsors.map(({ src, href }, index) => {
            return (
              <Link
                href={href}
                target="_blank"
                key={index}
                className="w-[10rem] h-[10rem] flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt="Dami.ba"
                    className="object-cover grayscale hover:grayscale-0 duration-300 ease-in rounded-md"
                  />
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
