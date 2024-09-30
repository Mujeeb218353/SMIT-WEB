import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/AppContext";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const OurCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Web & Mobile App Development",
      imgSrc:
        "https://www.schoolofit.co.za/wp-content/uploads/2020/04/Awscourses-806x393.jpg",
      alt: "Rounded avatar",
      buttonText: "View Details",
      link: "/courses/WMA",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "Firebase", "Typescript", "NextJs", "React Native", "Node.js", "MongoDB", "Express.js"],
    },
    {
      id: 2,
      title: "Graphic Design",
      imgSrc:
        "https://amadine.com/assets/img/articles/choose-monitor/graphic-designer-at-work@2x.jpg",
      alt: "Rounded avatar",
      buttonText: "View Details",
      link: "/courses/GD",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "Adobe XD", "Figma", "Canva"],
    },
    {
      id: 3,
      title: "Python Course",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/0*q2ATBBe-pHt7cUNv",
      alt: "Rounded avatar",
      buttonText: "View Details",
      link: "/courses/PC",
      technologies: ["Python", "Django", "Flask", "HTML", "CSS", "Bootstrap", "Tailwind"],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10"
      id="ourCourses"
    >
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">Our Courses</h1>
      <hr className="my-5 w-32 h-1 bg-[#8dc63f] border-none" data-aos="zoom-out"/>
      <div className="grid grid-cols-1 gap-12 mt-4 w-full sm:mx-auto sm:h-[11/12] place-items-center  py-8">
        {courses.map((course, index) => (
          <CardDefault
            key={course.id}
            id={course.id}
            imgSrc={course.imgSrc}
            alt={course.alt}
            title={course.title}
            btnText={course.buttonText}
            link={course.link}
            technologies={course.technologies}
            index={index}
          />
        ))}
      </div>
      <Link className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-12 shadow-xl hover:!scale-105" to={"/courses"} data-aos="zoom-out">
        Explore Courses
      </Link>
    </div>
  );
};

export default OurCourses;

const CardDefault = ({ id, imgSrc, alt, title, btnText, link, index, technologies }) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div 
      className="w-full md:w-10/12 xl:w-8/12 2xl:w-7/12 min-h-96 rounded-2xl shadow-2xl flex flex-col sm:flex-row justify-center items-center transition ease-in-out delay-110 hover:!-translate-y-4 hover:rotate-2 hover:!scale-105 origin-center duration-300" 
      key={id}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <figure className="sm:w-[40%] md:w-[50%] w-full p-4 sm:p-0 rounded-xl sm:rounded-l-xl sm:rounded-r-none">
        <img
          src={imgSrc}
          alt={alt}
          className="h-[25rem] w-full rounded-xl sm:rounded-l-xl sm:rounded-r-none object-cover object-center"
        />
      </figure>
      <div className="w-full sm:w-[60%] md:w-[50%] px-4 py-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center sm:text-start">
          {title}
        </h2>
        <div className="w-full py-4 text-center sm:text-start flex gap-4 flex-wrap justify-center sm:justify-start">
          {
           technologies.length > 0 ?
            technologies.map((tech, index) => <span key={index} className="badge badge-outline">{tech}</span>)
            : ""
          }
        </div>
        <Link className="btn btn-neutral shadow-xl w-full sm:w-32" to={link}>
          {btnText}
        </Link>
      </div>
    </div>
  );
};
