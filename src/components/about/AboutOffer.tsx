import Image from "next/image";

import image1 from "@/assets/img/about/1.png";
import image2 from "@/assets/img/about/2.png";
import image3 from "@/assets/img/about/3.png";
import image4 from "@/assets/img/about/4.png";

export default function AboutOffer() {
  return (
    <div className="w-full bg-gradient-to-r from-stone-800 from-5% via-black via-55% to-stone-800 h-screen px-56 py-28 text-white">
      <h2 className="text-6xl  mb-10 text-left w-full">
        Naša ponuda uključuje
      </h2>
      <div className="flex items-center gap-10 mt-28">
        <div className="h-[20rem] w-full">
          <div className="w-10 h-auto">
            <Image src={image3} alt="Dami.ba" className="w-full h-full" />
          </div>
          <h3 className="uppercase my-5 text-2xl font-semibold">TRENER</h3>
          <p>
            Naši treneri su vježbačima dostupni 24 sata dnevno, kao i konsultant
            doktor, za sva pitanja, nejasnoće i dogovaranja.
          </p>
        </div>{" "}
        <div className="h-[20rem] w-full">
          <div className="w-10 h-auto">
            <Image src={image4} alt="Dami.ba" className="w-full h-full" />
          </div>
          <h3 className="uppercase my-5 text-2xl font-semibold">
            PLAN PREHRANE
          </h3>
          <p>
            Savjetovanje i plan prehrane, koji je u skladu sa ciljem treninga,
            savjetovanje o dodacima prehrani u vidu suplementacije korištenje
            superfood u okviru lične prehrane.
          </p>
        </div>
        <div className="h-[20rem] w-full">
          <div className="w-10 h-auto">
            <Image src={image2} alt="Dami.ba" className="w-full h-full" />
          </div>
          <h3 className="uppercase my-5 text-2xl font-semibold">
            Dijagnostika
          </h3>
          <p>
            Mjerenje mišićne mase, masti u tijelu, vode u organizmu, mjerenje
            obima i izračunavanje indeksa tjelesne mase se obavezno prate za
            svakog vježbača i evidentiraju, te tako pratite svaki svoj napredak.
          </p>
        </div>
        <div className="h-[20rem] w-full">
          <div className="w-10 h-auto">
            <Image src={image1} alt="Dami.ba" className="w-full h-full" />
          </div>
          <h3 className="uppercase my-5 text-2xl font-semibold">
            Individualno
          </h3>
          <p>
            Dizajniranje treninga se pravi prema stvarnim potrebama svakog
            člana, u skladu sa njegovim ciljem treninga, trenutnom zdravstvenom
            stanju, aktuelnim mogućnostima.
          </p>
        </div>
      </div>
    </div>
  );
}
