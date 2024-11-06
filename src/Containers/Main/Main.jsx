import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import Cards from "./Cards/Cards";

import SectionParents from "./Selection/SectionParents";

const Main = ({
  cards,
  handleCart,
  visible,
  choicePlayerHandle,
  player,
  mainArrayHandel,
  moneyHandle,
  claim,
}) => {
  const [playerInfo, setPlayerInfo] = useState([]);

  const playerInforHandle = (
    playerId,
    playernam,
    playingStyle,
    imagePic,
    cost,
    role
  ) => {
    const arryCheck = playerInfo.some((obj) => obj.playerName == playernam);

    if (claim < cost) {
    } else {
      if (arryCheck) {
      } else {
        if (playerInfo.length < 6) {
          const createObj = {
            playerName: playernam,
            playingStyle: playingStyle,
            image: imagePic,
            id: playerId,
            role:role,
            price:cost
            
          };

          setPlayerInfo([...playerInfo, createObj]);
        }
      }
    }
  };

  const deleteHandle = (findName, id) => {
    toast.warn("Player removed", {
      position: "top-right",
    });

    mainArrayHandel(id);

    const storearr = playerInfo.filter((obj) => obj.playerName !== findName);
    setPlayerInfo(storearr);
  };

  return (
    <div className="container mx-auto py-20 lg:px-10 md:pb-52 pb-[210px]">
      <div className="flex  justify-between items-center">
        <h1
          className={`lg:text-4xl text-xl md:text-2xl font-bold ${
            visible.stastus ? "block" : "hidden"
          }`}
        >
          Available Players
        </h1>
        <h1
          className={`lg:text-4xl text-md md:text-2xl font-bold ${
            visible.stastus ? "hidden" : "block"
          }`}
        >
          Selected Player ({playerInfo.length}/6)
        </h1>
        <div className="border-2 rounded-xl overflow-hidden">
          <button
            onClick={() => handleCart("cart")}
            className={`p-2 md:px-3 lg:px-3 ${
              visible.stastus ? "bg-[#E7FE29]" : "bg-white"
            }  font-semibold`}
          >
            Available
          </button>
          <button
            onClick={() => handleCart("selected")}
            className={`p-2 font-semibold ${
              visible.stastus ? "bg-white" : "bg-[#E7FE29]"
            }`}
          >
            Selected ({playerInfo.length})
          </button>
        </div>
      </div>

      {visible.stastus ? (
        <Cards
          moneyHandle={moneyHandle}
          cards={cards}
          playerInforHandle={playerInforHandle}
          choicePlayerHandle={choicePlayerHandle}
        />
      ) : (
        <SectionParents
          playerInfo={playerInfo}
          deleteHandle={deleteHandle}
          handleCart={handleCart}
        />
      )}
    </div>
  );
};

Main.propTypes = {
  optionalFunc: PropTypes.func,
  optionalObject: PropTypes.object,
  optionalBool: PropTypes.bool,
  

};

export default Main;
