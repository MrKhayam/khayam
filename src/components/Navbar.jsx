import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-[95%] mx-auto h-[80px]">
        <div className="logo font-bold text-2xl">
          <h1 className="text-[#FF6500]">Khayam Ijaz</h1>
        </div>
        <ul className="md:flex hidden items-center gap-5 font-semibold cursor-pointer">
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Home
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            About
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Projects
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Contact
          </li>
        </ul>
        <div className="md:hidden block ">
          <RiMenu3Line
            onClick={() => setOpen(!open)}
            size={25}
            className="cursor-pointer"
          />
        </div>
        {open && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#FF6500] z-50">
            <ul className="flex gap-3 flex-col items-center justify-center h-full">
              <li className="text-white text-3xl font-bold">Home</li>
              <li className="text-white text-3xl font-bold">About</li>
              <li className="text-white text-3xl font-bold">Projects</li>
              <li className="text-white text-3xl font-bold">Contact</li>
            </ul>
            <div className="absolute top-3 right-0 p-3">
              <RiCloseLine
                onClick={() => setOpen(!open)}
                size={25}
                className="cursor-pointer text-white"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
