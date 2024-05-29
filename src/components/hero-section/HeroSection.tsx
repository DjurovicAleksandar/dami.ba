import Image from "next/image";
import Link from "next/link";
import React from "react";
import family from "@/assets/img/hero/familyy.png";

const HeroSection = () => {
  return (
    <main className="overflow-hidden">
      <header className="w-full h-screen md:h-[800px] xl:h-screen bg-lightBlue relative px-6 md:px-28 py-28 flex items-center justify-start">
        <div className="flex flex-col gap-8 z-10 w-full md:w-1/2 mt-20">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold text-[#0b0b0b]">
            Zdravlje je{" "}
            <span className="bg-gradient-to-bl from-darkBlue to-darkerBlue bg-clip-text text-transparent">
              porodična
            </span>{" "}
            avantura
          </h1>
          <p className="w-full xl:w-2/3">
            Učimo kako da ojačamo svoje tijelo i u dok istovremeno stvaramo
            uspomene koje će trajati cijeli život. Naša zajednica pruža podršku,
            motivaciju i mnoštvo ideja kako da svakodnevno budete aktivni i
            zdravi.
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
        <div className="hidden md:flex absolute bottom-0 right-0 z-0">
          <Image
            className="w-full h-full xl:w-[70rem]"
            src={family}
            alt="Dami.ba"
          />
        </div>
      </header>
    </main>
  );
};

export default HeroSection;
