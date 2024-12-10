"use client";
import { useState } from "react";
export default function page() {

  const data = [
    {
      id: 1,
      image: "/assets/images/home.png",
      title: "Residential plot at Mansarovar, Jaipur",
      price: "₹2050000",
      location: "View on map",
      description:
        "See what our property managers, iid po 0fo ppppf p poosp pfd pdfu ppdop sdpofp pp s p psp jkf isoio oih sf 09sfo sf s osyf s sofyso s s psufps 0fps fps fgfh .... More",
      tags: [
        { icon: "assets/icons/ticlIcon.svg", label: "JDA Approved" },
        { icon: "assets/icons/ticlIcon.svg", label: "RERA Reg." },
      ],
      agentName: "Aanand Mohan",
      phone: "9274659876",
      buttons: [
        {
          icon: "assets/icons/callIcon.svg",
          label: "Call",
          background: "#7065F0",
          color: "white",
        },
        {
          icon: "assets/icons/whatsapp.svg",
          label: "WhatsApp",
          background: "#3CD957",
          color: "white",
        },
      ],
      posted: "Posted 3 days ago",
      wishlistIcon: "/assets/icons/wishlistIcon.svg",
      shareIcon: "/assets/icons/shareIcon.svg",
      locationIcon: "assets/icons/locationIcon.svg",
      phoneIcon: "assets/icons/phoneIcon.svg",
    },
    {
      id: 2,
      image: "/assets/images/home.png",
      title: "Luxury villa in C Scheme, Jaipur",
      price: "₹45000000",
      location: "View on map",
      description:
        "An elegant villa in the prime area of C Scheme with top-notch amenities .... More",
      tags: [
        { icon: "assets/icons/ticlIcon.svg", label: "Luxury Property" },
        { icon: "assets/icons/ticlIcon.svg", label: "Fully Furnished" },
      ],
      agentName: "Rohit Sharma",
      phone: "9898765432",
      buttons: [
        {
          icon: "assets/icons/callIcon.svg",
          label: "Call",
          background: "#7065F0",
          color: "white",
        },
        {
          icon: "assets/icons/whatsapp.svg",
          label: "WhatsApp",
          background: "#3CD957",
          color: "white",
        },
      ],
      posted: "Posted 5 days ago",
      wishlistIcon: "/assets/icons/wishlistIcon.svg",
      shareIcon: "/assets/icons/shareIcon.svg",
      locationIcon: "assets/icons/locationIcon.svg",
      phoneIcon: "assets/icons/phoneIcon.svg",
    },
    {
      id: 3,
      image: "/assets/images/home.png",
      title: "2 BHK Flat in Vaishali Nagar, Jaipur",
      price: "₹3500000",
      location: "View on map",
      description:
        "Affordable 2 BHK flat in Vaishali Nagar with excellent connectivity .... More",
      tags: [
        { icon: "assets/icons/ticlIcon.svg", label: "Ready to Move" },
        { icon: "assets/icons/ticlIcon.svg", label: "Loan Approved" },
      ],
      agentName: "Pooja Verma",
      phone: "9876543210",
      buttons: [
        {
          icon: "assets/icons/callIcon.svg",
          label: "Call",
          background: "#7065F0",
          color: "white",
        },
        {
          icon: "assets/icons/whatsapp.svg",
          label: "WhatsApp",
          background: "#3CD957",
          color: "white",
        },
      ],
      posted: "Posted 1 week ago",
      wishlistIcon: "/assets/icons/wishlistIcon.svg",
      shareIcon: "/assets/icons/shareIcon.svg",
      locationIcon: "assets/icons/locationIcon.svg",
      phoneIcon: "assets/icons/phoneIcon.svg",
    },
  ];
  

  const [activeButton, setActiveButton] = useState("Rent");
  return (
    <div className="h-full w-full flex flex-col p-2">
      {/* Filters */}
      <div className="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div
          className="flex flex-col gap-1 bg-white p-2 rounded-md "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[0.875rem]">
            Location
          </label>
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
          className="flex flex-col gap-1 bg-white p-2 rounded-md  "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[14px]">
            Budget
          </label>
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
      <div className="h-full w-full pt-4">
        <div className="w-full border-b-2 border-[#E0DEF7] flex justify-between flex-wrap items-center">
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
        <div className="h-[calc(100%-42px)] w-full flex flex-col md:flex-row lg:flex-row gap-2 p-2">
          <div className="w-full md:w-[calc(100%-292px)] lg:md:w-[calc(100%-292px)] flex flex-col gap-2 h-full overflow-auto">
            {/* List */}
            {/* <div className="w-full  bg-white rounded-md flex flex-col lg:flex-row gap-2  p-2">
              <div>
                <img
                  src="/assets/images/home.png"
                  className="w-96 h-[212px] sm:w-full "
                />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between">
                  <p className="text-[#000929] font-semibold text-[20px]">
                    Resedential plot at mansarovar, jaipur
                  </p>
                  <div className="flex justify-end gap-2 items-center">
                    <img
                      src="/assets/icons/wishlistIcon.svg"
                      className="h-8 w-8"
                    />
                    <img
                      src="/assets/icons/shareIcon.svg"
                      className="h-9 w-9"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#7065F0] font-bold text-[18px]">
                    ₹2050000
                  </p>
                </div>
                <p className="flex justify-start items-center gap-2 pt-1">
                  <span>
                    <img src="assets/icons/locationIcon.svg" />
                  </span>
                  View on map
                </p>
                <p className="text-[14px] pt-1">
                  See what our property managers, iid po 0fo ppppf p poosp pfd
                  pdfu ppdop sdpofp pp s p psp jkf isoio oih sf 09sfo sf s osyf
                  s sofyso s s psufps 0fps fps fgfh .... More
                </p>
                <div className="flex justify-start items-center gap-2 pt-1 pb-2 border-b text-[14px] font-semibold flex-wrap">
                  <p className="border border-[#7065F0] text-[#7065F0] px-2 py-1 rounded-md flex items-center gap-1 ">
                    <span>
                      {" "}
                      <img src="assets/icons/ticlIcon.svg" />
                    </span>{" "}
                    JDA Approved
                  </p>
                  <p className="border border-[#7065F0] text-[#7065F0] px-2 py-1 rounded-md flex items-center gap-1 ">
                    <span>
                      {" "}
                      <img src="assets/icons/ticlIcon.svg" />
                    </span>{" "}
                    RERA Reg.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between md:justify-between pt-1">
                  <div className="flex flex-wrap justify-start items-center gap-2">
                    <p className="text-[#7F8393]">Aanand Mohan</p>
                    <p className="flex justify-start items-center gap-2 border-x px-2">
                      <span>
                        <img src="assets/icons/phoneIcon.svg" />
                      </span>
                      9274659876
                    </p>
                    <p className="flex justify-start items-center gap-2 bg-[#7065F0] rounded-md text-white px-2 py-1">
                      <span>
                        <img
                          src="assets/icons/callIcon.svg"
                          className="h-4 w-4"
                        />
                      </span>
                      Call
                    </p>
                    <p className="flex justify-start items-center gap-2 bg-[#3CD957] px-2 py-1  text-white rounded-md">
                      <span>
                        <img src="assets/icons/whatsapp.svg" />
                      </span>
                      WhatsApp
                    </p>
                  </div>
                  <p className="text-[14px] text-[#000929]">
                    Posted 3 days ago
                  </p>
                </div>
              </div>
            </div> */}
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white rounded-md flex flex-col  lg:flex-row gap-2 p-2"
              >
                <div>
                  <img
                    src={item.image}
                    className="md:w-60 lg:w-60 h-[212px] w-full"
                    alt="property"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between">
                    <p className="text-[#000929] font-semibold text-[20px]">
                      {item.title}
                    </p>
                    <div className="flex justify-end gap-2 items-center">
                      <img
                        src={item.wishlistIcon}
                        className="h-8 w-8"
                        alt="wishlist"
                      />
                      <img
                        src={item.shareIcon}
                        className="h-9 w-9"
                        alt="share"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#7065F0] font-bold text-[18px]">
                      {item.price}
                    </p>
                  </div>
                  <p className="flex justify-start items-center gap-2 pt-1">
                    <span>
                      <img src={item.locationIcon} alt="location" />
                    </span>
                    {item.location}
                  </p>
                  <p className="text-[14px] pt-1">{item.description}</p>
                  <div className="flex justify-start items-center gap-2 pt-1 pb-2 border-b text-[14px] font-semibold flex-wrap">
                    {item.tags.map((tag, index) => (
                      <p
                        key={index}
                        className="border border-[#7065F0] text-[#7065F0] px-2 py-1 rounded-md flex items-center gap-1"
                      >
                        <span>
                          <img src={tag.icon} alt="tag icon" />
                        </span>
                        {tag.label}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between md:justify-between pt-1">
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      <p className="text-[#7F8393]">{item.agentName}</p>
                      <p className="flex justify-start items-center gap-2 border-x px-2">
                        <span>
                          <img src={item.phoneIcon} alt="phone" />
                        </span>
                        {item.phone}
                      </p>
                      {item.buttons.map((button, index) => (
                        <p
                          key={index}
                          className="flex justify-start items-center gap-2 px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: button.background,
                            color: button.color,
                          }}
                        >
                          <span>
                            <img src={button.icon} alt={button.label} />
                          </span>
                          {button.label}
                        </p>
                      ))}
                    </div>
                    <p className="text-[14px] text-[#000929]">{item.posted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Banner List */}
          <div className="w-full md:w-[300px] lg:w-[300px] h-full p-2 bg-white rounded-md">
            <img src="/assets/images/addImage.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
