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
  const { asPath } = router;

  const [currentNav, setCurrentNav] = useState(asPath);
  const [open, setOpen] = useState(false);

  const menuHandler = () => setOpen(!open);

  useEffect(() => {
    setCurrentNav(asPath);
  }, [asPath]);

  return (
    <div className="flex items-center justify-between py-2">
      <Link href="/" passHref>
        <a>
          <Image src={logo} width="32px" height="32px" alt="Logo" />
        </a>
      </Link>
      <div className="space-x-6">
        <div className=" md:hidden">
          <MobileButtonMenu menuHandler={menuHandler} open={open} />
        </div>
        <nav className="hidden py-4 text-gray-400 uppercase md:block md:bg-gray-300 md:bg-opacity-10 backdrop-filter backdrop-blur-lg">
          {navlinks.map((item, index) => {
            return (
              <Link href={item.link} passHref key={item.name}>
                <motion.a
                  className={`px-4 py-4 font-thin cursor-pointer ${
                    item.link === currentNav &&
                    "border-b-2 border-gray-100 text-gray-100 font-semibold"
                  }`}
                >
                  <span className="text-gray-100">{`0${index} `}</span>
                  {item.name}
                </motion.a>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
