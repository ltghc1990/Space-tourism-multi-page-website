import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { navlinks } from "./navlinks";
import Link from "next/link";
import MobileButtonMenu from "./MobileButtonMenu";
import Image from "next/image";
import logo from "../../public/assets/shared/logo.svg";

// the logo is slightly misaligned so fix it

const Navbar = () => {
  const router = useRouter();
  const [currentNav, setCurrentNav] = useState(0);
  const [open, setOpen] = useState(false);

  const menuHandler = () => setOpen(!open);

  return (
    <div className="flex items-center justify-between py-2">
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
        <div className=" md:hidden">
          <MobileButtonMenu menuHandler={menuHandler} open={open} />
        </div>
        <div className="hidden py-4 text-gray-400 uppercase bg-gray-600 md:block font-bellafair">
          {navlinks.map((item, index) => {
            return (
              <Link href={item.link} passHref key={item.name}>
                <motion.a className="px-4 py-4 border cursor-pointer">
                  <span className="text-gray-100">{`0${index} `}</span>
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
