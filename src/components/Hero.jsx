import React from "react";
import Logo from "../images/logo.png";

const Hero = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex flex-col items-center justify-center text-white ">
        {/* <h1 className="text-7xl font-bold mb-10 -my-12">RateMyProfessorIO</h1> */}
        <img className="" src={Logo} alt="" />
        <p className="text-lg font-semibold">
          A better way to provide feedback
        </p>
      </div>
    </div>
  );
};

export default Hero;
