import { useState } from "react";

import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <a href="#">
        <img
          src={logo}
          alt="hoobank"
          className="w-[124px] h-[32px] object-contain"
        />
      </a>
      <ul className="sm:flex hidden items-center list-none flex-1 justify-end gap-x-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-white text-[16px]"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`sidebar ${
            toggle ? "block" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 rounded-xl min-w-[140px] mx-4 my-2`}
        >
          <ul className="flex flex-col items-center list-none flex-1 justify-end gap-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-white text-[16px]"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
