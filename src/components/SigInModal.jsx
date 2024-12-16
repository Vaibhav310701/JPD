// "use client";
// import { RxCross2 } from "react-icons/rx";
// export default function SignInModal() {
//   return (
//     <div className="h-full w-full flex flex-col justify-center gap-4 relative">
//         <div className="absolute right-2 top-1">
//             <RxCross2 />
//         </div>
//       <div className="flex flex-col items-center justify-center gap-4">
//         <img src="assets/icons/LoginIcon.svg" />
//         <p className="text-[#000929] text-[24px] font-semibold">Sign up</p>
//         <p className="w-[70%] mx-auto text-center text-[#001619B2] text-[14px] font-medium leading-5">
//           Please enter your details!
//         </p>
//       </div>
//       <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 pt-10">
//         <input
//           type="text"
//           placeholder="Username"
//           className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
//         />
//         <input
//           type="tel"
//           placeholder="Enter your phone number"
//           className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
//         />

//         <button className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md  font-medium">
//           Sign In
//         </button>
//         <p>
//           Have an account?{" "}
//           <a href="/signup" className="text-[#7065F0] hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { RxCross2 } from "react-icons/rx";

export default function SignInModal() {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 relative">
      {/* Cross Icon */}
      <div className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800">
        <RxCross2 size={24} />
      </div>
      
      {/* Modal Content */}
      <div className="flex flex-col items-center justify-center gap-4">
        <img src="assets/icons/LoginIcon.svg" alt="Login Icon" />
        <p className="text-[#000929] text-[24px] font-semibold">Sign up</p>
        <p className="w-[70%] mx-auto text-center text-[#001619B2] text-[14px] font-medium leading-5">
          Please enter your details!
        </p>
      </div>
      
      {/* Form Section */}
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 pt-10">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
        />
        <button className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md font-medium">
          Sign In
        </button>
        <p>
          Have an account?{" "}
          <a href="/signup" className="text-[#7065F0] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
