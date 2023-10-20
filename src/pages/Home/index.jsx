import React from "react";
import hederImg from "../../assets/images/watch.png";
import Choose from "../../components/views/Choose";
import Features from "../../components/views/Features";
import Design from "../../components/views/Design";
import Dolor from "../../components/views/Dolor";
import Carousel from "../../components/views/Carousel";
import bgImg from "../../assets/images/bg.jpg";
import Review from "../../components/views/Review";

function Home() {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-[95%] md:w-[90%] xl:w-[75%]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center">
              <img src={hederImg} alt="" />
            </div>
            <div className="w-full md:mt-0 mt-5">
              <h1 className="mb-4 text-center md:text-start text-3xl md:text-6xl font-bold md:leading-[80px] leading-[45px] font-mono text-[#484848]">
                Belive in Technology, Make the change
              </h1>
              <p className="leading-6 text-center md:text-start font-light text-base mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Voluptas, modi
                fugit in veritatis labore perferendis. Minima hic at, nostrum
                nihil!
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="rounded-full py-4 px-10 font-serif bg-[#F9A743] text-white font-medium  text-lg shawowButon">
                  Buy Now With $199
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-center text-[#484848] font-bold text-4xl mb-10">
              Our Core Features
            </h1>
            <Features img={hederImg} />
          </div>
        </div>
      </div>
      <div className="bg-[#F9A743] py-24 w-full mt-20">
        <Design img={hederImg} />
      </div>
      <div className="mt-20">
        <h1 className="text-center text-[#484848] font-bold text-4xl mb-10">
          Why Choose Apple Watch
        </h1>
        <Choose img={hederImg} />
      </div>
      <div className="mt-20">
        <Dolor img={hederImg} />
      </div>
      <div className="mt-20">
        <h1 className="text-center text-[#484848] font-bold text-4xl mb-10">
          Checkout Some Amazing Shorts
        </h1>
        <Carousel />
      </div>
      <div className="my-20">
        <div
          className="py-24 bg-fixed bg-cover bg-no-repeat relative h-[52vh] w-full bg-[image:var(--image-url)]"
          style={{ "--image-url": `url(${bgImg})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000b3]">
            <div className="flex justify-center md:mx-0 mx-5 items-center h-full">
              <div className="text-center">
                <h1 className="mb-6 text-white text-3xl font-medium">
                  Get Product Updates
                </h1>
                <p className="mb-8 tracking-wider text-base font-extralight text-white">
                  Lorem ipsum dolor amet, consectetur adipisicing elit, sed do
                  eiusmod
                </p>
                <div className="flex">
                  <input
                    placeholder="Your Email Address Here"
                    type="text"
                    className="w-full h-12 pl-5 placeholder:text-gray-500 outline-none bg-white font-serif rounded-s-full"
                  />
                  <button className="h-12 bg-[#F9A743] px-10 text-white font-medium rounded-e-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="mb-10 text-center font-sans text-3xl md:text-4xl font-semibold">
          Watch Review
        </h1>
        <div className="flex justify-center">
          <div className="w-[95%] md:w-[90%] xl:w-[75%]">
            <Review />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <button className="rounded-full py-4 px-10 font-serif bg-[#F9A743] text-white font-medium  text-lg shawowButon">
          Grab You Product Now
        </button>
      </div>
    </div>
  );
}

export default Home;
