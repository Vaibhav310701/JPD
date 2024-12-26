// "use client";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { useRouter } from "next/navigation"; // Import useRouter from Next.js
// import Carousel from "../../../components/Carousel";
// import { FaLocationDot } from "react-icons/fa6";
// import { BsWhatsapp } from "react-icons/bs";
// import { IoCall } from "react-icons/io5";
// import { useParams } from "next/navigation";

// function Page() {

//   const params = useParams();

//   // Ensure propertyId is a number
//   const propertyId = Number(params.propertyId);
  
//   const items = [
//     {
//       image: "/assets/images/office.png",
//       alt: "Image 1",
//       title: "Item 1",
//       description: "Description for item 1",
//     },
//     {
//       image: "/assets/images/office2.jpg",
//       alt: "Image 2",
//       title: "Item 2",
//       description: "Description for item 2",
//     },
//     {
//       image: "/assets/images/propertImage.png",
//       alt: "Image 3",
//       title: "Item 3",
//       description: "Description for item 3",
//     },
//   ];

//   const router = useRouter(); // Initialize the router

//   return (
//     <div className=" h-full w-full">
//       <p>{propertyId}</p>
//       <div className="h-[64px] bg-[#7065F0] flex justify-start items-center gap-4 px-4">
//         <MdOutlineKeyboardBackspace
//           color="white"
//           size={22}
//           className="cursor-pointer"
//           onClick={() => router.back()} // Navigate to the previous route
//         />
//         <p
//           className="text-[white] font-medium cursor-pointer hover:underline"
//           onClick={() => router.back()} // Optionally link the text as well
//         >
//           Back to search results
//         </p>
//       </div>
//       <div className="container m-auto h-[calc(100%-64px)] w-full flex flex-col md:flex-row lg:flex-row gap-2 p-2 overflow-auto">
//         {/* Property Details */}
//         <div className="w-full  md:w-[calc(100%-292px)] lg:w-[calc(100%-292px)] border border-[#E0DEF7] rounded-md flex flex-col gap-2 h-fit p-2 md:px-6 lg:px-6 bg-white">
//           <div className="flex items-center justify-between border-b border-[#E0DEF7] pb-2">
//             <p className="font-semibold">
//               Resedential plot for sale at mansarovar, jaipur
//             </p>
//             <div className="flex justify-end gap-4 items-center">
//               <img
//                 src="/assets/icons/wishlistIcon.svg"
//                 className="h-8 w-8"
//                 alt="wishlist"
//               />
//               <img
//                 src="/assets/icons/shareIcon.svg"
//                 className="h-9 w-9"
//                 alt="share"
//               />
//             </div>
//           </div>
//           {/* carousel */}
//           <div className="w-full pt-2">
//             <Carousel items={items} />
//           </div>
//           {/* Posted 3 days ago */}
//           <div className="w-full flex justify-between items-center pt-2 pr-4 border-b pb-3">
//             <p className="text-[#6c6c6d] font-medium text-[14px] ">
//               Posted 3 days ago
//             </p>
//             <p className="bg-[#7065F0] px-2  text-[14px] rounded-md text-white">
//               For Sale
//             </p>
//           </div>
//           {/* Content */}
//           <div className="w-full flex flex-col md:flex-col lg:flex-row gap-4 justify-between pt-4">
//             <div className="w-full  md:w-full lg:w-[70%] flex flex-col gap-2">
//               <div className="w-full flex justify-start items-center gap-2">
//                 <p className="pr-4 py-2  font-semibold text-lg text-[#7065F0]">
//                   ₹2050000
//                 </p>
//                 <p className="px-4 py-2  font-semibold text-lg border-l-2  text-[#7F8393]">
//                   3BHK
//                 </p>
//                 <p className="px-4 py-2 font-semibold text-lg border-l-2 text-[#7F8393]">
//                   2200 sqft
//                 </p>
//               </div>
//               <div className="w-full text-[#000929] text-[14px]">
//                 <p className="">
//                   See what our property managers, iid po 0fo ppppf p poosp pfd
//                   pdfu ppdop sdpofp pp s p psp jkf isoio oih sf 09sfo sf s osyf
//                   s sofyso s s psufps 0fps fps fgfh See what our property
//                   managers, iid po 0fo ppppf p poosp pfd pdfu ppdop sdpofp pp s
//                   p psp jkf isoio oih sf 09sfo sf s osyf s sofyso s s psufps
//                   0fps fps fgfh{" "}
//                 </p>
//               </div>
//               <div className="flex justify-start items-center gap-2 pt-2">
//                 <p className="border border-[#7065F0] text-[#7065F0] w-fit px-2 py-1 rounded-md flex items-center gap-1">
//                   <span>
//                     <img src="\assets\icons\ticlIcon.svg" alt="tag icon" />
//                   </span>
//                   JDA Aprroved
//                 </p>
//                 <p className="border border-[#7065F0] text-[#7065F0] w-fit px-2 py-1 rounded-md flex items-center gap-1">
//                   <span>
//                     <img src="\assets\icons\ticlIcon.svg" alt="tag icon" />
//                   </span>
//                   JDA Aprroved
//                 </p>
//               </div>
//               <div className="pt-2">
//                 <p className="flex justify-start items-center gap-2 pt-1 underline">
//                   <span>
//                     <img src="\assets\icons\locationIcon.svg" alt="location" />
//                   </span>
//                   View on map
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-full lg:w-[calc(100%-70%)] flex flex-col gap-2 border bg-[#E0DEF7] rounded-lg p-2">
//               <div className="flex justify-start items-center gap-2">
//                 <p className="h-10 w-10 bg-[#F848C7B5] rounded-full flex items-center justify-center text-[white]">
//                   AM
//                 </p>
//                 <p className="font-medium text-lg">Anand Mohan</p>
//               </div>
//               <p className="flex justify-start gap-4 items-center px-4 py-2 bg-white border-2  border-[#E0DEF7]  rounded-md text-[#7F8393]  font-medium">
//                 <span>
//                   <IoCall color="#7065F0" size={22} />
//                 </span>
//                 9292929292
//               </p>
//               <p className="flex justify-start gap-4 items-center px-4 py-2 bg-[#3CD957] text-white rounded-md font-medium">
//                 <span>
//                   <BsWhatsapp color="white" size={22} />
//                 </span>
//                 WhatsApp
//               </p>
//               <p className="flex justify-start gap-4 items-center px-4 py-2 bg-[#7065F0] text-white rounded-md font-medium">
//                 <span>
//                   <IoCall color="white" size={22} />
//                 </span>
//                 Call
//               </p>
//               <p></p>
//             </div>
//           </div>
//           {/* map */}
//           <div className="w-fit h-full">
//             <div className="border rounded-lg h-full border-[#E0DEF7] w-fit relative">
//               <p className="absolute flex items-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-black z-10 hover:underline cursor-pointer">
//                 <span>
//                   <FaLocationDot color="red" size={20} />
//                   {/* <img
//                     src="/assets/icons/locationgif.gif" // Replace with the actual path to your GIF
//                     alt="A cool GIF"
//                     width={30} // Set the desired width
//                     height={30} // Set the desired height
//                     unoptimized
//                   /> */}
//                 </span>
//                 View On Map
//               </p>
//               <img
//                 src="/assets/images/map.png"
//                 className="h-[200px] md:h-[400px] lg:h-[400px] w-[600px] opacity-35"
//               />
//             </div>
//           </div>
//           {/* Footer */}
//           <div className="pt-4">
//             <p className="text-[#9EA3AE] border-t-2 border-[#E0DEF7] font-medium text-[12px] px-4 pt-2">
//               <span className="text-[#F44336] font-semibold">Caution:</span>{" "}
//               Always verify property details and user credentials before any
//               transaction. This website is a platform for connecting buyers and
//               sellers. we do not guarantee the accuracy of listings or take
//               responsibility for any dealings. Proceed with caution.
//             </p>
//           </div>
//         </div>
//         {/* Add Banner Content */}
//         <div className="w-full md:w-[292px] lg:w-[292px] h-full bg-[white]">
//           <div className="h-full w-full bg-[white] flex flex-col gap-2 p-2 rounded-md">
//             <img src="/assets/images/addImage.png" className="w-full  " />
//             <img src="/assets/images/addImage.png" className="w-full" />
//             <img src="/assets/images/addImage.png" className="w-full" />
//             <img src="/assets/images/addImage.png" className="w-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Page;
"use client";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";
import Carousel from "../../../components/Carousel";
import { FaLocationDot } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  const router = useRouter();

  // Parse and validate the propertyId
  const propertyId = Number(params?.propertyId);

  const items = [
    {
      image: "/assets/images/office.png",
      alt: "Image 1",
      title: "Item 1",
      description: "Description for item 1",
    },
    {
      image: "/assets/images/office2.jpg",
      alt: "Image 2",
      title: "Item 2",
      description: "Description for item 2",
    },
    {
      image: "/assets/images/propertImage.png",
      alt: "Image 3",
      title: "Item 3",
      description: "Description for item 3",
    },
  ];

  return (
    <div className="h-full w-full">
      {/* Back Navigation */}
      <div className="h-[64px] bg-[#7065F0] flex items-center gap-4 px-4">
        <MdOutlineKeyboardBackspace
          color="white"
          size={22}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
        <p
          className="text-white font-medium cursor-pointer hover:underline"
          onClick={() => router.back()}
        >
          Back to search results
        </p>
      </div>

      <div className="container m-auto h-[calc(100%-64px)] w-full flex flex-col md:flex-row lg:flex-row gap-2 p-2 overflow-auto">
        {/* Property Details */}
        <div className="w-full md:w-[calc(100%-292px)] lg:w-[calc(100%-292px)] border border-[#E0DEF7] rounded-md flex flex-col gap-2 h-fit p-2 md:px-6 lg:px-6 bg-white">
          <div className="flex items-center justify-between border-b border-[#E0DEF7] pb-2">
            <p className="font-semibold">
              Resedential plot for sale at Mansarovar, Jaipur
            </p>
            <div className="flex gap-4 items-center">
              <img
                src="/assets/icons/wishlistIcon.svg"
                className="h-8 w-8"
                alt="Wishlist"
              />
              <img
                src="/assets/icons/shareIcon.svg"
                className="h-9 w-9"
                alt="Share"
              />
            </div>
          </div>

          {/* Carousel */}
          <div className="w-full pt-2">
            <Carousel items={items} />
          </div>

          {/* Posted Info */}
          <div className="w-full flex justify-between items-center pt-2 pr-4 border-b pb-3">
            <p className="text-[#6c6c6d] font-medium text-[14px]">Posted 3 days ago</p>
            <p className="bg-[#7065F0] px-2 text-[14px] rounded-md text-white">For Sale</p>
          </div>

          {/* Property Info */}
          <div className="w-full flex flex-col md:flex-col lg:flex-row gap-4 justify-between pt-4">
            <div className="w-full lg:w-[70%] flex flex-col gap-2">
              <div className="w-full flex gap-2">
                <p className="pr-4 py-2 font-semibold text-lg text-[#7065F0]">₹20,50,000</p>
                <p className="px-4 py-2 font-semibold text-lg border-l-2 text-[#7F8393]">3BHK</p>
                <p className="px-4 py-2 font-semibold text-lg border-l-2 text-[#7F8393]">
                  2200 sqft
                </p>
              </div>
              <p className="text-[#000929] text-[14px]">
                See what our property managers have to say. Detailed descriptions of the property go here...
              </p>
              <div className="flex gap-2 pt-2">
                <p className="border border-[#7065F0] text-[#7065F0] px-2 py-1 rounded-md flex items-center gap-1">
                  <img src="/assets/icons/ticlIcon.svg" alt="Tag Icon" />
                  JDA Approved
                </p>
                <p className="border border-[#7065F0] text-[#7065F0] px-2 py-1 rounded-md flex items-center gap-1">
                  <img src="/assets/icons/ticlIcon.svg" alt="Tag Icon" />
                  JDA Approved
                </p>
              </div>
              <p className="pt-2 flex items-center gap-2 underline cursor-pointer">
                <img src="/assets/icons/locationIcon.svg" alt="Location Icon" />
                View on map
              </p>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-[calc(100%-70%)] flex flex-col gap-2 border bg-[#E0DEF7] rounded-lg p-2">
              <div className="flex items-center gap-2">
                <p className="h-10 w-10 bg-[#F848C7B5] rounded-full flex items-center justify-center text-white">
                  AM
                </p>
                <p className="font-medium text-lg">Anand Mohan</p>
              </div>
              <p className="flex items-center gap-4 px-4 py-2 bg-white border-2 border-[#E0DEF7] rounded-md text-[#7F8393] font-medium">
                <IoCall color="#7065F0" size={22} />
                9292929292
              </p>
              <p className="flex items-center gap-4 px-4 py-2 bg-[#3CD957] text-white rounded-md font-medium">
                <BsWhatsapp color="white" size={22} />
                WhatsApp
              </p>
              <p className="flex items-center gap-4 px-4 py-2 bg-[#7065F0] text-white rounded-md font-medium">
                <IoCall color="white" size={22} />
                Call
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-fit h-full">
            <div className="border rounded-lg h-full border-[#E0DEF7] w-fit relative">
              <p className="absolute flex items-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-black z-10 hover:underline cursor-pointer">
                <FaLocationDot color="red" size={20} />
                View On Map
              </p>
              <img
                src="/assets/images/map.png"
                className="h-[200px] md:h-[400px] lg:h-[400px] w-[600px] opacity-35"
                alt="Map"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4">
            <p className="text-[#9EA3AE] border-t-2 border-[#E0DEF7] font-medium text-[12px] px-4 pt-2">
              <span className="text-[#F44336] font-semibold">Caution:</span> Always verify property
              details and user credentials before any transaction.
            </p>
          </div>
        </div>

        {/* Advertisement Banner */}
        <div className="w-full md:w-[292px] lg:w-[292px] h-full bg-white">
          <div className="h-full w-full bg-white flex flex-col gap-2 p-2 rounded-md">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src="/assets/images/addImage.png"
                className="w-full"
                alt={`Ad ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
