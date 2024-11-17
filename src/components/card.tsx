type CardProps = {
  value: string;
  suit: string;
  onClick: () => void;
  style: React.CSSProperties;
};

const suitIcons: { [key: string]: string } = {
  Hearts: "♥",
  Diamonds: "♦",
  Clubs: "♣",
  Spades: "♠",
};

const Card: React.FC<CardProps> = ({ value, suit, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className="w-24 h-32 bg-gradient-to-br from-purple-500 to-blue-500 text-white flex flex-col items-center justify-center rounded-lg shadow-lg border-2 border-white hover:scale-110 hover:shadow-xl transition-transform duration-200 cursor-pointer"
    >
      <div className="text-2xl font-bold">{value}</div>
      <div
        className={`mt-1 text-3xl ${
          suit === "Hearts" || suit === "Diamonds" ? "text-red-500" : ""
        }`}
      >
        {suitIcons[suit]}
      </div>
    </div>
  );
};

export default Card;
