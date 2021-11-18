import React from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { navlinks } from "./navlinks";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";
import hamburgerClose from "../../public/assets/shared/icon-close.svg";

const MobileButtonMenu = ({ open, menuHandler }) => {
  return (
    <Menu as="div" className="relative w-8 h-8">
      <Menu.Button>
        <Image
          height="32px"
          width="32px"
          src={open ? hamburgerClose : hamburger}
          alt="menu"
          onClick={menuHandler}
        />
      </Menu.Button>
      <Menu.Items className="absolute right-0 flex flex-col bg-white top-12">
        {navlinks.map((item) => {
          return (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500 text-gray-100"} px-2`}
                  href={item.link}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default MobileButtonMenu;
