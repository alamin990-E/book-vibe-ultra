"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavHamburger = ({navMenu}) => {
  const [open, setOpen] = useState(false);
  const handleHamburger = () => {
    if (open === true) {
      setOpen(false);
    }else{
        setOpen(true)
    }
  };
  return (
    <div>
      <div className="text-gray-900">
        <RxHamburgerMenu
          onClick={handleHamburger}
          className="size-6.5 sm:size-7 md:hidden"
        />
      </div>
      {open && (
        <div className=" absolute top-full w-full mt-4 flex flex-col bg-slate-100 p-2 container mx-auto gap-2.5 text-xs font-medium md:hidden">
          <ul className=" flex flex-col gap-2">
            {navMenu}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavHamburger;
