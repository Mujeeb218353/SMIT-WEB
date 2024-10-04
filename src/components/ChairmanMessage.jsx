import React from "react";
import ChairmanPicture from "../assets/Chairman.jpg";
import { Link } from "react-router-dom";

const ChairmanMessage = () => {
  const chairman = {
    name: "Maulana Bashir Farooqi",
    designation: "Chairman SWIT",
    message: "Saylani Mass IT Training (SMIT) is a flagship program launched by the Saylani Welfare International Trust, aimed at equipping individuals with cutting-edge IT skills to meet the growing demands of the digital economy.",
    ChairmanPicture: ChairmanPicture,
  }
  return (
    <section 
      id="chairmanMessage"
      className="min-h-screen flex flex-col items-center justify-center py-10 px-6"
    >
      <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">
          Chairman Message
      </h1>
        <hr
          className="my-5 w-32 h-1 bg-[#8dc63f] border-none"
          data-aos="zoom-out"
        />
      </div>
      
      <div className="flex flex-col md:flex-row-reverse items-center justify-evenly">
        <div
          className="p-2 w-full md:w-1/3 flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={chairman.ChairmanPicture}
            alt="Chairman Picture"
            className="h-72 w-auto rounded-xl shadow-2xl hover:!scale-105 duration-500 transition-transform ease-in-out"
          />
        </div>
        <div
          className="flex flex-col justify-center w-full md:w-1/2 p-4"
          data-aos="fade-right"
        >
          <p className="text-lg text-justify md:text-start">
            {chairman.message}
          </p>
          <h2 className="text-3xl text-center md:text-end mt-4 font-bold">
            {chairman.name}
          </h2>
          <h3 className="my-2 text-2xl text-center md:text-end">
            {chairman.designation}
          </h3>
          <Link
            className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-4 hover:scale-105 w-28 mx-auto md:mx-0"
            to={"/chairmanMessage"}
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;