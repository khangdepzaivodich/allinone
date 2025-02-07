"use client";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div
        className={`flex flex-col md:flex-row items-start md:items-center justify-center md:justify-around py-6 border border-gray-400 pl-6 md:pl-0`}
      >
        <h1 className="font-extrabold text-2xl cursor-pointer">AllinOne</h1>
        <ul
          className={`flex flex-col self-center md:flex-row gap-2 md:gap-14 mt-11 md:mt-0 ${
            menuOpen ? "opacity-100" : "opacity-0"
          } md:opacity-100 ${menuOpen ? "flex" : "hidden"} md:flex list-none`}
        >
          <li className="cursor-pointer text-xl hover:scale-125 hover:underline transition-all duration-150 ">
            Home
          </li>
          <li className="cursor-pointer text-xl hover:scale-125 hover:underline transition-all duration-150 ">
            Contact
          </li>
          <li className="cursor-pointer text-xl hover:scale-125 hover:underline transition-all duration-150 ">
            About
          </li>
          <li className="cursor-pointer text-xl hover:scale-125 hover:underline transition-all duration-150 ">
            Sign up
          </li>
        </ul>
        <div
          className={`flex gap-9 items-center mt-4 md:mt-0 ${
            menuOpen ? "opacity-100" : "opacity-0"
          } md:opacity-100 ${menuOpen ? "flex" : "hidden"} md:flex`}
        >
          <div className="relative flex items-center">
            <input
              placeholder="What are you looking for?"
              className="px-2 py-1 rounded-sm border border-black focus:border-blue-500 pr-8"
            />
            <CiSearch className="absolute right-2 text-gray-500" />
          </div>
          <CiHeart
            size={24}
            cursor={"pointer"}
            className="hover:scale-150 transition-all duration-150"
          />
          <MdOutlineShoppingCart
            size={24}
            cursor={"pointer"}
            className="hover:scale-150 transition-all duration-150"
          />
        </div>
      </div>
      <RxHamburgerMenu
        size={24}
        className="absolute right-0 mr-6 top-[30px] opacity-100 md:opacity-0 flex md:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Header;
