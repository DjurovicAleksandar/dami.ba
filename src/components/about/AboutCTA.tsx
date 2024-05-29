import Image from "next/image";

import Link from "next/link";

import prijava from "@/assets/img/about/prijava.webp";

export default function AboutCTA() {
  return (
    <div className="w-full bg-lightBlue flex flex-col items-center  px-56 py-28 text-black relative">
      <h2 className="text-6xl font-bold mb-10 text-center">
        Pridruzite nam se u fitness avanturi!
      </h2>
      <Link
        href="/kontakt"
        className="bg-darkBlue font-semibold rounded-md text-white py-6 px-8 text-3xl hover:bg-transparent hover:text-darkBlue duration-300 ease-linear"
      >
        Prijava
      </Link>
      <div className="absolute left-0 bottom-0">
        <Image src={prijava} alt="Dami.ba" className="w-full h-full" />
      </div>
    </div>
  );
}
