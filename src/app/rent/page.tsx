"use client";

// import { useRouter } from 'next/router';
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  // const router = useRouter();
  const [activeButton, setActiveButton] = useState<string>("All");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [isBudgetOpen, setIsBudgetOpen] = useState<boolean>(false);
  const [selectedBudgetOption, setSelectedBudgetOption] = useState<string>("");
  const [filteredBudgetOptions, setFilteredBudgetOptions] = useState<string[]>(
    []
  );
  const [budgetSearchInput, setBudgetSearchInput] = useState<string>("");

  const options: string[] = [
    "Malviya Nagar",
    "Vaishali Nagar",
    "Jagatpura",
    "Mansarovar",
    "C-Scheme",
    "Tonk Road",
    "Raja Park",
    "Jhotwara",
    "Shyam Nagar",
    "Adarsh Nagar",
    "Bani Park",
    "Civil Lines",
    "Sanganer",
    "Ajmer Road",
    "Vidhyadhar Nagar",
    "Pratap Nagar",
    "Tilak Nagar",
    "Sindhi Camp",
    "Amer",
    "Gopalpura",
  ];
  const budgetOptions: string[] = [
    "₹10 Lakh",
    "₹20 Lakh",
    "₹30 Lakh",
    "₹40 Lakh",
    "₹50 Lakh",
    "₹60 Lakh",
    "₹70 Lakh",
    "₹80 Lakh",
    "₹90 Lakh",
    "₹1 Crore",
    "₹1.5 Crore",
    "₹2 Crore",
    "₹2.5 Crore",
    "₹3 Crore",
    "₹3.5 Crore",
    "₹4 Crore",
    "₹4.5 Crore",
    "₹5 Crore",
  ];

  interface Property {
    id: number;
    image: string;
    title: string;
    price: string;
    location: string;
    description: string;
    tags: { icon: string; label: string }[];
    agentName: string;
    phone: string;
    buttons: {
      icon: string;
      label: string;
      background: string;
      color: string;
    }[];
    posted: string;
    wishlistIcon: string;
    shareIcon: string;
    locationIcon: string;
    phoneIcon: string;
  }
  const data: Property[] = [
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
    {
      id: 4,
      image: "/assets/images/home.png",
      title: "Commercial space at MI Road, Jaipur",
      price: "₹8000000",
      location: "View on map",
      description:
        "Prime commercial space at MI Road, perfect for offices or retail .... More",
      tags: [
        { icon: "assets/icons/ticlIcon.svg", label: "High Footfall Area" },
        { icon: "assets/icons/ticlIcon.svg", label: "Prime Location" },
      ],
      agentName: "Suresh Gupta",
      phone: "9123456789",
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
      posted: "Posted 10 days ago",
      wishlistIcon: "/assets/icons/wishlistIcon.svg",
      shareIcon: "/assets/icons/shareIcon.svg",
      locationIcon: "assets/icons/locationIcon.svg",
      phoneIcon: "assets/icons/phoneIcon.svg",
    },
    {
      id: 5,
      image: "/assets/images/home.png",
      title: "Farmhouse at Ajmer Road, Jaipur",
      price: "₹25000000",
      location: "View on map",
      description:
        "Beautiful farmhouse at Ajmer Road, ideal for weekend getaways .... More",
      tags: [
        { icon: "assets/icons/ticlIcon.svg", label: "Green Area" },
        { icon: "assets/icons/ticlIcon.svg", label: "Fully Equipped" },
      ],
      agentName: "Nidhi Mehta",
      phone: "9312345678",
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
      posted: "Posted 2 weeks ago",
      wishlistIcon: "/assets/icons/wishlistIcon.svg",
      shareIcon: "/assets/icons/shareIcon.svg",
      locationIcon: "assets/icons/locationIcon.svg",
      phoneIcon: "assets/icons/phoneIcon.svg",
    },
  ];
  const filteredOptions: string[] = options.filter((option) =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  console.log(selectedOption)
  console.log(selectedBudgetOption)
  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setSearchInput(option);
    setIsOpen(false);
  };

  const handleBudgetOptionClick = (option: string): void => {
    setSelectedBudgetOption(option);
    setBudgetSearchInput(option);
    setIsBudgetOpen(false);
  };

  const handleBudgetSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setBudgetSearchInput(value);

    const filteredOptions: string[] = budgetOptions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredOptions.length === 0 && value.trim() !== "") {
      setFilteredBudgetOptions(["No Results Found"]);
    } else {
      setFilteredBudgetOptions(filteredOptions);
    }

    setIsBudgetOpen(true);
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Filters */}
      <div className=" h-full md:h-[64px] lg:h-[64px] flex-wrap  bg-[#7065F0] flex gap-2 px-4 py-2 items-center justify-start">
        <div className="container m-auto flex gap-2 justify-start items-center">
          <div
            className="h-[38px] w-40  flex flex-col items-center justify-center px-2 py-2 bg-white  rounded-md relative"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
          >
            <div className="w-fit flex">
              <input
                className="outline-none w-[70%] flex-1 text-[#000929] text-[14px] font-semibold"
                type="text"
                placeholder="Location..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setIsOpen(true);
                }}
              />
              <img
                src="/assets/icons/arrowDown.svg"
                className={`transform transition-transform duration-300 cursor-pointer ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            {isOpen && filteredOptions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#E0DEF7] rounded-md mt-1 h-[300px] transition-opacity duration-300 opacity-100 z-10 overflow-auto">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 hover:bg-[#E0DEF7] text-[#000929] cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="h-[38px] w-40  flex flex-col items-center justify-center gap-1 bg-white p-2 rounded-md relative"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
          >
            <div className="flex items-center">
              <input
                className="outline-none w-[70%] flex-1 py-1 text-[#000929] text-[14px] font-semibold"
                type="text"
                placeholder="Search Budget"
                value={budgetSearchInput}
                onChange={handleBudgetSearchChange}
              />
              <img
                src="/assets/icons/arrowDown.svg"
                className={`transform transition-transform duration-300 cursor-pointer ${
                  isBudgetOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsBudgetOpen(!isBudgetOpen)}
              />
            </div>
            {isBudgetOpen && filteredBudgetOptions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#E0DEF7] rounded-md mt-1 h-[300px] transition-opacity duration-300 opacity-100 z-10 overflow-auto">
                {filteredBudgetOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-1 ${
                      option === "No Results Found"
                        ? "text-[#a0a0a0] cursor-default"
                        : "hover:bg-[#E0DEF7] text-[#000929] cursor-pointer"
                    }`}
                    onClick={() =>
                      option !== "No Results Found" &&
                      handleBudgetOptionClick(option)
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="h-[38px] w-40  flex flex-col items-center justify-center gap-1 bg-white p-2 rounded-md relative"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
          >
            <div className="flex items-center">
              <input
                className="outline-none w-[70%] flex-1 py-1 text-[#000929] text-[14px] font-semibold"
                type="text"
                placeholder="Search Budget"
                value={budgetSearchInput}
                onChange={handleBudgetSearchChange}
              />
              <img
                src="/assets/icons/arrowDown.svg"
                className={`transform transition-transform duration-300 cursor-pointer ${
                  isBudgetOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsBudgetOpen(!isBudgetOpen)}
              />
            </div>
            {isBudgetOpen && filteredBudgetOptions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#E0DEF7] rounded-md mt-1 h-[300px] transition-opacity duration-300 opacity-100 z-10 overflow-auto">
                {filteredBudgetOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-1 ${
                      option === "No Results Found"
                        ? "text-[#a0a0a0] cursor-default"
                        : "hover:bg-[#E0DEF7] text-[#000929] cursor-pointer"
                    }`}
                    onClick={() =>
                      option !== "No Results Found" &&
                      handleBudgetOptionClick(option)
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="h-[38px] w-40  flex flex-col items-center justify-center gap-1 bg-white p-2 rounded-md relative"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
          >
            <div className="flex items-center">
              <input
                className="outline-none w-[70%] flex-1 py-1 text-[#000929] text-[14px] font-semibold"
                type="text"
                placeholder="Search Budget"
                value={budgetSearchInput}
                onChange={handleBudgetSearchChange}
              />
              <img
                src="/assets/icons/arrowDown.svg"
                className={`transform transition-transform duration-300 cursor-pointer ${
                  isBudgetOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => setIsBudgetOpen(!isBudgetOpen)}
              />
            </div>
            {isBudgetOpen && filteredBudgetOptions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-[#E0DEF7] rounded-md mt-1 h-[300px] transition-opacity duration-300 opacity-100 z-10 overflow-auto">
                {filteredBudgetOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-2 py-1 ${
                      option === "No Results Found"
                        ? "text-[#a0a0a0] cursor-default"
                        : "hover:bg-[#E0DEF7] text-[#000929] cursor-pointer"
                    }`}
                    onClick={() =>
                      option !== "No Results Found" &&
                      handleBudgetOptionClick(option)
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="container m-auto h-[calc(100%-68px)]  w-full mt-2 overflow-auto">
        <div className="w-full border-b-2 border-[#E0DEF7] flex justify-between flex-wrap items-center gap-2">
          <div className="md:px-4 lg:px-4">
            <button
              className={`px-6 py-2 font-semibold rounded-tl-md ${
                activeButton === "All"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7]"
              }`}
              onClick={() => setActiveButton("All")}
            >
              All
            </button>
            <button
              className={`px-6 py-2 font-semibold  ${
                activeButton === "Residential"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7]"
              }`}
              onClick={() => setActiveButton("Residential")}
            >
              Residential
            </button>
            <button
              className={`px-6 py-2 font-semibold  ${
                activeButton === "Commercial"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7] "
              }`}
              onClick={() => setActiveButton("Commercial")}
            >
              Commercial
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-tr-md  ${
                activeButton === "Agriculture"
                  ? "bg-[#E9E8FF] text-[#7065F0] border-2 border-[#7065F0]"
                  : "bg-white text-black border-b-2 border-[#E0DEF7]"
              }`}
              onClick={() => setActiveButton("Agriculture")}
            >
              Agriculture
            </button>
          </div>
          <div className="bg-white px-4 py-2 rounded-t-md flex items-center justify-between gap-6">
            <p className="flex-1 flex items-center gap-2">
              Sort : <span>Relevance</span>
            </p>
            <img src="/assets/icons/arrowDown.svg" />
          </div>
        </div>
        <div className="h-[calc(100%-42px)] w-full flex flex-col pt-2 ">
          <div className="h-[40px] w-full lg:px-4">
            <p className="text-[14px] text-[#7F8393] font-medium">
              Total 245 results of Rent Type.
            </p>
          </div>
          <div className="h-[(100%-40px)] w-full flex flex-col md:flex-row lg:flex-row gap-2">
            {/* List */}
            <div className="w-full md:w-[calc(100%-292px)] p-2 lg:md:w-[calc(100%-292px)] flex flex-col gap-2 h-full ">
              {data.map((item) => (
                <Link
                  key={item.id} // Add key here for the Link component
                  href={`/rent/${item.id}`} // Dynamic URL path for the product details page
                >
                  <div className="w-full bg-white border border-[#E0DEF7] rounded-md flex flex-col  lg:flex-row gap-4 p-2">
                    <div>
                      <img
                        src={item.image}
                        className="md:w-64 lg:w-64 h-[212px] w-full rounded-md"
                        alt="property"
                      />
                    </div>

                    <div className="w-full flex flex-col justify-evenly">
                      <div className="w-full flex flex-col md:flex-row lg:flex-row items-start justify-between">
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
                      <div className="flex flex-wrap justify-start items-center gap-2">
                        <p className="text-[#7065F0] font-bold text-[18px]">
                          {item.price}
                        </p>
                        <p className="font-semibold text-[18px] border-x px-2 text-[#7F8393]">
                          3 BHK
                        </p>
                        <p className="font-semibold text-[18px] text-[#7F8393]">
                          2200 sqft
                        </p>
                      </div>
                      <p className="flex justify-start items-center gap-2 pt-1 underline">
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
                              onClick={(event) => {
                                event.stopPropagation(); // Prevent Link navigation
                                if (button.label.toLowerCase() === "whatsapp") {
                                  const phoneNumber = item.phone; // Use the item's phone number
                                  const message = "Hello! I want to connect."; // Customize message
                                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                    message
                                  )}`;
                                  window.open(url, "_blank");
                                }
                              }}
                            >
                              <span>
                                <img src={button.icon} alt={button.label} />
                              </span>
                              {button.label}
                            </p>
                          ))}
                        </div>
                        <p className="text-[14px] text-[#000929]">
                          {item.posted}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Banner List */}
            <div className="w-full md:w-[300px] lg:w-[300px] h-full pt-2 rounded-md">
              <div className="h-fit w-full bg-[white] flex flex-col gap-2 p-2 rounded-md">
                <img src="/assets/images/addImage.png" className="w-full  " />
                <img src="/assets/images/addImage.png" className="w-full" />
                <img src="/assets/images/addImage.png" className="w-full" />
                <img src="/assets/images/addImage.png" className="w-full" />
                <img src="/assets/images/addImage.png" className="w-full  " />
                <img src="/assets/images/addImage.png" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
