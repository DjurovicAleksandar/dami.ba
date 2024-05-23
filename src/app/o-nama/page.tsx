import Image from "next/image";
import family from "@/assets/img/hero/family.jpg";
import Link from "next/link";
import image1 from "@/assets/img/about/1.png";
import image2 from "@/assets/img/about/2.png";
import image3 from "@/assets/img/about/3.png";
import image4 from "@/assets/img/about/4.png";
import about from "@/assets/img/about/about.webp";
import about2 from "@/assets/img/about/about2.webp";
import damira from "@/assets/img/about/damira.webp";
import location1 from "@/assets/img/about/loaction1.webp";
import pin from "@/assets/img/icons/pin.png";

export default function About() {
  return (
    <main className="">
      <header className="h-screen bg-lightBlue relative px-56 py-28">
        <div className="flex flex-col items-start py-10">
          <h1 className="text-8xl w-1/2 font-bold leading-[100px] mb-10">
            Energija, timski rad
          </h1>
          <p className="w-1/2 text-3xl font-light">
            Dami.ba je zajednica posvećenih fitnes stručnjaka koji vam pomažu da
            dostignete svoje ciljeve.
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src={about} alt="Dami.ba" />
        </div>
      </header>
      <div className="w-full bg-black h-screen px-56 py-28 text-white">
        <h2 className="text-6xl font-bold">Naša ponuda uključuje</h2>
        <div className="flex items-center gap-10 mt-28">
          <div className="h-[20rem] w-full">
            <div className="w-10 h-auto">
              <Image src={image3} alt="Dami.ba" className="w-full h-full" />
            </div>
            <h3 className="uppercase my-5 text-2xl font-semibold">TRENER</h3>
            <p>
              Naši treneri su vježbačima dostupni 24 sata dnevno, kao i
              konsultant doktor, za sva pitanja, nejasnoće i dogovaranja.
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
              svakog vježbača i evidentiraju, te tako pratite svaki svoj
              napredak.
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
              člana, u skladu sa njegovim ciljem treninga, trenutnom
              zdravstvenom stanju, aktuelnim mogućnostima.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white  py-28 text-black">
        <div className="flex items-center justify-center mb-28">
          <div className="w-full h-auto mr-28">
            <Image
              src={damira}
              alt="Dami.ba"
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full">
            <div className="pr-56 ">
              <h3 className="text-4xl font-bold my-10">Kako je počelo</h3>
              <p>
                Klub je osnovala univerzitetska profesorica i doktor nauka iz
                oblasti sporta i tjelesnog odgoja, Damira Vranešić –
                Hadžimehmedović 2005. godine, kada je završila dodiplomski
                studij na Fakultetu sporta i tjelesnog odgoja. Rast i razvoj
                kluba je pratio dugogodišnje profesionalno napredovanje i
                usavršavanje Doc.dr Damire Vranešić – Hadžimehmedović.
                Zagovaramo isključivo profesionalan i stručan odnos prema svakom
                klijentu, bez prostora za neozbiljnost, daleko od amaterizma
                koji dugoročno nanose ogromnu štetu u prostoru rekreativnog
                vježbanja . Dami je klub koji tretira svakog člana kao pojedinca
                koji je poseban i kao takav treba dobiti trening prilagođen
                sebi. Klub Dami je porodična priča u svakom obliku, te svojim
                aktivnostima, ponudama veže i motiviše porodice na zdrav način
                života što garantuje dugoročan uspjeh, zdravlje i vitalnost.
                Dizajniranje treninga prema stvarnim potrebama svakog člana
                porodice, od najmlađeg do najstarijeg u skladu sa njihovim
                sposobnostima, mogućnostima, individualnim potrebama.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-28">
          <div className="w-full">
            <div className="pl-56 ">
              <h3 className="text-4xl font-bold my-10">Kako napreduje</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, provident obcaecati rerum fugiat, tempora facere,
                dignissimos blanditiis recusandae expedita accusantium
                asperiores voluptatum laborum sequi culpa sint quos eaque
                suscipit doloribus!
              </p>{" "}
            </div>
          </div>
          <div className="w-full ml-28">
            <Image
              src={about2}
              alt="Dami.ba"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-darkBlue flex items-center  px-56 py-28 text-white">
        <div>
          <h2 className="text-6xl font-bold w-3/5">
            Dostignuća za pokazivanje
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-x-[10vw]">
          <div className="text-left mb-10">
            <h3 className="text-6xl font-bold">100+</h3>
            <p>Zaposlenika</p>
          </div>
          <div className="text-left mb-10">
            <h3 className="text-6xl font-bold">100+</h3>
            <p>Zaposlenika</p>
          </div>
          <div className="text-left mb-10">
            <h3 className="text-6xl font-bold">100+</h3>
            <p>Zaposlenika</p>
          </div>
          <div className="text-left mb-10">
            <h3 className="text-6xl font-bold">100+</h3>
            <p>Zaposlenika</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center  px-56 py-28 text-black">
        <h2 className="text-6xl font-bold mb-10">Naše lokacije</h2>
        <div className="flex items-center justify-between gap-10">
          <div>
            <Image src={location1} alt="Dami.ba" className="rounded-md" />
            <div className="flex items-center gap-4 mt-7">
              <Image src={pin} alt="Dami.ba" width={20} height={20} />
              <p className="font-light">
                Dzemala Bijedica St 134/B, Sarajevo 71000
              </p>
            </div>
          </div>
          <div>
            <Image src={location1} alt="Dami.ba" className="rounded-md" />
            <div className="flex items-center gap-4 mt-7">
              <Image src={pin} alt="Dami.ba" width={20} height={20} />
              <p className="font-light">
                Dzemala Bijedica St 134/B, Sarajevo 71000
              </p>
            </div>
          </div>
          <div>
            <Image src={location1} alt="Dami.ba" className="rounded-md" />
            <div className="flex items-center gap-4 mt-7">
              <Image src={pin} alt="Dami.ba" width={20} height={20} />
              <p className="font-light">
                Dzemala Bijedica St 134/B, Sarajevo 71000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-lightBlue flex flex-col items-center  px-56 py-28 text-black">
        <h2 className="text-6xl font-bold mb-10 text-center">
          Pridruzite nam se u fitness avanturi!
        </h2>
        <Link
          href="/kontakt"
          className="bg-darkBlue font-semibold rounded-md text-white py-8 px-12 text-4xl hover:bg-transparent hover:text-darkBlue duration-300 ease-linear"
        >
          Prijava
        </Link>
      </div>
    </main>
  );
}
