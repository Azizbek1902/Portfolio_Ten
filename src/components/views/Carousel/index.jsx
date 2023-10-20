import { BsSearch } from "react-icons/bs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
import img5 from "../../../assets/images/img5.png";

function Carousel() {
  const data = [img1, img3, img4, img5, img2];
  return (
    <div className="flex justify-center">
      <div className="w-[95%] md:w-[90%] xl:w-[75%]">
        <Swiper
          className="mySwiper"
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1450: {
              spaceBetween: 50,
              slidesPerView: 5,
            },
          }}
        >
          {data.map((item, ind) => {
            return (
              <SwiperSlide
                className="flex relative  divCard justify-center items-center w-full h-full"
                key={ind + 1}
              >
                <div className="flex justify-center absolute w-full h-full items-center">
                  <div className="bgColor bgW w-[60%] flex justify-center items-center h-[60%]">
                    <button className="bgG bgColor textT rounded-full p-4">
                      <BsSearch size={24} />
                    </button>
                  </div>
                </div>
                <img src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
