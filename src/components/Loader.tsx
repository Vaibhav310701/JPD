import React from "react";

function Loader() {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-60 z-50">
        <div className="flex space-x-2">
          <span className="text-white text-6xl font-bold animate-bounce-smooth delay-0 opacity-90">
            J
          </span>
          <span className="text-white text-6xl font-bold animate-bounce-smooth delay-200 opacity-90">
            P
          </span>
          <span className="text-white text-6xl font-bold animate-bounce-smooth delay-400 opacity-90">
            D
          </span>
        </div>
      </div>
    </>
  );
}

export default Loader;
{
  /* <div className="flex items-center justify-center h-screen bg-black bg-opacity-50 backdrop-blur-md">
  <div className="flex space-x-6">
   
  </div>
</div> */
}
