import { BsAlarm } from "react-icons/bs";
import { TbShoppingCart } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import Card from "./Card";
import React from "react";

function Features({ img }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <div className="mb-6">
            <Card
              icon={<BsAlarm size={24}/>}
              title="Smooth Touch"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
          <div className="mb-6">
            <Card
              icon={<BsBell size={24}/>}
              title="Elegant Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
          <div className="mb-6">
            <Card
              icon={<TbShoppingCart size={24}/>}
              title="Easy Pricing"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div>
          <div className="mb-6">
            <Card
              icon={<BsAlarm size={24}/>}
              title="Smooth Touch"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
          <div className="mb-6">
            <Card
              icon={<BsBell size={24}/>}
              title="Elegant Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
          <div className="mb-6">
            <Card
              icon={<TbShoppingCart size={24}/>}
              title="Easy Pricing"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, inventore?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
