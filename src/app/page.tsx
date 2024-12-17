"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [location, setLocation] = useState("");

  const [activeButton, setActiveButton] = useState("Rent");
  const router = useRouter();

  const handleBrowseProperty = () => {
    if (activeButton === "Rent") {
      router.push("/rent");
    } else if (activeButton === "Buy") {
      router.push("/buy");
    }
  };
  return (
    <div className="h-full bg-gradient-to-b from-[#E0DEF7] to-transparent w-full gap-8 flex flex-col md:flex-col lg:flex-row overflow-auto relative">
      {/* Absolute Background Image */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: "url('/assets/images/appBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Left Content */}
      <div className="h-3/4  lg:h-full w-full flex justify-center items-center pt-6 z-10">
        <div className="flex flex-col items-center md:items-center lg:items-start gap-6 w-[80%] lg:w-[75%] md:[85%] m-auto">
          <p className="text-[#000929] text-6xl  text-wrap text-center leading-tight md:text-left lg:text-left font-semibold  ">
            Buy, rent or sell <br /> properties in
            <br /> <span className="text-[#F848C7]">Jaipur</span>
          </p>
          <p className="font-medium w-[80%] text-wrap text-center md:text-left lg:text-left">
            A great platform to buy, sell or even rent your properties without
            any commisions.
          </p>
          <div className="pt-8">
            <div className="bg-white w-[252px] rounded-md flex">
              <button
                className={`w-[126px] p-2 font-semibold rounded-tl-md ${
                  activeButton === "Rent"
                    ? "bg-[#E9E8FF] text-[#7065F0] border-b-2 border-[#7065F0]"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("Rent")}
              >
                Rent
              </button>
              <button
                className={`w-[126px] p-2 font-semibold rounded-tr-md ${
                  activeButton === "Buy"
                    ? "bg-[#E9E8FF] text-[#7065F0] border-b-2 border-[#7065F0]"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveButton("Buy")}
              >
                Buy
              </button>
            </div>
            <div
              className="w-fit flex flex-col gap-2 bg-white rounded-md items-center md:flex-col lg:flex-row px-4 py-2"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <div className="flex w-[220px] flex-col gap-2 ">
                <label>Location</label>
                <input
                  className="border-b-2 outline-none border-[#E0DEF7]"
                  type="text"
                  placeholder="Search Location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="">
                <button
                  className="rounded-md bg-[#7065F0] hover:bg-[#5f52f3] font-semibold px-3 py-2 text-white"
                  onClick={handleBrowseProperty}
                >
                  Browse Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Content */}
      <div className="h-1/4  lg:h-full w-full flex justify-center items-end pb-4 z-10 relative">
        <div
          className="h-[150px] w-[80%] p-6 bg-white flex "
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <div className="flex-1 text-center flex flex-col justify-center items-center gap-2">
            <img src="/assets/icons/homeIcon1.svg" />
            <div>
              <p>50k+ renters</p>
              <p>believe in our service</p>
            </div>
          </div>
          <div className="flex-1 text-center flex flex-col justify-center items-center gap-2">
            <img src="/assets/icons/homeIcon2.svg" />
            <div>
              <p>10k+ properties</p>
              <p>ready for occupancy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
