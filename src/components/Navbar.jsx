import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[95%] mx-auto h-[80px]">
        <div className="logo font-bold text-2xl">
          <h1 className="text-[#FF6500]">Khayam Ijaz</h1>
        </div>
        <ul className="flex items-center gap-5 font-semibold cursor-pointer">
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Home
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            About
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Services
          </li>
          <li className="hover:text-[#FF6500] transition-all duration-300">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
