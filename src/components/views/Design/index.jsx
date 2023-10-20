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
            <h1 className="text-white pb-5 text-center md:text-start font-semibold font-sans text-[32px] leading-[40px]">
              Designed By Professional , The Benefit For Creative Gigs
            </h1>
            <p className="text-lg font-light text-white leading-[25px] font-sans">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia vel
              labore, deleniti minima nisi, velit atque quaerat impedit ea
              maxime sunt accusamus at obcaecati dolor iure iusto omnis quis
              eum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              commodi odit, illo, qui aliquam dol
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
