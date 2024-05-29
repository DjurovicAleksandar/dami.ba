import Image from "next/image";

import location1 from "@/assets/img/about/loaction1.webp";
import pin from "@/assets/img/icons/pin.png";

export default function AboutLocation() {
  return (
    <div className="w-full bg-white flex flex-col items-center  px-56 py-28 text-black">
      <h2 className="text-6xl mb-10 text-left w-full">Naše lokacije</h2>
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
  );
}
