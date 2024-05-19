import Image from "next/image";
import family from "@/assets/img/hero/family.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header className="h-screen bg-lightBlue relative px-56 py-28 flex items-center justify-start">
        <div className="z-10 w-1/2">
          <h1 className="text-8xl font-bold ">
            Zdravlje je porodična avantura
          </h1>
          <p>
            Učimo kako da ojačamo svoje tijelo i um, dok istovremeno stvaramo
            uspomene koje će trajati cijeli život. Naša zajednica pruža podršku,
            motivaciju i mnoštvo ideja kako da svakodnevno budete aktivni i
            zdravi.
          </p>
        </div>
        <div className="absolute bottom-0 right-10 z-0">
          <Image src={family} alt="Dami.ba" />
        </div>
      </header>
      <div className="w-full bg-lightBlue flex">
        <div className="h-[50vh] w-full relative">
          <Link href="/">
            <Image src={family} alt="Dami.ba" className="w-full h-full" />
          </Link>
        </div>
        <div className="h-[50vh] w-full">
          <Link href="/">
            <Image src={family} alt="Dami.ba" className="w-full h-full" />
          </Link>
        </div>
        <div className="h-[50vh] w-full">
          <Link href="/">
            <Image src={family} alt="Dami.ba" className="w-full h-full" />
          </Link>
        </div>
        <div className="h-[50vh] w-full">
          <Link href="/">
            <Image src={family} alt="Dami.ba" className="w-full h-full" />
          </Link>
        </div>
      </div>
      <div className="h-screen bg-lightBlue"></div>
    </main>
  );
}
