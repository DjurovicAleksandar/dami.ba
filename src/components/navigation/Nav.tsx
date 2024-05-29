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

  console.log();

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
      className={`nav fixed w-full bg-lightBlue z-[50] duration-300 ease-linear px-6 md:px-28 py-4 items-center justify-between flex shadow-sm ${
        isOnTop ? "backdrop-blur-none" : "backdrop-blur-md"
      } `}
    >
      <Image src={logo} alt="logo" width={56} height={56} />
      <ul className="hidden md:flex items-center gap-4 text-[#0b0b0b] uppercase font-semibold">
        {list.list.map(({ name, href }, i) => {
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
