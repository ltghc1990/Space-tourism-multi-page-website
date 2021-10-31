import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex border py-2 justify-between">
      <div>
        <p>LOGO</p>
      </div>
      <div className="space-x-6">
        <button>xyz</button>
        <button>about</button>
      </div>
    </div>
  );
};

export default Navbar;
