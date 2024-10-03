import React from "react";
import SMITLogo from "../assets/SMIT.png";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="w-full flex justify-center items-center">
        <img src={SMITLogo} alt={"SMIT"} className="w-80" />
      </div>
      <div className="w-full flex justify-center items-center">
      <span className="loading loading-bars w-16 bg-[#8dc63f]"></span>
      </div>
    </div>
  );
};

export default Loader;
