"use client";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import toast from "react-hot-toast";
import LottiePlayer from "lottie-react";
import loginAnimation from "../../public/json/loginAnimation.json";
// Using Slices for State Managing. 
import { useDispatch } from "react-redux";
import { closeSignIn } from "../redux/slices/signInSlice";
import { openVerifyModal } from "@/redux/slices/verifyModalSlice";
import { openLogin } from "@/redux/slices/loginSlice";

export default function SignInModal() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  // Close modal and reset state
  const handleCloseSignInModal = () => {
    dispatch(closeSignIn()); //close sign in modal
    setUsername(""); //set form values to null after closing modal
    setPhone("");
  };

  const handleNavigate = () => {
    dispatch(closeSignIn()); //close Sign in modal
    dispatch(openLogin()); //open login modal
  };

  // Handle input changes for username.
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
 //  Handle input changes for Phone.
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    const phoneRegex = /^[6789]\d{9}$/;     // Regex validation for phone.
    const usernameRegex = /^[a-zA-Z]{3,}$/; // Regex validation for username.

    // Check if username is empty
    if (!username.trim()) {
      toast.error("Username cannot be empty.");
      return;
    }
    // Check if username matches the regex
    if (!usernameRegex.test(username)) {
      toast.error(
        "Username must contain at least 3 alphabets and no special characters or numbers."
      );
      return;
    }

    // Check if phone is empty
    if (!phone.trim()) {
      toast.error("Phone number cannot be empty.");
      return;
    }
    // Check if phone matches the regex
    if (!phoneRegex.test(phone)) {
      toast.error(
        "Please enter a valid 10-digit phone number starting with 6-9."
      );
      return;
    }

    // If all validations pass
    toast.success("Account Creating Suncce");
    setUsername("");
    setPhone("");
    dispatch(closeSignIn());      // closing sign in modal.
    dispatch(openVerifyModal());  //open verify modal.
  };

  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 relative">
      {/* Cross Icon */}
      <div
        onClick={handleCloseSignInModal}
        className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800"
      >
        <RxCross2 size={24} />
      </div>

      {/* Modal Content */}
      <div className="flex flex-col items-center justify-center gap-4">
      {loginAnimation && (
          <LottiePlayer
            animationData={loginAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "150px", height: "150px" }}
          />
        )}
        <p className="text-[#000929] text-[24px] font-semibold">Sign up</p>
        <p className="w-[70%] mx-auto text-center text-[#001619B2] text-[14px] font-medium leading-5">
          Please enter your details!
        </p>
      </div>

      {/* Form Section */}
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 pt-4">
        {/* Username Input */}
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
        />

        {/* Phone Input */}
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter your phone number"
          className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#E0DEF7]"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md font-medium"
        >
          Sign In
        </button>

        <p>
          Have an account?{" "}
          <button
            onClick={handleNavigate}
            className="text-[#7065F0] hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
