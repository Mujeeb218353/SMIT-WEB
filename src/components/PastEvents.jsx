import React, { useState, useId } from "react";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const id = useId();
  const videos = [
    {
      id: 1,
      title: "Free Breakfast for School Kids by Saylani Welfare",
      description:
        "Free Breakfast for School Kids by Saylani Welfare | Maulana Bashir Farooq Qadri",
      url: "https://www.youtube.com/embed/WoBGkHTKGNw?si=SwYmb7Lt3rMRMKGu",
    },

    {
      id: 2,
      title: "Inauguration of Zaitoon Ashraf IT Park",
      description:
        "Inauguration of Zaitoon Ashraf IT Park | A New Era of Tech Innovation",
      url: "https://www.youtube.com/embed/MLlgfTz_hVM?si=sg7Tx8NEQvhhq3Ah",
    },
    {
      id: 3,
      title: "Parent Perspectives on Saylani Leading Educational System",
      description:
        "5 Shocking Truths About Parent Perspectives on Education Systems",
      url: "https://www.youtube.com/embed/7DQgyp6HiPo?si=z6jm55AmT-w_DB8Y",
    },
    {
      id: 4,
      title: "Saylani Tech Alumni 2024",
      description: "Saylani Tech Alumni 2024 | Saylani Tech Limited",
      url: "https://www.youtube.com/embed/nvpPTE24B58?si=53JnQWBvjpjieHb6",
    },
    {
      id: 5,
      title: "Saylani Alumni Meet-Up 2024",
      description:
        "Afzal Chamdia, Chairman Saylani Education Board, speaks at the Saylani Alumni Meet-Up 2024",
      url: "https://www.youtube.com/embed/X9di5HIYVfs?si=G7Kbj2Kw0sUh_7zC",
    },
    {
      id: 6,
      title: "Saylani Alumni Meet-Up 2024",
      description:
        "Arif Habib, Founder of Arif Habib Limited, speaks at the Saylani Alumni Meet-Up 2024",
      url: "https://www.youtube.com/embed/PtIvRFt6VYI?si=iGHQPKRK6Zy6JB82",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">
        Past Events
      </h1>
      <hr
        className="my-5 w-32 h-1 bg-[#8dc63f] border-none"
        data-aos="zoom-out"
      />
      <div
        className="flex flex-wrap justify-center gap-12"
        data-aos="zoom-in-down"
      >
        {videos.map((video, index) => (
          <div
            key={video.id} // remove it at the time of integration
            className="w-96 mt-5 rounded-lg shadow-xl flex flex-col transition-transform hover:!scale-105 duration-500"
          >
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              className="rounded-t-lg aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <h3 className="text-xl font-semibold mt-4 px-4">{video.title}</h3>
            <p className="text-gray-600 mt-2 max-w-xs overflow-hidden px-4 mb-4">
              {video.description}
            </p>
          </div>
        ))}
      </div>
      <Link
        className="btn bg-[#8dc63f] hover:bg-[#8dc63f] text-white mt-12 shadow-xl hover:!scale-105"
        to={"/pastEvents"}
        data-aos="zoom-out"
      >
        Explore More
      </Link>
    </div>
  );
};

export default PastEvents;
