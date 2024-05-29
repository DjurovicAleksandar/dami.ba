import Image from "next/image";
import React from "react";
import Damira from "@/assets/img/damira.png";
import Link from "next/link";

const Biography = () => {
  return (
    <section className="w-full py-28 ">
      <div className="flex w-full h-full">
        <div className="w-full flex items-end">
          <Image className="w-full h-fit" src={Damira} alt="Damira" />
        </div>
        <div className="flex flex-col items-end  pl-0 md:pr-56 gap-10">
          <h3 className="text-3xl md:text-5xl xl:text-6xl font-light text-right">
            Želite li da popravite
            <br />{" "}
            <span className="bg-darkBlue text-white font-bold p-3 rounded-md leading-relaxed">
              vaše zdravlje?
            </span>
          </h3>
          <p className="font-light text-lg w-full md:w-4/5  text-right">
            A type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desk
          </p>
          <Link
            className="bg-darkBlue border-darkBlue border-2 hover:bg-transparent transition text-white hover:text-darkBlue rounded-xl py-2 md:py-3 px-6 md:px-12"
            href={"/"}
          >
            Pročitaj više
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biography;
