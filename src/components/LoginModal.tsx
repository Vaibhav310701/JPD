"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

// Importing Redux slices and dispatch for state management.
import { useDispatch } from "react-redux";
import { closeLogin } from "@/redux/slices/loginSlice";
import { openVerifyModal } from "@/redux/slices/verifyModalSlice";

//import Toaster for Notification.
import { toast } from "react-toastify"; 

export default function LoginModal() {

  const [phone, setPhone] = useState<string>("");
  const dispatch = useDispatch();

  const handleLoginClose = () => {
    dispatch(closeLogin()); //close login modal.
    setPhone("");  //set input to null when close.
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleLoginSubmit = () => {
    const phoneRegex = /^[6789]\d{9}$/; // Using regex expression for phone validation.

    if (phoneRegex.test(phone)) {
      dispatch(openVerifyModal());
      toast.info("OTP sent to your Mobile Number.", {});
      console.log("Phone number is valid:", phone);
    } else {
      toast.error(
        "Please enter a valid phone number (starting with 6, 7, 8, or 9 and 10 digits long)."
      );
    }
    setPhone("");
    dispatch(closeLogin()); // close login modal after succesfull submit.
  };

  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 relative">
      <div
        className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800"
        onClick={handleLoginClose}
      >
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
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter your phone number"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleLoginSubmit}
          className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md  font-medium"
        >
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
