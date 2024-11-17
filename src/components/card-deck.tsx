"use client";

import { GameRules } from "@/utils/game-rules";
import { useState } from "react";

const CardDeck = () => {
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const cards = Object.keys(GameRules);

  const drawCard = () => {
    const drawnCard = cards[Math.floor(Math.random() * cards.length)];
    setCurrentCard(drawnCard);
    alert(`Rule: ${GameRules[drawnCard]}`);
  };

  return (
    <div>
      <button
        onClick={drawCard}
        className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Draw a Card
      </button>
      {currentCard && (
        <div className="mt-4">
          <h2 className="text-2xl">Card: {currentCard}</h2>
          <p className="text-lg">{GameRules[currentCard]}</p>
        </div>
      )}
    </div>
  );
};

export default CardDeck;
