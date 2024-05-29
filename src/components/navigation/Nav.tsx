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
      <ul className="flex items-center gap-4 text-black">
        {list.list.map(({ name, href }, i) => {
          if (name === "Kontakt") {
            return (
              <li
                key={i}
                className="bg-darkBlue  font-semibold rounded-md text-white py-2 px-4 hover:bg-transparent  hover:border-[1px] hover:text-darkBlue duration-300 ease-linear"
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
