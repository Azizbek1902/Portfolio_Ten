import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import img from "../../../assets/images/avater.png";

function Review() {
  const data = [
    {
      id: 1,
      icon: <FaQuoteLeft size={34} color="#F9A743" />,
      title:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
      img: img,
      name: "Jonathon Andrew",
      desc: "CEO, Themefisher",
    },
    {
      id: 2,
      icon: <FaQuoteLeft size={34} color="#F9A743" />,
      title:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
      img: img,
      name: "Jonathon Andrew",
      desc: "CEO, Themefisher",
    },
    {
      id: 3,
      icon: <FaQuoteLeft size={34} color="#F9A743" />,
      title:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.",
      img: img,
      name: "Jonathon Andrew",
      desc: "CEO, Themefisher",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10">
        {data.map((elem, ind) => {
          return (
            <div className="text-center" key={ind + 1}>
              <div className="flex justify-center mb-5">{elem.icon}</div>
              <i className="text-sm text-[#777] font-normal tracking-wider leading-4 text-center mb-5">
                {elem.title}
              </i>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="flex justify-center mt-8 mb-2">
                    <img src={elem.img} className="rounded-full w-14 h-14" alt="" />
                  </div>
                  <h1 className="pb-2 font-medium font-sans text-xl">
                    {elem.name}
                  </h1>
                  <p className="text-[#3b4045] text-sm font-extralight tracking-wider">
                    {elem.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
