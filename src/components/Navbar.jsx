import React from "react";

export default function Navbar() {
  return (
    <div className="h-full w-full flex justify-between items-center px-4">
      <div className="px-4">
        <p className="text-xl font-bold">JDP</p>
      </div>
      <div className="flex justify-end items-center pr-4 gap-2 text-lg font-semibold">
        <p className="px-4 py-2">Buy</p>
        <p className="px-4 py-2"> Rent</p>
        <p className="px-4 py-2">Sale</p>
      </div>
    </div>
  );
}
