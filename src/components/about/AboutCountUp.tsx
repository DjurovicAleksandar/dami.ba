"use client";
import Image from "next/image";

import countUp from "@/assets/img/about/countUp.webp";
import CountUp from "react-countup";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function AboutCountUp() {
  const countRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(countRef, { once: true });
  return (
    <div className="w-full bg-gradient-to-r from-stone-800 from-5% via-black via-55% to-stone-800 px-56 py-28 text-white relative">
      {/* <div>
        <h2 className="text-6xl font-bold  mb-56 text-center">
          Dostignuća za pokazivanje
        </h2>
      </div> */}
      <div
        ref={countRef}
        className="grid grid-cols-2 gap-4 gap-x-[10vw] items-center shadow-md"
      >
        {isInView && (
          <>
            <motion.div
              initial={{ opacity: 0, translateY: 50, translateX: "-50%" }}
              animate={{ opacity: 0.5, translateY: 0, translateX: "-50%" }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2  bottom-0 w-[25rem] opacity-50"
            >
              <Image className="w-full h-full" src={countUp} alt="Dami.ba" />
            </motion.div>
            <div className="text-center mb-10">
              <h3 className="text-8xl font-bold">
                <CountUp start={0} end={100} duration={2} />+
              </h3>
              <p>Zaposlenika</p>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-8xl font-bold">
                <CountUp start={0} end={50} duration={2} />+
              </h3>
              <p>Treninga</p>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-8xl font-bold">
                <CountUp start={0} end={400} duration={2} />+
              </h3>
              <p>Članova</p>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-8xl font-bold">
                <CountUp start={0} end={10} duration={2} />+
              </h3>
              <p>Nagrada</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
