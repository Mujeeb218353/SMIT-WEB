// About.jsx
import React from "react";
import SMITLogo from "../assets/SMIT.png";
import { Button } from "@material-tailwind/react"; 
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="min-h-screen flex flex-col items-center justify-center py-10"
    >
      <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">
          About Us
        </h1>
        <hr
          className="my-5 w-32 h-1 bg-[#8dc63f] border-none"
          data-aos="zoom-out"
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-evenly">
      <div
        id="intro-image"
        className="p-2 w-full md:w-1/3 flex justify-center"
        data-aos="fade-left"
      >
        <img src={SMITLogo} alt="SMIT Logo" className="h-52" />
      </div>
      <div
        id="info-about-institute"
        className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center sm:items-start"
        data-aos="fade-right"
      >
        <h1 className="text-3xl text-center sm:text-start">Welcome To</h1>
        <h1 id="institute-Name" className="my-2 text-4xl font-semibold text-center sm:text-start">
          Saylani Mass I.T Training
        </h1>
        <hr className="my-5 w-32 h-1 bg-[#8dc63f] border-none" />
        <p id="about-institute" className="font-playfair text-lg text-justify">
          Saylani Mass IT Training (SMIT) is a flagship program launched by the
          Saylani Welfare International Trust, aimed at equipping individuals
          with cutting-edge IT skills to meet the growing demands of the digital
          economy.
        </p>
        <Link className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-4 hover:!scale-105 w-28 mx-auto sm:mx-0" to={"/about"}>Read more</Link>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
