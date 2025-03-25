import { navLinks } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/*LOGO*/}
        <Image
          src="/imagens/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav links */}
        <nav className="flex items-center space-x-10">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url} className="nav__link">
              {navlink.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
