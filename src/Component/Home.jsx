import React, { useEffect } from "react";
import DisplayCardContent from "./DisplayCardContent";
import { startGame } from "../Actions/StartGameAction";
import { flipCard } from "../Actions/fiipcard";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const card = useSelector((state) => state.card);

  const { cardFlipped, cardArray, defuseCardNumber, res } = card;
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame());
  };

  useEffect(() => {
    handleStartGame();
  }, []);

  const handleFlipCard = (id) => {
    dispatch(flipCard(id));
  };

  return (
    <div class="flex flex-col max-w-2xl mx-auto mt-6">
      <div>
        <DisplayCardContent
          cardContent={cardFlipped}
          cardRemaining={cardArray.length}
          defuseCardNumber={defuseCardNumber}
          res={res}
        />
      </div>
      <div class="mt-6">
        <button
          class="bg-slate-900 text-white py-2 px-4 rounded w-full"
          onClick={handleFlipCard}
        >
          Flip
        </button>
      </div>
    </div>
  );
};

export default HomePage;
