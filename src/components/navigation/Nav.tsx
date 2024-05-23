"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import logo from "@/assets/img/logo.png";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import list from "./nav.json";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const [selectedLink, setSelectedLink] = useState<{
    isActive: boolean;
    index: number;
  }>({
    isActive: false,
    index: 0,
  });

  //   useEffect(() => {
  //     setIsActive(false);
  //   }, [pathname]);

  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     if (!navRef.current) return;
  //     const showNaw = gsap
  //       .fromTo(
  //         navRef.current,
  //         { top: "-200px", opacity: 0 },
  //         { top: "0px", opacity: 1, duration: 0.4 }
  //       )
  //       .progress(1);

  //     showNaw.play(-2);

  //     ScrollTrigger.create({
  //       start: "top top",
  //       end: "max",
  //       onUpdate: (self) => {
  //         const topStyle = navRef.current ? +navRef.current.style.top : 0;
  //         setIsOnTop(+topStyle > 0);

  //         self.direction === -1 ? showNaw.play() : showNaw.reverse();
  //       },
  //     });
  //   }, []);
  return (
    <nav
      ref={navRef}
      className={`nav absolute w-full z-[50] duration-300 ease-linear px-56 py-6 items-center justify-between flex shadow-sm ${
        isOnTop ? "backdrop-blur-none" : "backdrop-blur-md"
      } `}
    >
      <Image src={logo} alt="logo" width={56} height={56} />
      <ul className="flex items-center gap-4 text-black">
        {list.list.map(({ name, href }, i) => {
          if (name === "Kontakt") {
            return (
              <li
                key={i}
                className="bg-darkBlue font-semibold rounded-md text-white py-2 px-4 hover:bg-transparent hover:text-darkBlue duration-300 ease-linear"
              >
                <Link href={href}>{name}</Link>
              </li>
            );
          }
          return (
            <li key={i} className="hover:text-darkBlue">
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
