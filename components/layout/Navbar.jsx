import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between py-2 border">
      <div>
        <p>LOGO</p>
      </div>
      <nav className="space-x-6">
        <ul>{/* link list */}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
