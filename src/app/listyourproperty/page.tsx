"use client";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  openResidential,
  openCommercial,
  openAgricultural,
} from "../../redux/slices/selectedTypeSlice";
import {
  openFlatType,
  openPlotType,
  openVillaType,
} from "@/redux/slices/resdentialTypeSlice";
import { useState } from "react";

export default function page() {
  const [lookingTo, setLookingTo] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [residentialType, setResidentialType] = useState("");

  const isSelectedOpen = useSelector((state: RootState) => state.selectType);
  const isresdentialType = useSelector(
    (state: RootState) => state.resdentialType
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const showAgriculture = () => {
    dispatch(openAgricultural());
    setPropertyType("Agriculture");
  };

  const showCommercial = () => {
    dispatch(openCommercial());
    setPropertyType("Commercial");
  };

  const showResidential = () => {
    dispatch(openResidential());
    setPropertyType("Residential");
  };

  const showVilla = () => {
    dispatch(openVillaType());
    setResidentialType("Villa");
  };
  const showFlat = () => {
    dispatch(openFlatType());
    setResidentialType("Flat");
  };
  const showPlot = () => {
    dispatch(openPlotType());
    setResidentialType("Plot");
  };

  return (
    <div className="h-full w-full flex flex-col gap-2">
      {/* Header */}
      <div className="h-[64px] bg-[#7065F0] flex justify-start items-center gap-4 px-4">
        <MdOutlineKeyboardBackspace
          color="white"
          size={22}
          className="cursor-pointer"
          onClick={() => router.back()} // Navigate to the previous route
        />
        <p
          className="text-[white] font-medium cursor-pointer hover:underline"
          onClick={() => router.back()} // Optionally link the text as well
        >
          Back to search results
        </p>
      </div>
      {/* Content */}
      <div className="h-[calc(100%-64px)] flex flex-col md:flex-row lg:flex-row gap-2 px-2">
        {/* Form Section */}
        <div className="h-full w-full md:w-[calc(100%-300px)] lg:w-[calc(100%-300px)] flex flex-col bg-white rounded-md overflow-auto">
          <div className="sm:h-fit lg:h-[54px] w-full border-b p-4 tex-[14px] lg:text-[18px] font-semibold">
            <p>
              Your property, your terms—start posting for{" "}
              <span className="text-[#7065F0]">free</span> today!
            </p>
          </div>
          <div className=" h-[calc(100%-54px)] w-full">
            <div className="w-[90%] mx-auto flex flex-col gap-4 pt-6">
              {/* Owner Input */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium">Owner Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                ></input>
              </div>
              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                ></input>
              </div>
              {/* Looking for */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium">Looking to</label>
                <div className="flex gap-2 justify-start items-center text-[14px]">
                  <button
                    onClick={() => {
                      setLookingTo("Sale");
                    }}
                    className={`px-4 py-2 border rounded-md ${
                      lookingTo === "Sale"
                        ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                        : "bg-white"
                    }`}
                  >
                    Sale
                  </button>
                  <button
                    onClick={() => {
                      setLookingTo("Rent");
                    }}
                    className={`px-4 py-2 border rounded-md ${
                      lookingTo === "Rent"
                        ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                        : "bg-white"
                    }`}
                  >
                    Rent/Lease
                  </button>
                </div>
              </div>
              {/* Type Of Property */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">
                  Type of property
                </label>
                <div className="flex gap-2 flex-wrap justify-start items-center text-[14px]">
                  <button
                    onClick={showResidential}
                    className={`px-4 py-2 border rounded-md ${
                      propertyType === "Residential"
                        ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                        : "bg-white"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    onClick={showCommercial}
                    className={`px-4 py-2 border rounded-md ${
                      propertyType === "Commercial"
                        ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                        : "bg-white"
                    }`}
                  >
                    Commercial
                  </button>
                  <button
                    onClick={showAgriculture}
                    className={`px-4 py-2 border rounded-md ${
                      propertyType === "Agriculture"
                        ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                        : "bg-white"
                    }`}
                  >
                    Agriculture
                  </button>
                </div>
              </div>

              {/* If Selected type Resdential */}
              <>
                {isSelectedOpen.residential ? (
                  <div className="flex flex-col gap-2 text-[14px]">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-medium">
                        Type of residential property
                      </label>
                      <div className="flex flex-wrap gap-2 justify-start items-center text-[14px]">
                        <button
                          onClick={showFlat}
                          className={`px-4 py-2 border rounded-md ${
                            residentialType === "Flat"
                              ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                              : "bg-white"
                          }`}
                        >
                          Flat/Apartment
                        </button>
                        <button
                          onClick={showVilla}
                          className={`px-4 py-2 border rounded-md ${
                            residentialType === "Villa"
                              ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                              : "bg-white"
                          }`}
                        >
                          House/Villa
                        </button>
                        <button
                          onClick={showPlot}
                          className={`px-4 py-2 border rounded-md ${
                            residentialType === "Plot"
                              ? "bg-[#CBC7FA] text-[#7065F0] font-semibold"
                              : "bg-white"
                          }`}
                        >
                          Plot/Land
                        </button>
                      </div>
                    </div>
                    {/* If Selected type Flat */}
                    <>
                      {isresdentialType.flat ? (
                        <div className="w-fit flex flex-col gap-2 border rounded-md px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Select BHK
                            </label>
                            <div className="flex flex-wrap gap-2 justify-start items-center text-[14px]">
                              <button className="px-4 py-2 border rounded-md focus:ring-blue-500 focus:bg-[#7065F0]">
                                1 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                2 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                3 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                4 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                5 BHK
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Area
                            </label>
                            <div className="flex flex-wrap gap-2">
                              <input
                                type="text"
                                placeholder="Super Built Up Area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                              <input
                                type="text"
                                placeholder="Carpet Area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                    {/* If selected Villa */}
                    <>
                      {isresdentialType.villa ? (
                        <div className="w-fit flex flex-col gap-2 border rounded-md px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Select BHK
                            </label>
                            <div className="flex flex-wrap gap-2 justify-start items-center text-[14px]">
                              <button className="px-4 py-2 border rounded-md">
                                1 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                2 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                3 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                4 BHK
                              </button>
                              <button className="px-4 py-2 border rounded-md">
                                5 BHK
                              </button>
                            </div>
                          </div>
                          <div className="flex  flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Area
                            </label>
                            <div className="flex flex-wrap  gap-2">
                              <input
                                type="text"
                                placeholder="Super Built Up Area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                              <input
                                type="text"
                                placeholder="Carpet Area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                    {/* If Selected Plot/land */}
                    <>
                      {isresdentialType.plot ? (
                        <div className="w-fit flex flex-col gap-2 border rounded-md px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <label>Area</label>
                            <div className="flex flex-wrap gap-2">
                              <input
                                type="text"
                                placeholder="Plot area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                              <input
                                type="text"
                                placeholder="Construction Area"
                                className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                              ></input>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  </div>
                ) : null}
              </>
              {/* IF selected type Commercial */}
              <>
                {isSelectedOpen.commercial ? (
                  <div className="flex flex-col gap-2 text-[14px]">
                    <div className="w-fit flex flex-col gap-2 border rounded-md px-4 py-4">
                      <p>Commercial</p>
                      <div className="flex flex-col gap-2">
                        <label>Area</label>
                        <div className="flex flex-wrap gap-2">
                          <input
                            type="text"
                            placeholder="Plot area"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label>Size</label>
                        <div className="flex flex-wrap gap-2">
                          <input
                            type="text"
                            placeholder="Length"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                          <input
                            type="text"
                            placeholder="Breadth"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
              {/* If Selected type Agriculture */}
              <>
                {isSelectedOpen.agricultural ? (
                  <div className="flex flex-col gap-2 text-[14px]">
                    <div className="w-fit flex flex-col gap-2 border rounded-md px-4 py-4">
                      <p>Agriculture</p>
                      <div className="flex flex-col gap-2">
                        <label>Area</label>
                        <div className="flex flex-wrap gap-2">
                          <input
                            type="text"
                            placeholder="Plot area"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label>Size</label>
                        <div className="flex flex-wrap gap-2">
                          <input
                            type="text"
                            placeholder="Length"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                          <input
                            type="text"
                            placeholder="Breadth"
                            className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </>

              {/* Approved BY Section */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Approved By</label>
                <div className="flex flex-wrap gap-2 justify-start items-center text-[14px]">
                  <button className="px-4 py-2 border rounded-md">JDA</button>
                  <button className="px-4 py-2 border rounded-md">
                    Society
                  </button>
                  <button className="px-4 py-2 border rounded-md">RERA</button>
                  <button className="px-4 py-2 border rounded-md">
                    Panchayat
                  </button>
                </div>
              </div>
              {/* Facing Section */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Facing</label>
                <div className="flex  flex-wrap gap-4 text-[14px]">
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    East
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    West
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    North
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    South
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    North-East
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    North-West
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    South-East
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    South-West
                  </button>
                </div>
              </div>
              {/* Road  */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Road</label>
                <div className="flex  flex-wrap gap-4 text-[14px]">
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    30ft road
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    40ft road
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    60ft road
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    80ft road
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    100ft road
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    200ft road
                  </button>
                </div>
              </div>
              {/* Property Placing */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Placing</label>
                <div className="flex  flex-wrap gap-4 text-[14px]">
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    Corner
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    2nd to corner
                  </button>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    Middle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Advertisement */}
        <div className="w-full md:w-[300px] lg:w-[300px] h-full bg-white rounded-md"></div>
      </div>
    </div>
  );
}
