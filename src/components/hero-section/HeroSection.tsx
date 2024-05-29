import Image from "next/image";
import Link from "next/link";
import React from "react";
import family from "@/assets/img/hero/familyy.png";
import herosction from "@/assets/img/hero/herosction.webp";
import header from "@/assets/img/hero/header.webp";

const HeroSection = () => {
  return (
    <main className="h-screen">
      <header className="w-full bg-white relative px-6 md:px-56 py-28 pt-56 flex items-center justify-start">
        <div className="flex flex-col gap-8 z-10 w-full">
          <h1 className="text-4xl lg:text-8xl mb-5  text-white p-4 lg:w-4/5 relative">
            Izgradimo zdrave navike zajedno
            <span className="block absolute inset-0 text-black p-4">
              {" "}
              Izgradimo <br />
              navike zaje
            </span>
          </h1>
          <p className="lg:text-3xl lg:w-1/2 font-thin">
            Učimo kako da ojačamo svoje tijelo i u dok istovremeno stvaramo
            uspomene koje će trajati cijeli život.
          </p>

          <div className="flex items-center">
            <Link
              className="bg-darkBlue rounded-xl md:hover:bg-transparent md:hover:text-darkBlue border-2 md:transition border-darkBlue mr-5 md:mr-10 py-2 md:py-3 px-6 md:px-12 text-white"
              href={"/"}
            >
              Pročitaj više
            </Link>
            <Link
              className="bg-transparent hover:bg-darkBlue hover:text-white transition border-2 border-darkBlue rounded-xl py-2 md:py-3 px-12 text-darkBlue"
              href={"/"}
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className=" md:flex absolute bottom-[7.5%] right-0 z-0 w-full h-full ">
          <Image
            className="w-full h-full object-cover"
            src={header}
            alt="Dami.ba"
          />
        </div>
      </header>
    </main>
  );
};

export default HeroSection;
