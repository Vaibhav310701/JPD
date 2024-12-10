"use client";
import { useState } from "react";
export default function page() {
  const [activeButton, setActiveButton] = useState("Rent");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [selectedBudgetOption, setSelectedBudgetOption] = useState("");
  const [filteredBudgetOptions, setFilteredBudgetOptions] = useState([]);
  const [budgetSearchInput, setBudgetSearchInput] = useState("");

  const options = [
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
  const budgetOptions = [
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
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchInput(option);
    setIsOpen(false);
  };
  const handleBudgetOptionClick = (option) => {
    setSelectedBudgetOption(option);
    setBudgetSearchInput(option);
    setIsBudgetOpen(false);
  };
  const handleBudgetSearchChange = (e) => {
    const value = e.target.value;
    setBudgetSearchInput(value);

    const filteredOptions = budgetOptions.filter((option) =>
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
    <div className="h-full w-full flex flex-col p-2">
      {/* Filters */}
      <div className="h-full md:h-[100px] lg:h-[100px] grid w-full gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div
          className="flex flex-col gap-1 bg-white p-2 rounded-md relative"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[0.875rem]">
            Location
          </label>
          <div className="flex items-center border-b-2 border-[#E0DEF7]">
            <input
              className="outline-none flex-1 py-1 text-[#000929] text-[16px] font-semibold"
              type="text"
              placeholder="Search Location..."
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
          className="flex flex-col gap-1 bg-white p-2 rounded-md relative"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
        >
          <label className="text-[#4d5c5e] font-semibold text-[14px]">
            Budget
          </label>
          <div className="flex items-center border-b-2 border-[#E0DEF7]">
            <input
              className="outline-none flex-1 py-1 text-[#000929] text-[16px] font-semibold"
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
      {/* Tabs Section */}
      <div className="h-[calc(100%-100px)]  w-full pt-4">
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
          {/* List */}
          <div className="w-full md:w-[calc(100%-292px)] lg:md:w-[calc(100%-292px)] flex flex-col gap-2 h-full overflow-auto">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white rounded-md flex flex-col  lg:flex-row gap-4 p-2"
              >
                <div>
                  <img
                    src={item.image}
                    className="md:w-60 lg:w-60 h-[212px] w-full"
                    alt="property"
                  />
                </div>

                <div className="w-full flex flex-col">
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
                  <div>
                    <p className="text-[#7065F0] font-bold text-[18px]">
                      {item.price}
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
