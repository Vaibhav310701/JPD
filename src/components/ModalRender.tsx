"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import LoginModal from "../components/LoginModal";
import SignInModal from "../components/SigInModal";
import OtpModal from "../components/OtpModal";

export default function ModalRender() {
  const isLogin = useSelector((state: RootState) => state.login.isOpen);
  const isSignin = useSelector((state: RootState) => state.signIn.isSignInOpen); 
  const verifyOtp = useSelector((state: RootState) => state.verifyModal.isVerifyModalOpen);
  return (
    <>
      {(isLogin || isSignin || verifyOtp) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-20">
          <div className="h-full w-full md:h-[500px] lg:h-[500px] md:w-[400px] lg:w-[400px] bg-white border rounded-lg">
            {/* Render modals based on the state */}
            {isLogin && <LoginModal />}
            {isSignin && <SignInModal />}
            {verifyOtp && <OtpModal />}
          </div>
        </div>
      )}
    </>
  );
}
