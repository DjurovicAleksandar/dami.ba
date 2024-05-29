"use client";
import { useState, useRef } from "react";
import img1 from "@/assets/img/about/team/1.webp";
import img2 from "@/assets/img/about/team/2.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
];

export default function AboutGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-lightBlue ">
      <h2 className="text-6xl text-left w-full px-56 mb-28">
        Sa naših treninga
      </h2>
      <div className="relative ">
        <div
          ref={galleryRef}
          className="flex  overflow-x-scroll scrollbar-hide space-x-4 -translate-x-[200px]"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className={`relative min-w-[300px] h-[400px] flex-shrink-0 rounded-lg ${
                index % 2 === 0 ? "rotate-3" : "-rotate-3"
              } border-black`}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <Image
                src={src}
                alt={`Dami.ba ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute px-56 -bottom-[5rem] left-10 flex items-center justify-center gap-10">
          <button
            onClick={scrollLeft}
            className=" bg-black text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className=" bg-black text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
