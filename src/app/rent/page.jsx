"use client";
import { useState } from "react";
export default function page() {
  const [activeButton, setActiveButton] = useState("Rent");
  return (
    <div className="h-full w-full p-2">
      <div className="w-full flex items-center justify-start gap-2 ">
        <div
          className="flex w-fit flex-col gap-1 bg-white p-2 rounded-md "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[0.875rem]">Location</label>
          <div className="flex items-center border-b-2   border-[#E0DEF7]">
            <input
              className="outline-none flex-1 py-1 text-[#000929] text-[16px] font-semibold"
              type="text"
              placeholder="Search Location..."
            />
            <img src="/assets/icons/arrowDown.svg" />
          </div>
        </div>
        <div
          className="flex w-fit flex-col gap-1 bg-white p-2 rounded-md  "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[14px]">Budget</label>
          <div className="flex items-center border-b-2   border-[#E0DEF7]">
            <input
              className="outline-none flex-1 py-1 text-[#000929] text-[16px] font-semibold"
              type="text"
              placeholder="Search Budget"
            />
            <img src="/assets/icons/arrowDown.svg" />
          </div>
        </div>
      </div>

      <div className="h-[calc(100%-80px)] w-full pt-4">
        <div className="h-[42px] w-full border-b-2 border-[#E0DEF7] flex justify-between items-center">
          <div>
            <button
              className={` px-6 py-2 font-semibold rounded-tl-md ${
                activeButton === "Top"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-b-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7]"
              }`}
              onClick={() => setActiveButton("Top")}
            >
              Top
            </button>
            <button
              className={`px-6 py-2 font-semibold  ${
                activeButton === "Rent"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-b-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7]"
              }`}
              onClick={() => setActiveButton("Rent")}
            >
              Rent
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-tr-md ${
                activeButton === "Buy"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-b-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7] "
              }`}
              onClick={() => setActiveButton("Buy")}
            >
              Buy
            </button>
          </div>
          <div className="bg-white px-4 py-2 rounded-t-md flex items-center justify-between gap-6">
            <p className="flex-1 flex items-center gap-2">
              Sort : <span>Relevance</span>
            </p>
            <img src="/assets/icons/arrowDown.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
