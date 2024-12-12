import React from "react";

export default function Navbar() {
  return (
    <div className="h-full w-full flex justify-between items-center px-4">
      <div className="px-4">
        <p className="text-xl font-bold">JDP</p>
      </div>
      <div className="flex justify-end gap-4 items-center pr-2  text-sm  lg:text-md md:text-md font-medium">
        <button className="underline">My Listings</button>
        <button className="bg-[#7065F0] hover:bg-[#5a4cf3] px-2 py-2 text-white rounded-md">ListYourSpace</button>
      </div>
    </div>
  );
}
