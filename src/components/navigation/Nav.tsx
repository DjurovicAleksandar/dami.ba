"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import logo from "@/assets/img/logo.png";

import Image from "next/image";
import list from "./nav.json";
import Link from "next/link";

const Nav = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isOnTop, setIsOnTop] = useState(true);

  return (
    <nav
      ref={navRef}
      className={`nav absolute w-full z-[50] duration-300 ease-linear px-56 py-6 items-center justify-between flex shadow-sm ${
        isOnTop ? "backdrop-blur-none" : "backdrop-blur-md"
      } `}
    >
      <Image src={logo} alt="logo" width={56} height={56} />
      <ul className="hidden md:flex items-center gap-4 text-[#0b0b0b] uppercase font-semibold">
        {list.list.map(({ name, href }, i) => {
          if (name === "Kontakt") {
            return (
              <li
                key={i}
                className="duration-300 ease-linear bg-darkBlue rounded-xl md:hover:bg-transparent  cursor-pointer md:hover:text-darkBlue border-2 md:transition border-darkBlue py-2 px-4 text-white"
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
