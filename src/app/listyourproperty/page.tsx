"use client";
import { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setOwnerName,
  setOwnerPhoneNumber,
  setLookingTo,
  setPropertyType,
  setSelectedType,
  setLength,
  setBreadth,
  setPlotArea,
  setSelectedBHK,
  setSuperBuiltUpArea,
  setConstructionArea,
  setCarpetArea,
  setDescription,
  setPrice,
  setRentPerMonth,
  setApprovalStatus,
  setSelectedFacing,
  setSelectedRoad,
  setSelectedPlacing,
  setLongitude,
  setLatitude,
  addImages,
  removeImage,
  resetFormData,
} from "../../redux/slices/formDataSlice";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

export default function Page() {
  
  const approvalOptions = ["JDA", "Society", "RERA", "Panchayat"];
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData);
  const selectedApprovals = useSelector(
    (state: RootState) => state.formData.property_details.selected_approvals
  );
  const imageMetaData = useSelector(
    (state: RootState) => state.formData.images
  );

  const loading = useSelector((state: RootState) => state.loader.loading);

  const [imageFiles, setImageFiles] = useState<File[]>([]); // Store actual File objects in local state

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const currentImageCount = imageFiles.length;

    if (currentImageCount + files.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }

    const updatedFiles = [...imageFiles, ...files];
    setImageFiles(updatedFiles);

    // Create metadata for Redux (preview URL, name, size)
    const updatedImages = files.map((file) => ({
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file),
    }));

    // Dispatch to Redux to store metadata
    dispatch(addImages(updatedImages));
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = [...imageFiles];
    updatedFiles.splice(index, 1);
    setImageFiles(updatedFiles);

    // Dispatch to Redux to remove image metadata
    dispatch(removeImage(index));
  };

  const handleInputChange = (field: "name" | "phone_number", value: string) => {
    if (field === "name") {
      dispatch(setOwnerName(value));
    } else if (field === "phone_number") {
      dispatch(setOwnerPhoneNumber(value));
    }
  };

  const handlePropertyChange = (
    field:
      | "looking_to"
      | "property_type"
      | "selected_type"
      | "plot_area"
      | "selected_bhk"
      | "super_built_up_area"
      | "construction_area"
      | "carpet_area"
      | "description"
      | "price"
      | "rent_per_month"
      | "length"
      | "breadth",
    value: string
  ) => {
    if (field === "looking_to") {
      dispatch(setLookingTo(value));
    } else if (field === "property_type") {
      dispatch(setPropertyType(value));
    } else if (field === "selected_type") {
      dispatch(setSelectedType(value));
    } else if (field === "plot_area") {
      dispatch(setPlotArea(value));
    } else if (field === "selected_bhk") {
      dispatch(setSelectedBHK(value));
    } else if (field === "super_built_up_area") {
      dispatch(setSuperBuiltUpArea(value));
    } else if (field === "construction_area") {
      dispatch(setConstructionArea(value));
    } else if (field === "carpet_area") {
      dispatch(setCarpetArea(value));
    } else if (field === "description") {
      dispatch(setDescription(value));
    } else if (field === "price") {
      dispatch(setPrice(value));
    } else if (field === "rent_per_month") {
      dispatch(setRentPerMonth(value));
    } else if (field === "length") {
      dispatch(setLength(value));
    } else if (field === "breadth") {
      dispatch(setBreadth(value));
    }
  };

  const handleLocationDetails = (
    field:
      | "selected_facing"
      | "selected_road"
      | "selected_placing"
      | "longitude"
      | "latitude",
    value: string
  ) => {
    if (field === "selected_facing") {
      dispatch(setSelectedFacing(value));
    } else if (field === "selected_road") {
      dispatch(setSelectedRoad(value));
    } else if (field === "selected_placing") {
      dispatch(setSelectedPlacing(value));
    } else if (field === "longitude") {
      dispatch(setLongitude(value));
    } else if (field === "latitude") {
      dispatch(setLatitude(value));
    }
  };

  const handleApprovalSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedApprovals = selectedApprovals.includes(value)
      ? selectedApprovals.filter((approval) => approval !== value)
      : [...selectedApprovals, value];

    dispatch(setApprovalStatus(updatedApprovals));
  };

  const handleSubmitForm = () => {
    const updatedFormData = {
      ...formData, // Assuming formData is from Redux or local state
      images: imageFiles, // Append the imageFiles array
    };

    console.log(updatedFormData);
    toast.success("Listing Created Successfully");
    dispatch(resetFormData());
    setImageFiles([]);
  };

  const router = useRouter();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          <div className="container mx-auto h-[calc(100%-64px)] flex flex-col md:flex-row lg:flex-row gap-2 px-2">
            {/* Form Section */}
            <div className="h-full w-full md:w-[calc(100%-300px)] lg:w-[calc(100%-300px)] flex flex-col bg-white rounded-md overflow-auto">
              <div className="sm:h-fit lg:h-[54px] w-full border border-[#CBC7FA]-b p-4 tex-[14px] lg:text-[18px] font-semibold">
                <p>
                  Your property, your terms—start posting for{" "}
                  <span className="text-[#7065F0]">free</span> today!
                </p>
              </div>
              <div className=" h-[calc(100%-54px)] w-full">
                <div className="w-[90%] mx-auto flex flex-col gap-4 pt-6">
                  {/* Owner Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={formData.owner.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA]  rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border border-[#CBC7FA]-[#6C63FF]"
                    ></input>
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Phone Number"
                      value={formData.owner.phone_number}
                      onChange={(e) =>
                        handleInputChange("phone_number", e.target.value)
                      }
                      className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA]  rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border border-[#CBC7FA]-[#6C63FF]"
                    ></input>
                  </div>
                  {/* Looking for */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Looking to
                    </label>
                    <div className="flex gap-2 justify-start font-semibold items-center text-[14px]">
                      {/* Sale Radio Button */}
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.property_details.looking_to === "Sale"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="lookingTo"
                          value="Sale"
                          checked={
                            formData.property_details.looking_to === "Sale"
                          }
                          onChange={(e) =>
                            handlePropertyChange("looking_to", e.target.value)
                          }
                          className="hidden"
                        />
                        Sale
                      </label>

                      {/* Rent/Lease Radio Button */}
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.property_details.looking_to === "rent"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="lookingTo"
                          value="rent"
                          checked={
                            formData.property_details.looking_to === "rent"
                          }
                          onChange={(e) =>
                            handlePropertyChange("looking_to", e.target.value)
                          }
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
                    <div className="flex gap-2 flex-wrap justify-start items-center font-semibold text-[14px]">
                      <button
                        onClick={() =>
                          handlePropertyChange("property_type", "Residential")
                        }
                        className={`px-4 py-2 border border-[#CBC7FA]  text-sm rounded-md transition-all duration-200 ease-in-out ${
                          formData.property_details.property_type ===
                          "Residential"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        onClick={() =>
                          handlePropertyChange("property_type", "Commercial")
                        }
                        className={`px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.property_details.property_type ===
                          "Commercial"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        Commercial
                      </button>
                      <button
                        onClick={() =>
                          handlePropertyChange("property_type", "Agriculture")
                        }
                        className={`px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.property_details.property_type ===
                          "Agriculture"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        Agriculture
                      </button>
                    </div>
                  </div>

                  {/* If Selected type Resdential */}
                  <>
                    {formData.property_details.property_type ===
                    "Residential" ? (
                      <div className="flex flex-col gap-2 text-[14px] font-semibold">
                        <div className="flex flex-col gap-2">
                          <label className="text-[14px] font-medium">
                            Type of Residential property
                          </label>
                          <div className="flex flex-wrap gap-2 justify-start items-center text-[14px]">
                            <button
                              onClick={() =>
                                handlePropertyChange("selected_type", "Flat")
                              }
                              className={`px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Flat"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              Flat/Apartment
                            </button>
                            <button
                              onClick={() =>
                                handlePropertyChange("selected_type", "Villa")
                              }
                              className={`px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Villa"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              House/Villa
                            </button>
                            <button
                              onClick={() =>
                                handlePropertyChange("selected_type", "Plot")
                              }
                              className={`px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Plot"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              Plot/Land
                            </button>
                          </div>
                        </div>
                        {/* If Selected type Flat */}
                        <>
                          {formData.property_details.selected_type ===
                          "Flat" ? (
                            <div className="w-fit flex flex-col gap-2 border border-[#CBC7FA] rounded-md px-4 py-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Select BHK
                                </label>
                                <div className="flex flex-wrap gap-2 font-semibold justify-start items-center text-[14px]">
                                  {[
                                    "1 BHK",
                                    "2 BHK",
                                    "3 BHK",
                                    "4 BHK",
                                    "5 BHK",
                                  ].map((bhk, index) => (
                                    <label
                                      key={index}
                                      className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                        formData.property_details
                                          .selected_bhk === bhk
                                          ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                          : "bg-white text-[#7F8393]"
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        value={bhk}
                                        checked={
                                          formData.property_details
                                            .selected_bhk === bhk
                                        }
                                        onChange={() => {
                                          handlePropertyChange(
                                            "selected_bhk",
                                            bhk
                                          );
                                        }}
                                        className="hidden"
                                      />
                                      {bhk}
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Area
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {/* Super Built-Up Area */}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Super Built-Up Area"
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                      value={
                                        formData.property_details
                                          .super_built_up_area
                                      }
                                      onChange={(e) =>
                                        handlePropertyChange(
                                          "super_built_up_area",
                                          e.target.value
                                        )
                                      }
                                    />
                                    <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                  {/* Carpet Area */}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Carpet Area"
                                      value={
                                        formData.property_details.carpet_area
                                      }
                                      onChange={(e) => {
                                        handlePropertyChange(
                                          "carpet_area",
                                          e.target.value
                                        );
                                      }}
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                    />
                                    <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </>
                        {/* If selected Villa */}
                        <>
                          {formData.property_details.selected_type ===
                          "Villa" ? (
                            <div className="w-fit flex flex-col gap-2 border border-[#CBC7FA] rounded-md px-4 py-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Select BHK
                                </label>
                                <div className="flex flex-wrap gap-2 font-semibold justify-start items-center text-[14px]">
                                  {[
                                    "1 BHK",
                                    "2 BHK",
                                    "3 BHK",
                                    "4 BHK",
                                    "5 BHK",
                                  ].map((bhk, index) => (
                                    <label
                                      key={index}
                                      className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                        formData.property_details
                                          .selected_bhk === bhk
                                          ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                          : "bg-white text-[#7F8393]"
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        value={bhk}
                                        checked={
                                          formData.property_details
                                            .selected_bhk === bhk
                                        }
                                        onChange={() => {
                                          handlePropertyChange(
                                            "selected_bhk",
                                            bhk
                                          );
                                        }}
                                        className="hidden"
                                      />
                                      {bhk}
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Area
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {/* Super Built-Up Area */}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Super Built-Up Area"
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                      value={
                                        formData.property_details
                                          .super_built_up_area
                                      }
                                      onChange={(e) =>
                                        handlePropertyChange(
                                          "super_built_up_area",
                                          e.target.value
                                        )
                                      }
                                    />
                                    <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                  {/* Carpet Area */}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Carpet Area"
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                      value={
                                        formData.property_details.carpet_area
                                      }
                                      onChange={(e) =>
                                        handlePropertyChange(
                                          "carpet_area",
                                          e.target.value
                                        )
                                      }
                                    />
                                    <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Plot Size
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {/* Length */}
                                  <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Length"
                                      value={formData.property_details.length}
                                      onChange={(e) => {
                                        handlePropertyChange(
                                          "length",
                                          e.target.value
                                        );
                                      }}
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                    />
                                    <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                  {/*Breadth*/}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Breadth"
                                      value={formData.property_details.breadth}
                                      onChange={(e) => {
                                        handlePropertyChange(
                                          "breadth",
                                          e.target.value
                                        );
                                      }}
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                    />
                                    <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </>
                        {/* If Selected Plot/land */}
                        <>
                          {formData.property_details.selected_type ===
                          "Plot" ? (
                            <div className="w-fit flex flex-col gap-2 border border-[#CBC7FA] rounded-md px-4 py-4">
                              <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium">
                                  Plot Size
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {/* Super Built-Up Area */}
                                  <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Plot Area"
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                      value={
                                        formData.property_details.plot_area
                                      }
                                      onChange={(e) => {
                                        handlePropertyChange(
                                          "plot_area",
                                          e.target.value
                                        );
                                      }}
                                    />
                                    <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
                                  {/* Carpet Area */}
                                  <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                    <input
                                      type="text"
                                      placeholder="Construction Area"
                                      className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                      value={
                                        formData.property_details
                                          .construction_area
                                      }
                                      onChange={(e) => {
                                        handlePropertyChange(
                                          "construction_area",
                                          e.target.value
                                        );
                                      }}
                                    />
                                    <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                      <option value="sq_ft">sq.ft</option>
                                      <option value="sq_yd">sq.yd</option>
                                      <option value="sq_m">sq.m</option>
                                      <option value="sq_gaz">sq.gaz</option>
                                    </select>
                                  </div>
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
                    {formData.property_details.property_type ===
                    "Commercial" ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 text-[14px]">
                          <label className="text-[14px] font-medium">
                            Type of Commercial Property
                          </label>
                          <div className="flex flex-wrap gap-4 text-[14px] font-semibold">
                            {/* Custom styled radio buttons using Tailwind */}
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Shop"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value="Shop"
                                checked={
                                  formData.property_details.selected_type ===
                                  "Shop"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Shop
                            </label>
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Factory"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value="Factory"
                                checked={
                                  formData.property_details.selected_type ===
                                  "Factory"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Factory
                            </label>
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Shade"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value="Shade"
                                checked={
                                  formData.property_details.selected_type ===
                                  "Shade"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Shade
                            </label>
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Plot/Land"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value="Plot/Land"
                                checked={
                                  formData.property_details.selected_type ===
                                  "Plot/Land"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Plot/Land
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 text-[14px]">
                          <div className="w-fit flex flex-col gap-2 border border-[#CBC7FA] rounded-md px-4 py-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-[14px] font-medium">
                                Plot Area
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {/* Plot area */}
                                <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Plot area"
                                    className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                    value={formData.property_details.plot_area}
                                    onChange={(e) =>
                                      handlePropertyChange(
                                        "plot_area",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                    <option value="sq_ft">sq.ft</option>
                                    <option value="sq_yd">sq.yd</option>
                                    <option value="sq_m">sq.m</option>
                                    <option value="sq_gaz">sq.gaz</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[14px] font-medium">
                                Size
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {/* Length */}
                                <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Length"
                                    value={formData.property_details.length}
                                    onChange={(e) => {
                                      handlePropertyChange(
                                        "length",
                                        e.target.value
                                      );
                                    }}
                                    className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                  />
                                  <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                    <option value="sq_ft">sq.ft</option>
                                    <option value="sq_yd">sq.yd</option>
                                    <option value="sq_m">sq.m</option>
                                    <option value="sq_gaz">sq.gaz</option>
                                  </select>
                                </div>
                                {/* breadth */}
                                <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                  <input
                                    type="text"
                                    placeholder="Breadth"
                                    value={formData.property_details.breadth}
                                    onChange={(e) => {
                                      handlePropertyChange(
                                        "breadth",
                                        e.target.value
                                      );
                                    }}
                                    className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                  />
                                  <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                    <option value="sq_ft">sq.ft</option>
                                    <option value="sq_yd">sq.yd</option>
                                    <option value="sq_m">sq.m</option>
                                    <option value="sq_gaz">sq.gaz</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                  {/* If Selected type Agriculture */}
                  <>
                    {formData.property_details.property_type ===
                    "Agriculture" ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 text-[14px] font-semibold">
                          <label className="text-[14px] font-medium">
                            Type of Agriculture Property
                          </label>
                          <div className="flex flex-wrap gap-4 text-[14px] font-semibold">
                            {/* Custom styled radio buttons using Tailwind */}
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "FarmHouse"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value=" Farm House"
                                checked={
                                  formData.property_details.selected_type ===
                                  "FarmHouse"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Farm House
                            </label>
                            <label
                              className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                                formData.property_details.selected_type ===
                                "Land"
                                  ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                                  : "bg-white text-[#7F8393]"
                              }`}
                            >
                              <input
                                type="radio"
                                name="selectedType"
                                value="Land"
                                checked={
                                  formData.property_details.selected_type ===
                                  "Land"
                                }
                                onChange={(e) =>
                                  handlePropertyChange(
                                    "selected_type",
                                    e.target.value
                                  )
                                }
                                className="hidden"
                              />
                              Land
                            </label>
                          </div>
                        </div>
                        <div className="w-fit flex flex-col gap-2 border border-[#CBC7FA] rounded-md px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Plot Area
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {/* Plot area */}
                              <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                <input
                                  type="text"
                                  placeholder="Plot area"
                                  className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                  value={formData.property_details.plot_area}
                                  onChange={(e) => {
                                    handlePropertyChange(
                                      "plot_area",
                                      e.target.value
                                    );
                                  }}
                                />
                                <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                  <option value="sq_ft">sq.ft</option>
                                  <option value="sq_yd">sq.yd</option>
                                  <option value="sq_m">sq.m</option>
                                  <option value="sq_gaz">sq.gaz</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium">
                              Size
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {/* Length */}
                              <div className="flex items-center border border-[#CBC7FA] rounded-md">
                                <input
                                  type="text"
                                  placeholder="Length"
                                  value={formData.property_details.length}
                                  onChange={(e) => {
                                    handlePropertyChange(
                                      "length",
                                      e.target.value
                                    );
                                  }}
                                  className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                />
                                <select className="px-4 py-2 text-[14px] outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                  <option value="sq_ft">sq.ft</option>
                                  <option value="sq_yd">sq.yd</option>
                                  <option value="sq_m">sq.m</option>
                                  <option value="sq_gaz">sq.gaz</option>
                                </select>
                              </div>
                              {/* breadth */}
                              <div className="flex items-center border border-[#CBC7FA]  rounded-md">
                                <input
                                  type="text"
                                  placeholder="Breadth"
                                  value={formData.property_details.breadth}
                                  onChange={(e) => {
                                    handlePropertyChange(
                                      "breadth",
                                      e.target.value
                                    );
                                  }}
                                  className="w-[200px] px-4 py-2 text-[14px] outline-none  rounded-md "
                                />
                                <select className="px-4 py-2 text-[14px]  outline-none rounded-r-md bg-[#E0DEF7] text-[#7065F0]">
                                  <option value="sq_ft">sq.ft</option>
                                  <option value="sq_yd">sq.yd</option>
                                  <option value="sq_m">sq.m</option>
                                  <option value="sq_gaz">sq.gaz</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>

                  {/* Approved BY Section */}
                  <div className="flex flex-wrap gap-2 justify-start font-semibold items-center text-[14px]">
                    {approvalOptions.map((option) => (
                      <label
                        key={option}
                        role="checkbox"
                        aria-checked={selectedApprovals.includes(option)}
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          selectedApprovals.includes(option)
                            ? "bg-[#E0DEF7] text-[#7065F0]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedApprovals.includes(option)}
                          onChange={handleApprovalSelect}
                          className="hidden"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {/* Facing Section */}
                  <div className="flex flex-col gap-2 text-[14px] font-semibold">
                    <label className="text-[14px] font-medium">Facing</label>
                    <div className="flex flex-wrap gap-4 font-semibold text-[14px]">
                      {/* Custom styled radio buttons using Tailwind */}
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing === "East"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="East"
                          checked={
                            formData.location_details.selected_facing === "East"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        East
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing === "West"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="West"
                          checked={
                            formData.location_details.selected_facing === "West"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        West
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing === "North"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="North"
                          checked={
                            formData.location_details.selected_facing ===
                            "North"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        North
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing === "South"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="South"
                          checked={
                            formData.location_details.selected_facing ===
                            "South"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        South
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing ===
                          "North-East"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="North-East"
                          checked={
                            formData.location_details.selected_facing ===
                            "North-East"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        North-East
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing ===
                          "North-West"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="North-West"
                          checked={
                            formData.location_details.selected_facing ===
                            "North-West"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        North-West
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing ===
                          "South-East"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="South-East"
                          checked={
                            formData.location_details.selected_facing ===
                            "South-East"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        South-East
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_facing ===
                          "South-West"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="facing"
                          value="South-West"
                          checked={
                            formData.location_details.selected_facing ===
                            "South-West"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_facing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        South-West
                      </label>
                    </div>
                  </div>
                  {/* Road  */}
                  <div className="flex flex-col gap-2 text-[14px] font-semibold">
                    <label className="text-[14px] font-medium">Road</label>
                    <div className="flex flex-wrap gap-4 text-[14px]">
                      {/* Custom styled radio buttons using Tailwind */}
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "30ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="30ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "30ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        30ft road
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "40ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="40ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "40ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        40ft road
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "60ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="60ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "60ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        60ft road
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "80ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="80ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "80ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        80ft road
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "100ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="100ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "100ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        100ft road
                      </label>

                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_road ===
                          "200ft road"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="road"
                          value="200ft road"
                          checked={
                            formData.location_details.selected_road ===
                            "200ft road"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_road",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        200ft road
                      </label>
                    </div>
                  </div>
                  {/* Property Placing */}
                  <div className="flex flex-col gap-2 text-[14px] font-semibold">
                    <label className="text-[14px] font-medium">Placing</label>
                    <div className="flex flex-wrap gap-4 text-[14px]">
                      {/* Custom styled radio buttons using Tailwind */}
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_placing ===
                          "Corner"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="placing"
                          value="Corner"
                          checked={
                            formData.location_details.selected_placing ===
                            "Corner"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_placing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        Corner
                      </label>
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_placing ===
                          "2nd to corner"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="placing"
                          value="2nd to corner"
                          checked={
                            formData.location_details.selected_placing ===
                            "2nd to corner"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_placing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        2nd to corner
                      </label>
                      <label
                        className={`cursor-pointer px-4 py-2 border border-[#CBC7FA] rounded-md transition-all duration-200 ease-in-out ${
                          formData.location_details.selected_placing ===
                          "Middle"
                            ? "bg-[#E0DEF7] text-[#7065F0] border border-[#CBC7FA]-[#CBC7FA]"
                            : "bg-white text-[#7F8393]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="placing"
                          value="Middle"
                          checked={
                            formData.location_details.selected_placing ===
                            "Middle"
                          }
                          onChange={(e) => {
                            handleLocationDetails(
                              "selected_placing",
                              e.target.value
                            );
                          }}
                          className="hidden"
                        />
                        Middle
                      </label>
                    </div>
                  </div>
                  {/* Images Upload */}
                  <div className="w-full h-auto">
                    <div className="border-dashed border-[#CBC7FA] rounded-lg p-6 bg-gray-100 text-center hover:bg-gray-200 cursor-pointer">
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
                      {imageMetaData.map((image, index) => (
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

                  {/* Price */}
                  <div className="flex flex-wrap items-center justify-start gap-2">
                    <div className="w-fit flex flex-col gap-2">
                      <label className="text-[14px] font-medium">
                        Rent Per Month
                      </label>
                      <div className="flex items-center border border-[#CBC7FA] rounded-md">
                        <input
                          type="text"
                          value={formData.property_details.price}
                          onChange={(e) => {
                            handlePropertyChange("price", e.target.value);
                          }}
                          placeholder="Enter Amount"
                          className="w-[220px] px-4 py-2 text-[14px] outline-none   rounded-md "
                        />
                        <span className="px-4 py-2 text-[14px]   rounded-md bg-white">
                          ₹
                        </span>
                      </div>
                    </div>
                    <div className="w-fit flex flex-col gap-2">
                      <label className="text-[14px] font-medium">Price</label>
                      <div className="flex items-center border border-[#CBC7FA] rounded-md">
                        <input
                          type="text"
                          value={formData.property_details.rent_per_month}
                          onChange={(e) => {
                            handlePropertyChange(
                              "rent_per_month",
                              e.target.value
                            );
                          }}
                          placeholder="Enter Amount"
                          className="w-[220px] px-4 py-2 text-[14px] outline-none  rounded-md"
                        />
                        <span className="px-4 py-2 text-[14px]  rounded-md bg-white">
                          ₹
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Coordinates */}
                  <div className="flex flex-wrap items-center justify-start gap-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-medium">
                        Latitude
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Latitude..."
                        value={formData.location_details.latitude}
                        onChange={(e) => {
                          handleLocationDetails("latitude", e.target.value);
                        }}
                        className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#CBC7FA]-[#6C63FF]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-medium">
                        Longitude
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Longitude..."
                        value={formData.location_details.longitude}
                        onChange={(e) => {
                          handleLocationDetails("longitude", e.target.value);
                        }}
                        className="w-[250px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#CBC7FA]-[#6C63FF]"
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium">
                      Description (Optional)
                    </label>
                    <textarea
                      placeholder="Enter Your Description"
                      className="w-[250px] md:w-[400px] lg:w-[500px] px-4 py-2 text-[14px] outline-none border border-[#CBC7FA] rounded-md focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                      rows={4}
                      value={formData.property_details.description}
                      onChange={(e) => {
                        handlePropertyChange("description", e.target.value);
                      }}
                    ></textarea>
                  </div>
                  {/* Submit Form Or Reset  */}
                  <div className="w-full flex  items-center gap-2 pb-6">
                    <button
                      onClick={() => dispatch(resetFormData())}
                      className="w-[40%] px-4 py-2 border border-[#CBC7FA]"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleSubmitForm}
                      className="flex-1 px-4 py-2 border border-[#CBC7FA] rounded-md bg-[#7065F0] hover:bg-[#5d4ff1] text-white"
                    >
                      Create Listing
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Banner Advertisement */}
            <div className="w-full md:w-[300px] lg:w-[300px] h-full bg-white rounded-md"></div>
          </div>
        </div>
      )}
    </>
  );
}
