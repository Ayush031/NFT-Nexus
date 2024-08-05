import React from "react";
import logo from "../assets/tlogo.png";
import { LinkBtn } from "./Utility";

const navLinks = ["Home", "MarketPlace", "Merchandise", "Community"];

function Navbar() {
  return (
    <>
      <nav className="w-[100%] flex items-center h-[12%] justify-evenly pt-2  ">
        <div className="basis-1/6 h-[100%]">
          <img src={logo} alt="Logo" width={100} />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="text-gray-200 flex basis-1/3 h-12 bg-gray-600 rounded-2xl p-3 justify-center outline-none"
        />
        <div className="flex justify-evenly list-none basis-1/3">
          {navLinks.map((link, index) => (
            <LinkBtn link={link} index={index} />
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
