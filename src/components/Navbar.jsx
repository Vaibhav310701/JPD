"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-full w-full flex justify-between items-center px-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="px-4">
        <p className="text-xl font-bold">JDP</p>
      </div>

      {/* Buttons for large screens */}
      <div className="hidden md:flex justify-end gap-4 items-center pr-2 text-sm lg:text-md font-medium">
        <button className="bg-[#7065F0] hover:bg-[#5a4cf3] px-2 py-2 text-white rounded-md">
          ListYourSpace
        </button>
        <button className="border border-[#7065F0] hover:bg-[#5a4cf3] px-4 py-2 text-[#7065F0] hover:text-white rounded-md">
          Login
        </button>
        <button className="bg-[#7065F0] hover:bg-[#5a4cf3] px-2 py-2 text-white rounded-md">
          Sign In
        </button>
      </div>

      {/* List Your button visible for small screen only. */}
      <div className="lg:hidden md:hidden flex items-center">
        <button className="bg-[#7065F0] hover:bg-[#5a4cf3] px-2 py-2 text-white rounded-md">
          ListYourSpace
        </button>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-[#7065F0] hover:text-[#5a4cf3] transition-all"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Dropdown Menu for small screen */}
      <div
        className={`absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-2 transform transition-all duration-300 z-50 ${
          isMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        } md:hidden`}
      >
        <button className="block w-full border border-[#7065F0] hover:bg-[#5a4cf3] px-6 py-2 text-[#7065F0] hover:text-white rounded-md text-center">
          Login
        </button>
        <button className="block w-full bg-[#7065F0] hover:bg-[#5a4cf3] px-6 py-2 text-white rounded-md text-center">
          Sign In
        </button>
      </div>
    </div>
  );
}
