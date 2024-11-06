import React from "react";
import PropTypes from "prop-types";
import Selection from "./Selection";

const SectionParents = ({ playerInfo, deleteHandle, handleCart }) => {
  // console.log(playerInfo)
  return (
    <div>
      {playerInfo.length == 0 ? (
        <h1 className="py-24 font-bold text-2xl text-center">
          Please..! Select Your Favourite Players...
        </h1>
      ) : (
        ""
      )}
      {playerInfo.map((loopObj, index) => (
        <Selection key={index} loopObj={loopObj} deleteHandle={deleteHandle} />
      ))}

      <div
        onClick={() => handleCart("cart")}
        className="border p-1 rounded-lg inline-block"
      >
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#E7FE29]">
          Add More Player
        </button>
      </div>
    </div>
  );
};

SectionParents.propTypes = {
    optionalFunc: PropTypes.func,
    optionalObject: PropTypes.object,
};

export default SectionParents;
