import React from 'react'
import { Link } from "react-router-dom";

const EducationChairmanMessage = () => {
  const chairmanEducationBoard = {
    name: "Afzal Chamdia",
    designation: "Chairman Educational Board SWIT",
    message: "Saylani Mass IT Training (SMIT) is a flagship program launched by the Saylani Welfare International Trust, aimed at equipping individuals with cutting-edge IT skills to meet the growing demands of the digital economy.",
    ChairmanPicture: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/309553272_164164349605927_3264981575052476859_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF3xaPqsTjOLa4vrnHBCbeKT3vWDZXCvzVPe9YNlcK_NeuGq_gCorpfOOxu49Ci8iOJJXkIKePhbvDSqXuYYf8F&_nc_ohc=ymXLTldK3agQ7kNvgEekhWR&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=Auxq7olfbOQyL-G4SCK_AFh&oh=00_AYBnNKbEdTqvXAQp03iZ535vN6lKJU2C723k_aLt4y1uDA&oe=67036D13",
  }
  return (
    <section 
      id="chairmanEducationMessage"
      className="min-h-screen flex flex-col items-center justify-center py-10"
    >
      <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">Chairman Educational Board SWIT Message</h1>
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
            src={chairmanEducationBoard.ChairmanPicture}
            alt="chairmanEducationBoard Picture"
            className="h-80 w-auto rounded-xl shadow-2xl hover:!scale-105 duration-500 transition-transform ease-in-out"
          />
        </div>
        <div
          className="flex flex-col justify-center w-full md:w-1/2 p-4"
          data-aos="fade-right"
        >
          <p className="text-lg text-justify md:text-start">
            {chairmanEducationBoard.message}
          </p>
          <h2 className="text-3xl text-center md:text-end mt-4 font-bold">
            {chairmanEducationBoard.name}
          </h2>
          <h3 className="my-2 text-2xl text-center md:text-end">
            {chairmanEducationBoard.designation}
          </h3>
          <Link
            className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-4 hover:scale-105 w-28 mx-auto md:mx-0"
            to={"/chairmanEducationMessage"}
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EducationChairmanMessage