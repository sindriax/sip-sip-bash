type CardProps = {
    value: string;
    onClick: () => void;
    style: React.CSSProperties;
  };
  
  const Card: React.FC<CardProps> = ({ value, onClick, style }) => {
    return (
      <div
        onClick={onClick}
        style={style}
        className="w-16 h-24 bg-blue-500 text-white flex items-center justify-center rounded-md shadow-lg hover:bg-blue-600 cursor-pointer"
      >
        {value}
      </div>
    );
  };
  
  export default Card;
  