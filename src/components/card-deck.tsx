import Card from "./card";

const CardDeck = () => {
  const cardValues = [
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
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const cards = suits.flatMap((suit) =>
    cardValues.map((value) => ({ value, suit }))
  );

  const handleCardClick = (card: { value: string; suit: string }) => {
    alert(`You clicked on the ${card.value} of ${card.suit}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          suit={card.suit}
          onClick={() => handleCardClick(card)}
          style={{}}
        />
      ))}
    </div>
  );
};

export default CardDeck;
