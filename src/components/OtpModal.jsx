
"use client";
import { RxCross2 } from "react-icons/rx";

// Importing redux slices or function for state management.
import { useDispatch } from "react-redux";
import { closeVerifyModal } from "../redux/slices/verifyModalSlice";
import LottiePlayer from "lottie-react";
import animationData from "../../public/json/animation.json";
export default function OtpModal() {
  const dispatch = useDispatch();

  const handleCloseVerifyModal = () => {
    dispatch(closeVerifyModal()); //closing verify modal.
  };

  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 relative">
      <div
        onClick={handleCloseVerifyModal}
        className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-800"
      >
        <RxCross2 size={24} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {animationData && (
          <LottiePlayer
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "150px", height: "150px" }}
          />
        )}
        <p className="text-[#000929] text-[24px] font-semibold">Verification</p>
        <p className="w-[70%] mx-auto text-center text-[#001619B2] text-[14px] font-medium leading-5">
          You will get a OTP via SMS.
        </p>
      </div>
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-4 pt-8">
        <input
          type="text"
          placeholder="Enter OTP"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button className="w-full bg-[#7065F0] hover:bg-[#6255f3] text-white p-2 rounded-md  font-medium">
          Verify
        </button>
        <div className="flex flex-col justify-center items-center text-center text-[14px]">
          <p>Didn’t receive the verification OTP?</p>
          <p>
            <span className="text-[#7065F0] hover:underline cursor-pointer font-medium">
              Resend again
            </span>{" "}
            in 05:03 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
