import React from "react";

function Card({animal}) {
  return (
    <div className="p-1 border rounded shadow-xl">
      <div className="w-full h-40 rounded-xl">
        <img src={animal?.img} alt="" className="w-full h-full rounded"/>
      </div>
      <p className="text-center font-bold text-xm">{animal?.title || "hii"}</p>
      <p className="text-start text-gray-500 text-sm line-clamp-3">{animal?.desc}</p>
    </div>
  );
}

export default Card;
