import React from "react";

function Card({ icon, title, desc }) {
  return (
    <div className="text-center md:text-start">
      <div className="flex justify-center md:justify-start">{icon}</div>
      <h1 className="pt-2 text-xl font-semibold font-mono pb-3">{title}</h1>
      <p className="text-lg leading-6 font-light">{desc}</p>
    </div>
  );
}

export default Card;
