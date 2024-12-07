import React from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="h-[54px] w-full">
        <Navbar />
      </div>
      <div className="h-[calc(100%-54px)] w-full bg-slate-900">
        hello
      </div>
    </div>
  );
}
