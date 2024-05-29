import Image from "next/image";
import about from "@/assets/img/about/about.webp";

export default function AboutHeader() {
  return (
    <header className="h-screen bg-lightBlue relative px-56 py-28 pt-56">
      <div className="flex flex-col items-start py-10">
        <h1 className="text-4xl lg:text-8xl lg:w-4/5 mb-5">
          Energija, timski rad
        </h1>
        <p className="lg:text-3xl lg:w-4/5 font-thin">
          Dami.ba je zajednica posvećenih fitnes stručnjaka koji vam pomažu da
          dostignete svoje ciljeve.
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={about} alt="Dami.ba" />
      </div>
    </header>
  );
}
