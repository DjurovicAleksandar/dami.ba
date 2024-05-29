import Image from "next/image";

import Link from "next/link";

import prijava from "@/assets/img/about/prijava.webp";

export default function AboutCTA() {
  return (
    <div className="w-full bg-lightBlue flex flex-col items-center  px-56 py-28 text-black relative">
      <h2 className="text-6xl text-left w-full mb-10">
        Pridruzite nam se u fitness avanturi!
      </h2>
      <Link
        href="/kontakt"
        className="duration-300 ease-linear bg-darkBlue rounded-xl md:hover:bg-transparent md:hover:text-darkBlue border-2 md:transition border-darkBlue mr-5 md:mr-10 py-2 md:py-3 px-6 md:px-12 text-white"
      >
        Prijava
      </Link>
      <div className="absolute left-0 bottom-0">
        <Image src={prijava} alt="Dami.ba" className="w-full h-full" />
      </div>
    </div>
  );
}
