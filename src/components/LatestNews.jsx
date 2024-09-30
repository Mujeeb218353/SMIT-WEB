import React from 'react'
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">Latest News</h1>
      <hr className="my-5 w-32 h-1 bg-[#8dc63f] border-none" data-aos="zoom-out"/>
      <div></div>
      <Link
        className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-12 shadow-xl hover:!scale-105"
        to={"/latestNews"}
        data-aos="zoom-out"
      >
        Explore More
      </Link>
    </div>
  )
}

export default LatestNews