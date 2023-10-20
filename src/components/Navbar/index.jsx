import { CgMenu } from "react-icons/cg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex justify-center bg-white">
        <div className="w-[95%] md:w-[90%] xl:w-[75%]">
          <div className="flex items-center justify-between mt-2">
            <p className="text-[25px] font-light font-serif">Vex</p>
            <div className="hidden lg:flex lg:gap-5">
              <Link>
                <h1 className="text-sm uppercase font-bold font-serif">Home</h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase font-bold font-serif">
                  About
                </h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase font-bold font-serif">
                  Service
                </h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase font-bold font-serif">
                  Contact
                </h1>
              </Link>
            </div>

            <div
              className="block lg:hidden rounded border py-2 px-3"
              onClick={() => handleOpen()}
            >
              <CgMenu size={28} color="gray" />
            </div>
          </div>
          <div
            className={`w-full justify-center overflow-hidden  transitionNav flex ${
              open ? "h-[136px]" : "h-0"
            }`}
          >
            <div>
              <Link>
                <h1 className="text-sm uppercase pb-3 text-center font-bold font-serif">
                  Home
                </h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase pb-3 text-center font-bold font-serif">
                  About
                </h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase pb-3 text-center font-bold font-serif">
                  Service
                </h1>
              </Link>
              <Link>
                <h1 className="text-sm uppercase pb-3 text-center font-bold font-serif">
                  Contact
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
