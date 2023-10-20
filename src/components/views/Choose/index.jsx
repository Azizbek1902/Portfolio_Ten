import React from "react";

function Design({ img }) {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] md:w-[90%] xl:w-[75%]">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex justify-center w-full">
            <img src={img} alt="" />
          </div>
          <div className="w-full">
            <h1 className="pb-5 text-center md:text-start font-medium font-sans text-[32px] leading-[40px]">
              Lorem Ipsum Dolor Sit Amet.
            </h1>
            <p className="text-lg font-light pb-10 leading-[25px] font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, sed, assumenda. Tenetur sed esse, voluptas voluptate
              est veniam numquam, quis magni. Architecto minus suscipit quas,
              quo harum deserunt consequatur cumque!
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="rounded-full py-4 px-10 font-serif bg-[#F9A743] text-white font-medium  text-lg shawowButon">
                CHECK FEATURES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
