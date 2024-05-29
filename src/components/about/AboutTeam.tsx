"use client";

import img1 from "@/assets/img/about/team/1.webp";
import img2 from "@/assets/img/about/team/2.webp";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    id: "damira",
    name: "Damira Vranešić-Hadžimehmedović",
    occ: "Direktor",
    img: img1,
  },
  {
    id: "anesa",
    name: "Anesa Nurkanović",
    occ: "Instruktor plivanja",
    img: img2,
  },
  { id: "asija", name: "Asija Vranešić", occ: "Mlađi trener", img: img1 },
  {
    id: "senada",
    name: "Senada Kapetanović",
    occ: "Aqua fitness instruktor",
    img: img2,
  },
  {
    id: "emina",
    name: "Emina Mulaosmanović",
    occ: "Fitness trener",
    img: img1,
  },
  {
    id: "lelja",
    name: "Lelja Aljević",
    occ: "Baby swimming instruktor",
    img: img2,
  },
];

export default function AboutTeam() {
  const [activeMember, setActiveMember] = useState<string | null>("damira");

  const toggleActive = (memberId: string) => {
    setActiveMember((prevActiveMember) =>
      prevActiveMember === memberId ? null : memberId
    );
  };

  return (
    <section className="px-56 py-28">
      <h2 className="text-6xl text-left w-full">Naš tim</h2>
      <div className="flex items-center justify-between">
        <div>
          <ul>
            {teamMembers.map((member) => (
              <motion.li
                key={member.id}
                className={`cursor-pointer flex items-center gap-4 text-2xl hover:text-darkBlue mb-10 ${
                  activeMember === member.id ? "text-darkBlue" : ""
                }`}
                onClick={() => toggleActive(member.id)}
                initial="rest"
                whileHover="hover"
                animate={activeMember === member.id ? "active" : "rest"}
              >
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: 30 },
                    active: { width: 30 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block h-[2px] bg-darkBlue"
                />
                {member.name}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          {teamMembers.map(
            (member) =>
              activeMember === member.id && (
                <div
                  key={member.id}
                  className="w-[25rem] flex flex-col items-center justify-center"
                >
                  <Image
                    className="w-full h-full"
                    alt="Dami.ba"
                    src={member.img}
                  />
                  <h3 className="mt-5 font-semibold text-darkBlue text-left w-full mb-2">
                    {member.occ}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia eius eum consequatur obcaecati et minus eos cum
                    incidunt praesentium quo. Enim praesentium sit eaque totam
                    iste blanditiis iusto ratione labore!
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
