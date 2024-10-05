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
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind",
        "Firebase",
        "Typescript",
        "NextJs",
        "React Native",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
    },
    {
      id: 2,
      title: "Graphic Design",
      imgSrc:
        "https://amadine.com/assets/img/articles/choose-monitor/graphic-designer-at-work@2x.jpg",
      alt: "Rounded avatar",
      buttonText: "View Details",
      link: "/courses/GD",
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Indesign",
        "Adobe XD",
        "Figma",
        "Canva",
      ],
    },
    {
      id: 3,
      title: "Python Course",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1400/0*q2ATBBe-pHt7cUNv",
      alt: "Rounded avatar",
      buttonText: "View Details",
      link: "/courses/PC",
      technologies: [
        "Python",
        "Django",
        "Flask",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4"
      id="ourCourses"
    >
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">
        Our Courses
      </h1>
      <hr
        className="my-5 w-32 h-1 bg-[#8dc63f] border-none"
        data-aos="zoom-out"
      />
      <div className="flex gap-8 gap-y-8 flex-wrap justify-center">
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
      <Link
        className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-12 shadow-xl hover:!scale-105"
        to={"/courses"}
        data-aos="zoom-out"
      >
        Explore Courses
      </Link>
    </div>
  );
};

export default OurCourses;

const CardDefault = ({
  id,
  imgSrc,
  alt,
  title,
  btnText,
  link,
  index,
  technologies,
}) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      className="max-w-md flex flex-col items-center justify-between rounded-lg shadow-lg hover:!scale-105 duration-300 transition-shadow mt-4"
      data-aos="zoom-in"
      key={id}
    >
      <Link to={link}>
        <img className="rounded-t-lg aspect-[16/9]" src={imgSrc} alt={alt} />
      </Link>
      <div className="p-5 flex flex-col gap-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{title}</h5>
        <p className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech, index) => (
            <span key={index} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </p>
      </div>
      <div className="w-full p-4 flex justify-center">
        <Link
          to={link}
          className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-4 shadow-xl hover:!scale-105 "
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};
