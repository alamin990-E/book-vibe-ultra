import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Listed Book</Link>
        </li>
        <li>
          <Link href="">Read Book</Link>
        </li>
    
      </>
    );
  };

  return (
    <nav className="border-b border-gray-300 bg-white ">
      <div className="container mx-auto relative flex items-center justify-between px-2 py-3 sm:px-4 md:px-0">
        {/* Mobile Hamburger  */}
        <div className="text-gray-900">
          <RxHamburgerMenu className="size-6.5 sm:size-7 md:hidden" />
        </div>

        {/* Loago for Desktop and Mobile */}
        <div className="absolute left-[42%] sm:left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold whitespace-nowrap">
            Book
            <span className="bg-linear-to-r from-[#59C6D2] to-[#23BE0A] bg-clip-text text-transparent">
              Vibe
            </span>
          </h2>
        </div>

        {/* Menu Desktop   */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 text-[16px] font-normal">
          {navMenu()}
        </ul>

        {/* Button  */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-4">
          <button className="btn px-2 py-1 sm:px-2.5 sm:py-1 md:px-5 md:py-2 text-white rounded-2.5 border-none bg-[#23BE0A]">
            Sing In
          </button>
          <button className="btn px-2 py-1 sm:px-3 sm:py-1 md:px-5 md:py-2  text-white rounded-2.5 border-none bg-[#59C6D2]">
            Sing Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
