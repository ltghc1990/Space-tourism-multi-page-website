import React, { useContext } from "react";
import { motion } from "framer-motion";
import { navlinks } from "./navlinks";
import Link from "next/link";
import MobileButtonMenu from "./MobileButtonMenu";
import Image from "next/image";
import logo from "../../public/assets/shared/logo.svg";

// the logo is slightly misaligned so fix it

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-2 border">
      <Link href="/" passHref>
        <a>
          <Image
            src={logo}
            width="32px"
            height="32px"
            alt="Logo"
            layout="fixed"
          />
        </a>
      </Link>
      <div className="space-x-6">
        {/* adjacent menu that disappears  */}
        <div className=" md:hidden">
          <MobileButtonMenu />
        </div>
        <div className="hidden text-gray-100 md:block">
          {navlinks.map((item, index) => {
            return (
              <Link href={item.link} passHref key={item.name}>
                <motion.a className="px-4 py-2 border cursor-pointer">
                  {item.name}
                </motion.a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
