import Image from "next/image";
import about2 from "@/assets/img/about/about2.webp";
import damira from "@/assets/img/about/damira.webp";

export default function AboutJourney() {
  return (
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
            <h3 className="text-4xl  my-10">Kako je počelo</h3>
            <p>
              Klub je osnovala univerzitetska profesorica i doktor nauka iz
              oblasti sporta i tjelesnog odgoja, Damira Vranešić –
              Hadžimehmedović 2005. godine, kada je završila dodiplomski studij
              na Fakultetu sporta i tjelesnog odgoja. Rast i razvoj kluba je
              pratio dugogodišnje profesionalno napredovanje i usavršavanje
              Doc.dr Damire Vranešić – Hadžimehmedović. Zagovaramo isključivo
              profesionalan i stručan odnos prema svakom klijentu, bez prostora
              za neozbiljnost, daleko od amaterizma koji dugoročno nanose
              ogromnu štetu u prostoru rekreativnog vježbanja . Dami je klub
              koji tretira svakog člana kao pojedinca koji je poseban i kao
              takav treba dobiti trening prilagođen sebi. Klub Dami je porodična
              priča u svakom obliku, te svojim aktivnostima, ponudama veže i
              motiviše porodice na zdrav način života što garantuje dugoročan
              uspjeh, zdravlje i vitalnost. Dizajniranje treninga prema stvarnim
              potrebama svakog člana porodice, od najmlađeg do najstarijeg u
              skladu sa njihovim sposobnostima, mogućnostima, individualnim
              potrebama.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-28">
        <div className="w-full">
          <div className="pl-56 ">
            <h2 className="text-4xl  my-10">Kako napreduje</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              provident obcaecati rerum fugiat, tempora facere, dignissimos
              blanditiis recusandae expedita accusantium asperiores voluptatum
              laborum sequi culpa sint quos eaque suscipit doloribus!
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
  );
}
