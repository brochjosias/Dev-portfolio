"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleHireMeClick = () => {
    // Encontra o elemento com o id "contacts" e rola até ele
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240c3b]" : "bg-transparent"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/imagens/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Nav links */}
        <nav className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url} className="nav__link">
                {navlink.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleHireMeClick}
              className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer"
            >
              Hire me
            </button>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
