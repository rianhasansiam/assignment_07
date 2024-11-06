import React from "react";
import PropTypes from "prop-types";

const Banner = ({ claimCoin }) => {
  return (
    <div className="banner container mx-auto bg-black rounded-3xl py-24 mt-10">
      <img className="mx-auto" src="./assets/banner-main.png" alt="" />
      <h1 className="text-white font-extrabold text-lg lg:text-4xl text-center mt-10">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className=" text-center my-4 lg:text-xl font-semibold text-gray-400">
        Deyond Boundaries Beyond Limits
      </p>

      <div className="border-2 rounded-lg border-[#E7FE29] p-1 w-[180px] mx-auto">
        <button
          onClick={claimCoin}
          className="bg-[#E7FE29] rounded-lg font-bold p-3"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  optionalFunc: PropTypes.func,
};

export default Banner;
