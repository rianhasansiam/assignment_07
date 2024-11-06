import React from "react";
import PropTypes from "prop-types";

const Card = ({ eachObj, choicePlayerHandle, playerInforHandle }) => {
  
  const {
    playerId,
    name,
    country,
    image,
    role,
    batting_bowling_type,
    bidding_price,
    rating,
  } = eachObj;

  const datahandleClick = (
    playerId,
    name,
    batting_bowling_type,
    image,
    bidding_price
  ) => {
    choicePlayerHandle(playerId, name, bidding_price);
    playerInforHandle(
      playerId,
      name,
      batting_bowling_type,
      image,
      bidding_price,
      role
    );
  };
  return (
    <div className="border rounded-xl w-[350px] lg:w-full  xl:w-[350px] p-4 mx-auto shadow-lg">
      <div>
        <img className="w-full h-[220px] rounded-xl" src={image} alt="" />
      </div>

      <h1 className="font-bold text-2xl pt-6">
        {" "}
        <i className="fa-solid fa-user rounded-full"></i> {name}
      </h1>

      <div className="flex justify-between items-center py-2 pb-4">
        <h2 className="text-gray-400">
          <i className="fa-solid fa-flag "></i> {country}
        </h2>
        <button className="btn rounded-lg">{role}</button>
      </div>
      <hr />

      <div className="flex justify-between py-3">
        <h2 className="font-semibold">Rating</h2>
        <p className="font-semibold">
          {rating} <i className="fa-solid fa-star"></i>
        </p>
      </div>

      <div className="flex justify-between py-2">
        <h2 className="font-semibold">{batting_bowling_type}</h2>
        <p className="text-gray-500">{batting_bowling_type}</p>
      </div>

      <div className="flex justify-between items-center py-3">
        <h2 className="font-semibold">price:${bidding_price}</h2>
        <button
          onClick={() =>
            datahandleClick(
              playerId,
              name,
              batting_bowling_type,
              image,
              bidding_price
            )
          }
          className="btn rounded-lg bg-white"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  optionalFunc: PropTypes.func,
  optionalObject: PropTypes.object,
};

export default Card;
