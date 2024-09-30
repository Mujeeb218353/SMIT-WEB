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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
    <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">Our Alumni</h1>
    <hr className="my-5 w-32 h-1 bg-[#8dc63f] border-none" data-aos="zoom-out"/>
    <div className='flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap'>
      <BackgroundBlogCard />
      <BackgroundBlogCard />
      <BackgroundBlogCard />
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

const BackgroundBlogCard = () => {
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      data-aos="zoom-in"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12 top-[-10rem]">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Ghous Ahmed
        </Typography>
      </CardBody>
    </Card>
  );
}