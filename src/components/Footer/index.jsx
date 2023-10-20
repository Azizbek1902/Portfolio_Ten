import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-full bg-[#F4F4F4] py-14">
        <div className="text-sm text-gray-400 text-center">Vex</div>
        <div className="flex justify-center">
          <div className="mt-5">
            <div className="flex gap-8 flex-wrap">
              <h1 className="text-lg font-sans font-semibold">HOME</h1>
              <h1 className="text-lg font-sans font-semibold">ABOUT</h1>
              <h1 className="text-lg font-sans font-semibold">SERVICE</h1>
              <h1 className="text-lg font-sans font-semibold">CONTACT</h1>
            </div>
            <div className="mt-5 flex justify-center gap-4 flex-wrap">
              <h1 className="text-xs tracking-widest font-extralight">Copyright</h1>
              <h1 className="text-xs tracking-widest font-extralight">©</h1>
              <h1 className="text-xs tracking-widest font-extralight">Themefisher|</h1>
              <h1 className="text-xs tracking-widest font-extralight">All</h1>
              <h1 className="text-xs tracking-widest font-extralight">right</h1>
              <h1 className="text-xs tracking-widest font-extralight">reserved.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
