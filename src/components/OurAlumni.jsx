import React from 'react'
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const OurAlumni = () => {

  const alumni = [
    { id: 1, name: 'Saad Pasta', image: 'https://avatars.githubusercontent.com/u/23307811?v=4' },
    { id: 2, name: 'Zain Mustafa', image: 'https://avatars.githubusercontent.com/u/9256587?v=4' },
    { id: 3, name: 'Ghous Ahmed', image: 'https://smit-web-iota.vercel.app/Instructors3.jpeg' },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-6">
    <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">Our Alumni</h1>
    <hr className="my-5 w-32 h-1 bg-[#8dc63f] border-none" data-aos="zoom-out"/>
    <div className='flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap w-full'>
        {alumni.map((alumni) => (
          <BackgroundBlogCard key={alumni.id} alumni={alumni} />
        ))}
      </div>
    <Link
      className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-12 shadow-xl hover:!scale-105"
      to={"/ourAlumni"}
      data-aos="zoom-out"
    >
      Explore More
    </Link>
  </div>
  )
}

export default OurAlumni

const BackgroundBlogCard = ({ alumni }) => {
  return (
    <Card
      shadow={false}
      className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center group my-8"
      data-aos="zoom-in"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${alumni.image})` }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardHeader>
      <CardBody className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Typography
          variant="h2"
          color="white"
          className="mb-2 font-medium leading-[1.5]"
        >
          {alumni.name}
        </Typography>
        <Link
          to={`/instructor/${alumni.id}`} 
          className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-2 shadow-xl border-none hover:!scale-105"
        >
          View Details
        </Link>
      </CardBody>
    </Card>
  );
};