import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-[#3498db] rounded-full animate-pulse delay-0"></div>
        <div className="w-3 h-3 bg-[#3498db] rounded-full animate-pulse delay-200"></div>
        <div className="w-3 h-3 bg-[#3498db] rounded-full animate-pulse delay-400"></div>
      </div>
    </div>
  );
}

export default Loader;
