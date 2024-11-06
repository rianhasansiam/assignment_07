import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cards, choicePlayerHandle, playerInforHandle }) => {
  return (
    <div className="grid lg:grid-cols-3  2xl:grid-cols-4 md:grid-cols-2 justify-center mx-auto lg:py-10 py-5 gap-y-10 lg:gap-x-3 xl:gap-x-0 ">
      {cards.map((eachObj, index) => (
        <Card
          key={index}
          eachObj={eachObj}
          choicePlayerHandle={choicePlayerHandle}
          playerInforHandle={playerInforHandle}
        />
      ))}
    </div>
  );
};

Cards.propTypes = {

  optionalFunc: PropTypes.func,
  optionalObject: PropTypes.object,
};

export default Cards;
