"use client";

import { useState } from "react";
import Card from "./card";
import { GameRules } from "@/utils/game-rules";

const GameBoard = () => {
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const cardDeck = suits.flatMap((suit) =>
    values.map((value) => ({ value, suit }))
  );

  const [selectedCard, setSelectedCard] = useState<{
    value: string;
    suit: string;
  } | null>(null);
  const [selectedCardRule, setSelectedCardRule] = useState<string | null>(null);

  const handleCardClick = (card: { value: string; suit: string }) => {
    setSelectedCard(card);
    const cardKey = `${card.value} of ${card.suit}`;
    setSelectedCardRule(GameRules[cardKey] || "No rule found for this card");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* <h1 className="text-4xl font-bold mb-4 text-center">Sip Sip Game</h1> */}
      <div className="relative flex items-center justify-center h-[600px] w-[600px]">
        {cardDeck.map((card, index) => {
          const angle = (index / cardDeck.length) * 2 * Math.PI;
          const x = 250 * Math.cos(angle);
          const y = 250 * Math.sin(angle);

          return (
            <Card
              key={`${card.value}-${card.suit}`}
              value={card.value}
              suit={card.suit}
              onClick={() => handleCardClick(card)}
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}

        {selectedCard && (
          <div className="absolute bottom-0 mt-4 bg-white text-black p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold">
              Card: {selectedCard.value} of {selectedCard.suit}
            </h2>
            <p className="text-lg">{selectedCardRule}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
