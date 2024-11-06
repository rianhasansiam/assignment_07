import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Containers/Header/Banner";
import Navbar from "./Containers/Header/Navbar";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";

function App() {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, []);

  const [claim, setClaim] = useState(0);

  const claimCoin = () => {
    toast.success("Credit Added to your Account", {
      position: "top-center",
    });

    setClaim(claim + 40000);
  };

  const [visible, setVisible] = useState({
    stastus: true,
  });
  const handleCart = (stastus) => {
    if (stastus === "cart") {
      setVisible({
        stastus: true,
      });
    } else {
      setVisible({
        stastus: false,
      });
    }
  };

  const [player, setPlayer] = useState([]);
  const choicePlayerHandle = (selected, playerName, cost) => {
    if (claim < cost) {
      toast.error("Not enough money to buy this player.Claim some Credit", {
        position: "top-center",
      });
    } else {
      setClaim(claim - cost);
      if (player.includes(selected)) {
        toast.error(`Player already selected`, {
          position: "top-center",
        });
      } else {
        if (player.length > 5) {
          toast.warn("Your Squad is Full !!", {
            position: "top-center",
          });
        } else {
          setPlayer([...player, selected]);
          toast.success(`Congrates !! ${playerName} is now in your squad`, {
            position: "top-center",
          });
        }
      }
    }
  };

  const mainArrayHandel = (id) => {
    setPlayer(player.filter((obj) => obj != id));
  };

  return (
    <>
      <ToastContainer />
      {/* Header Sction */}
      {/* Navbar */}
      <Navbar claim={claim} />
      {/* Banner */}
      <Banner claimCoin={claimCoin} />
      {/* Main Section */}
      <Main
        claim={claim}
        mainArrayHandel={mainArrayHandel}
        visible={visible}
        cards={cards}
        handleCart={handleCart}
        choicePlayerHandle={choicePlayerHandle}
        player={player}
      />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
