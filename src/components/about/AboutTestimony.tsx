import Image from "next/image";
import sabiha from "@/assets/img/about/testimonials/sabiha.jpg";
import sladjan from "@/assets/img/about/testimonials/sladjan.jpg";
import tarik from "@/assets/img/about/testimonials/tarik.jpg";

const testimonies = [
  {
    id: 1,
    text: "Treniram već pet godina u klubu Dami.Došla sam sa protuzijom diska Ls1..predložena operacja.Uz redovne treninge i pomoć mojih trenerice ojačala sam svoja leđa i normalno obavljam svoje obaveze. Veliko hvala Dami..lp Sabiha Manso",
    name: "Sabiha Manso",
    position: "Zanimanje",
    image: sabiha,
  },
  {
    id: 2,
    text: "Stručnost,motivacija,orginalnost i ljubav prema sportu, svaki uspjeh je zajednička radost, zato smo supruga i ja tu godinama!! Ermina i Slađan Knežević",
    name: "Slađan Knežević",
    position: "Zanimanje",
    image: sladjan,
  },
  {
    id: 3,
    text: "Dovoljno je da kažem kako 3 godine treniram u Dami i da su dio mog tima koji niže rezultate i uspjehe u plivanju. Hvala Vam Tarik Trgo, državni prvak u plivanju",
    name: "Tarik Trgo",
    position: "Zanimanje",
    image: tarik,
  },
];

export default function AboutTestimony() {
  return (
    <section className="py-28 px-56">
      <h2 className="text-6xl font-bold mb-28 text-left">Rekli su o nama</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonies.map((testimony) => (
          <div
            key={testimony.id}
            className="bg-white flex flex-col justify-between p-8 rounded-lg shadow-lg relative"
          >
            <div className="absolute top-[-30px] left-8 w-[50px] h-[50px] bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
              &ldquo;
            </div>
            <p className="text-gray-700 mt-6">{testimony.text}</p>
            <div className="flex items-center mt-6">
              <div className="rounded-full w-[50px] h-[50px]">
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{testimony.name}</h4>
                <p className="text-gray-500">{testimony.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
