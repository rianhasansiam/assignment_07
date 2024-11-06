import React from "react";
import PropTypes from "prop-types";

const Selection = ({ loopObj, deleteHandle }) => {
  const { playerName, playingStyle, image, id,role,price } = loopObj;
  return (
    <div className="flex justify-between items-center border rounded-2xl p-5 px-8 shadow-lg my-10">
      <div className="flex gap-4 items-center">
        <img className="w-[100px] h-[70px] rounded-2xl" src={image} alt="" />
        <div>
          <h1 className="font-bold text-xl pb-1">{playerName}</h1>
          <p className="font-semibold">{role}</p>
         <p className="font-semibold">${price}</p>
        </div>
      </div>

      <div className="cursor-pointer">
        <i
          onClick={() => deleteHandle(playerName, id)}
          className="fa-solid fa-trash text-red-500 text-3xl "
        ></i>
      </div>
    </div>
  );
};

Selection.propTypes = {
  optionalFunc: PropTypes.func,
  optionalObject: PropTypes.object,
};

export default Selection;
