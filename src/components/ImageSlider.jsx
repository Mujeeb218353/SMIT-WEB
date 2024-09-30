import { Carousel, Typography } from "@material-tailwind/react";

const ImageSlider = () => {
  const data = [
    
    {
      src: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/460150730_918037973690295_1885000815907243871_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHGg4OAWd9EVFCA0PZH_M9IflGg1EhhKEx-UaDUSGEoTIkersy6CckzHyS6YNX0OlbL630W2CyBnwL_8njIc-De&_nc_ohc=zqKkLkN0YCkQ7kNvgHhi1AJ&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYA3FtF--0GGem0tWw81yHwn1gKp2kgKPk1PdofwSid74Q&oe=66FECA31",
      alt: "image 1",
      title: "Zaitoon Ashraf I.T Park",
      description: "The Governor of Sindh, Kamran Khan Tessori, inaugurated the Zaitoon Ashraf IT Park, established near the Baloch Colony Bridge under the administration of the Saylani Welfare International Trust. The IT Park is equipped with state-of-the-art facilities.",
    },
    {
      src: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/460078621_918036470357112_985609849871270444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFh3e56_ZozfXgktss5XKy3GT-oOfWvg7YZP6g59a-Dtoe-FmXZe5Mu1jArEhmzhm7xwEXMMUQzcsGOhwKoytxm&_nc_ohc=2hBpqA0XDo4Q7kNvgGH02SN&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYDLzjhy9QvGumQCpMTpx5YqTCWAeMNLR1TlaXwrf00miw&oe=66FEDB95",
      alt: "image 2",
      title: "Zaitoon Ashraf I.T Park",
      description: "The inauguration ceremony was attended by the founder of Saylani Welfare International Trust, Maulana Bashir Farooq Qadri, along with foreign diplomats, including Consul Generals from Bahrain, Malaysia, the UAE, Turkey, Japan, Indonesia, and the Deputy Consul General of Iran, as well as prominent business figures and city elites.",
    },
    {
      src: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/460035233_918034423690650_4355036144935892250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSIOQfCq5TMqPQApd52mZ361vtgE245tjrW-2ATbjm2P1LgOrv2KdTGkXEOw5rd5Vg62WWnLmawJ3_CF-0k23I&_nc_ohc=Zojdjgl5Jq0Q7kNvgHuzlwD&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AbTGHFlYZZUMKgFznUSc2Lo&oh=00_AYDEXa-SIi46HoPgCBUkFGgEi4jFY41F8u6NNbSIRQETjw&oe=66FEE4DE",
      alt: "image 3",
      title: "Zaitoon Ashraf I.T Park",
      description: `In his speech, Maulana Bashir Farooq Qadri said, "By 2035, Saylani's IT experts will eliminate Pakistan's reliance on IMF and World Bank loans. We have envisioned a future where we no longer have to bow before these institutions."`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden" id="imageSlider">
      <Carousel
        loop={true}
        autoplay={true}
        className=""
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2" >
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {data && data.map((image, index) => (
          <div className="relative h-full w-full" key={index} >
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4" data-aos="fade-up">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {image.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {image.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;