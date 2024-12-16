"use client";
import { RxCross2 } from "react-icons/rx";
export default function LoginModal() {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 relative">
      <div className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800">
        <RxCross2 size={24} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src="assets/icons/LoginIcon.svg" />
        <p className="text-[#000929] text-[24px] font-semibold">Login</p>
        <p className="w-[70%] mx-auto text-center text-[#001619B2] text-[14px] font-medium leading-5">
          We will send you a{" "}
          <span className="text-[black]">One Time Password</span> on your phone
          number.
        </p>
      </div>
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 pt-10">
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md  font-medium">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-[#7065F0] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
