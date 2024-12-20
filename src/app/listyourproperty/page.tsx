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

interface Image {
  file: File;
  preview: string;
}

export default function page() {
  const [lookingTo, setLookingTo] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [residentialType, setResidentialType] = useState("");
  const [selectedFacing, setSelectedFacing] = useState("");
  const [selectedApprovals, setSelectedApprovals] = useState([]);

  const handleApprovalSelect = (event: any) => {
    const value: any = event.target.value;
    setSelectedApprovals(
      (prev: any) =>
        prev.includes(value)
          ? prev.filter((item: any) => item !== value) // Unselect if already selected
          : [...prev, value] // Select if not already selected
    );
  };

  const handleFacingSelect = (event: any) => {
    setSelectedFacing(event.target.value);
  };

  const isSelectedOpen = useSelector((state: RootState) => state.selectType);
  const isresdentialType = useSelector(
    (state: RootState) => state.resdentialType
  );

  const [images, setImages] = useState<Image[]>([]);
  const [selectedPlacing, setSelectedPlacing] = useState("");
  const [selectedRoad, setSelectedRoad] = useState("");

  const handleRoadSelect = (event: any) => {
    setSelectedRoad(event.target.value);
  };

  const handlePlacingSelect = (event: any) => {
    setSelectedPlacing(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    if (images.length + fileArray.length > 5) {
      alert("You can upload up to 5 images only.");
      return;
    }

    const validImages = fileArray.filter((file) =>
      file.type.startsWith("image/")
    );

    const newImages = validImages.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

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
                  {/* Sale Radio Button */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      lookingTo === "Sale"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="lookingTo"
                      value="Sale"
                      checked={lookingTo === "Sale"}
                      onChange={() => setLookingTo("Sale")}
                      className="hidden"
                    />
                    Sale
                  </label>

                  {/* Rent/Lease Radio Button */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      lookingTo === "Rent"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="lookingTo"
                      value="Rent"
                      checked={lookingTo === "Rent"}
                      onChange={() => setLookingTo("Rent")}
                      className="hidden"
                    />
                    Rent/Lease
                  </label>
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
                    className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      propertyType === "Residential"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    onClick={showCommercial}
                    className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      propertyType === "Commercial"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white"
                    }`}
                  >
                    Commercial
                  </button>
                  <button
                    onClick={showAgriculture}
                    className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      propertyType === "Agriculture"
                        ? "bg-blue-500 text-white border-blue-500"
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
                          className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                            residentialType === "Flat"
                              ? "bg-blue-500 text-white border-blue-500"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Flat/Apartment
                        </button>
                        <button
                          onClick={showVilla}
                          className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                            residentialType === "Villa"
                              ? "bg-blue-500 text-white border-blue-500"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          House/Villa
                        </button>
                        <button
                          onClick={showPlot}
                          className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                            residentialType === "Plot"
                              ? "bg-blue-500 text-white border-blue-500"
                              : "hover:bg-gray-100"
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
                  {/* JDA Checkbox */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedApprovals.includes("JDA")
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value="JDA"
                      checked={selectedApprovals.includes("JDA")}
                      onChange={handleApprovalSelect}
                      className="hidden"
                    />
                    JDA
                  </label>

                  {/* Society Checkbox */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedApprovals.includes("Society")
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value="Society"
                      checked={selectedApprovals.includes("Society")}
                      onChange={handleApprovalSelect}
                      className="hidden"
                    />
                    Society
                  </label>

                  {/* RERA Checkbox */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedApprovals.includes("RERA")
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value="RERA"
                      checked={selectedApprovals.includes("RERA")}
                      onChange={handleApprovalSelect}
                      className="hidden"
                    />
                    RERA
                  </label>

                  {/* Panchayat Checkbox */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedApprovals.includes("Panchayat")
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value="Panchayat"
                      checked={selectedApprovals.includes("Panchayat")}
                      onChange={handleApprovalSelect}
                      className="hidden"
                    />
                    Panchayat
                  </label>
                </div>

                {/* Display Selected Values */}
                <div className="mt-2">
                  <strong>Selected Approvals: </strong>
                  {selectedApprovals.join(", ")}
                </div>
              </div>
              {/* Facing Section */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Facing</label>
                <div className="flex flex-wrap gap-4 text-[14px]">
                  {/* Custom styled radio buttons using Tailwind */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "East"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="East"
                      checked={selectedFacing === "East"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    East
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "West"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="West"
                      checked={selectedFacing === "West"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    West
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "North"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="North"
                      checked={selectedFacing === "North"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    North
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "South"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="South"
                      checked={selectedFacing === "South"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    South
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "North-East"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="North-East"
                      checked={selectedFacing === "North-East"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    North-East
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "North-West"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="North-West"
                      checked={selectedFacing === "North-West"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    North-West
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "South-East"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="South-East"
                      checked={selectedFacing === "South-East"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    South-East
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedFacing === "South-West"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="facing"
                      value="South-West"
                      checked={selectedFacing === "South-West"}
                      onChange={handleFacingSelect}
                      className="hidden"
                    />
                    South-West
                  </label>
                </div>
              </div>
              {/* Road  */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Road</label>
                <div className="flex flex-wrap gap-4 text-[14px]">
                  {/* Custom styled radio buttons using Tailwind */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "30ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="30ft road"
                      checked={selectedRoad === "30ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    30ft road
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "40ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="40ft road"
                      checked={selectedRoad === "40ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    40ft road
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "60ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="60ft road"
                      checked={selectedRoad === "60ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    60ft road
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "80ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="80ft road"
                      checked={selectedRoad === "80ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    80ft road
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "100ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="100ft road"
                      checked={selectedRoad === "100ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    100ft road
                  </label>

                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedRoad === "200ft road"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="road"
                      value="200ft road"
                      checked={selectedRoad === "200ft road"}
                      onChange={handleRoadSelect}
                      className="hidden"
                    />
                    200ft road
                  </label>
                </div>
              </div>
              {/* Property Placing */}
              <div className="flex flex-col gap-2 text-[14px]">
                <label className="text-[14px] font-medium">Placing</label>
                <div className="flex flex-wrap gap-4 text-[14px]">
                  {/* Custom styled radio buttons using Tailwind */}
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedPlacing === "Corner"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="placing"
                      value="Corner"
                      checked={selectedPlacing === "Corner"}
                      onChange={handlePlacingSelect}
                      className="hidden"
                    />
                    Corner
                  </label>
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedPlacing === "2nd to corner"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="placing"
                      value="2nd to corner"
                      checked={selectedPlacing === "2nd to corner"}
                      onChange={handlePlacingSelect}
                      className="hidden"
                    />
                    2nd to corner
                  </label>
                  <label
                    className={`cursor-pointer px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${
                      selectedPlacing === "Middle"
                        ? "bg-blue-500 text-white border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="placing"
                      value="Middle"
                      checked={selectedPlacing === "Middle"}
                      onChange={handlePlacingSelect}
                      className="hidden"
                    />
                    Middle
                  </label>
                </div>
              </div>
              {/* Images Upload */}
              <div className="w-full h-auto">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-100 text-center hover:bg-gray-200 cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label htmlFor="imageUpload" className="block">
                    Drag and drop images here or click to upload
                  </label>
                  <p className="text-sm text-gray-500">
                    You can upload up to 5 images
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt={`Uploaded preview ${index + 1}`}
                        className="w-full h-52 object-cover rounded-md"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Submit Form Or Reset  */}
              <div className="w-full flex justify-center items-center gap-2 pb-6">
                <button className="px-4 py-2 border">Reset</button>
                <button className="px-4 py-2 border">Create Listing</button>
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
